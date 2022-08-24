use std::{fs::File, io::{Write, Cursor, copy}};

use actix_web::{web, get, HttpResponse, post} ;
use actix_web_httpauth::extractors::bearer::BearerAuth;
use chrono::Utc;
use regex::Regex;
use serde::{Serialize, Deserialize};
use sqlx::FromRow;

use crate::{AppState, user_token::UserToken};

#[derive(FromRow, Debug, Deserialize, Serialize)]
pub struct Posts {
    idposts: i32,
    idusers: i32,
    createdat: Option<String>,
    message: String,
    username: String,
    originalmessage: Option<String>,
}

#[derive(Serialize, Deserialize)]
pub struct Message{
    pub    message: String
}

#[derive(Debug)]
pub struct Link {
    pub    link: String,
    pub    title: Option<String>,
    pub    image: Option<String>
}

#[get("/")]
pub async fn index() -> HttpResponse {
    HttpResponse::Ok().content_type("application/json").json("api overlord ready!")
}

#[get("/posts")]
pub async fn get_posts(data: web::Data<AppState>) -> HttpResponse {
    let pool = &data.db;
    let res = sqlx::query_as::<_,Posts>("SELECT 
        idposts,
        posts.idusers,
        users.username,
        posts.originalmessage,
        CAST(createdat as char) as createdat,
                                    message
                                  FROM posts 
                                    INNER JOIN users ON users.idusers = posts.idusers
                                    ORDER BY idposts DESC
                                  ").fetch_all(pool).await?;    
    for row in &res {
        println!("{:?}", row);
    }
            return HttpResponse::Ok().content_type("application/json").json(res);
}

/// gets posts by a specific user
///
/// # Panics
/// 
/// Panics never happen, but if they do, this would be writte down here
#[get("/posts/{username}")]
pub async fn get_user_posts(path: web::Path<(String,)>, 
                            data: web::Data<AppState>) -> HttpResponse {
    let pool = &data.db;
    let results = sqlx::query_as::<_,Posts>("SELECT 
                                        posts.idusers,
                                        posts.message,
                                        posts.originalmessage,
                                        CAST(posts.createdat as char) as createdat,
                                        u.username
                                    FROM posts 
                                    INNER JOIN users u ON u.idusers= posts.idusers AND u.deleted=0 
                                    WHERE u.username = @p1 ORDER BY posts.idposts DESC").bind(&path.0).fetch_all(pool).await?;
    if results.is_empty() {
        HttpResponse::NotFound().content_type("application/json").json("No posts found")
    } else {
        HttpResponse::Ok().content_type("application/json").json(results)
    }
}


fn extract_links(message: &str) -> Vec<String> {
    let mut links = Vec::new();
    for line in message.replace('\n'," ").split(' ') {
        if line.starts_with("http") {
            links.push(line.to_string());
        }
    }
    links
}

pub async fn get_link_reddit(link: &str) -> Link {
    let client = reqwest::Client::new();
    //set headers to googlebot to avoid 403 error
    
    let res = client.get(link).send().await?;
    let mut image_preview_url = None;
    let mut title = None;
    let mut filename = None;
    if res.status().is_success() {
        let html = res.text().await?;
        
        //regex find title tag
        let re = Regex::new(r#"<meta property="og:(.+?)" content="(.*?)""#)?;
        for cap in re.captures_iter(&html) {
            let tag = cap[1].to_string();
            if tag == "title" {
                println!("FOUND TITLE");
                title = Some(cap[2].to_string());
            }
            if tag == "image" {
                println!("FOUND IMAGE");
                image_preview_url = Some(cap[2].to_string());
            }
        }
        if let Some(preview) = &image_preview_url {
            //url decode
            println!("preview url: {}", preview);
            let timestamp = Utc::now().timestamp();
            filename = Some(format!("static/images/img-{}.png", timestamp));
            let mut file = File::create(filename.as_ref()?)?;
            let res = client.get(preview.replace("&amp;","&")).send().await?;
            if res.status().is_success() {
                let buf = Vec::new();
                let mut content =  Cursor::new(res.bytes().await?);
                copy(&mut content, &mut file)?;
                file.write_all(&buf)?;
            }
        }
    }
    Link {
        link: link.to_string(),
        title,
        image: filename
    }
}

pub async fn message_parser(mut message: String) -> String {
//    let mut message = "bli bla blub https://www.reddit.com/r/rustjerk/comments/wrjt5e/safety_in_other_languages/ more content".to_string();
    //extrct links from Message
    let links = extract_links(&message);
    println!("{:?}", links);
    for link in links {
        let mut meta = Link { link , title: None, image: None };
        //get link title
//        if meta.link.contains("reddit") {
            meta = get_link_reddit(&meta.link).await;
            println!("{:#?}", meta);
 //       }else{
 //           meta.title = Some(get_link_title(&meta.link).await);
 //       }
        if let Some(image) = &meta.image {
            //get unix timestamp
            let timestamp = Utc::now().timestamp();

            let mut file = File::create(format!("static/images/{}.png", timestamp))?;
            file.write_all(image.as_bytes())?;
        }
        let mut image_link = String::new();
        if let Some(img) = &meta.image { 
            image_link = format!("<img src=\"{}\" />",img);
        }        
        let new_link = format!("<a href=\"{}\" target=\"_blank\">{}</a><a class=\"underline\" href=\"{}\" target=\"_blank\">{}</a>",meta.link,image_link, 
                               meta.link, meta.title.unwrap_or_else(||meta.link.to_string()));
        let fixed_message  = message.replace(&meta.link, &new_link);
        message = fixed_message;
    }
    message
}

#[get("/posts/reprocess")]
pub async fn reprocess(data: web::Data<AppState>, auth:BearerAuth) -> HttpResponse {
    if auth.token().is_empty() {
        return HttpResponse::Unauthorized().json("Unauthorized");
    }
    let token = auth.token();
    if !UserToken::verify_token(token.to_string()){
        return HttpResponse::Unauthorized().json("Invalid Token");
    }

    //get all message
    let pool = &data.db;
    let res = sqlx::query_as::<_,Posts>("SELECT 
        idposts,
        posts.idusers,
        users.username,
        CAST(createdat as char) as createdat,
                                    message,
                                    originalmessage
                                  FROM posts 
                                    INNER JOIN users ON users.idusers = posts.idusers
                                    ORDER BY idposts DESC
                                  ").fetch_all(pool).await?;    
    for row in &res {
        println!("{:?}", row);
        let processed_message = message_parser(row.message.clone()).await;
        println!("{:?}", processed_message);
        sqlx::query!("UPDATE posts SET message = ? WHERE idposts = ?", 
                     processed_message, row.idposts)
            .execute(pool).await?;

    }
    HttpResponse::Ok().json(res)
}

#[post("/posts")]
pub async fn create_post(data: web::Data<AppState>, 
                        post: web::Json<Message>, auth:BearerAuth) -> HttpResponse {
    if auth.token().is_empty() {
        return HttpResponse::Unauthorized().json("Unauthorized");
    }
    let token = auth.token();
    if !UserToken::verify_token(token.to_string()){
        return HttpResponse::Unauthorized().json("Invalid Token");
    }
    //verify jwt token
    let user = UserToken::decode_token(token.to_string());
    println!("{:?}", user);
    let msg = message_parser(post.message.to_string()).await;

    let pool = &data.db;
    sqlx::query("INSERT INTO posts (message,originalmessage,idusers) VALUES (?,?,?)")
        .bind(msg)
        .bind(&post.message)
        .bind(user.idusers)
        .execute(pool)
        .await?;
    HttpResponse::Ok().content_type("application/json").json("post created")
}
