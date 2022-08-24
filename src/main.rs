use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use actix_files as fs;
use actix_web_httpauth::extractors::bearer;
use anyhow::Result;

mod auth;
mod db;
mod admin;
mod api;
mod user_token;
mod menuitems;

#[get("/")]
async fn index() -> impl Responder {
    HttpResponse::Ok().body("<script>window.location.href = '/app'</script>")
}

pub struct JsonResult{
    pub message: String,
    pub status: String,
}

pub struct AppState{
    pub db: sqlx::Pool<sqlx::MySql>
}

#[actix_web::main]
async fn main() -> Result<()> {
    //read .env file
    let dotenv_result = dotenv::dotenv();
    if dotenv_result.is_err() {
        println!("Could not read .env file");
    }
    let db_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let pool = sqlx::mysql::MySqlPoolOptions::new() 
        .connect(&db_url).await.unwrap();

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(AppState{db:pool.clone()}))
            //static files
            //map routes
            .service(index)
            .service(auth::login)
            .service(auth::passwordhasher)
            .service(
                web::scope("/api")
                    .service(api::index)
                    .service(menuitems::menuitems)
                    .service(api::get_posts)
                    .service(api::get_user_posts)
                    .service(api::create_post)
                    .service(api::reprocess)
             )
            .service(
                web::scope("/admin")
                    .app_data(
                        bearer::Config::default()
                            .realm("Restricted Area")
                            .scope("read write")
                    )
                    .service(admin::get_users)
             )
            .service(fs::Files::new("/static", "./static/").show_files_listing())
            .service(fs::Files::new("/assets", "./app/assets/").show_files_listing())
            .service(fs::Files::new("/app", "./app/").index_file("index.html"))
//            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
    
}
