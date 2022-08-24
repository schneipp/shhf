use actix_web::{HttpResponse, post, web::{Json, self}, get };
use serde::{ Serialize, Deserialize};
use sqlx::FromRow;
use crate::{AppState, user_token::UserToken};
use pwhash::bcrypt;

#[derive(Debug, Deserialize, Serialize, Clone,FromRow)]
pub struct Users{
    pub idusers: i32,
    pub username: String,
    pub firstname: Option<String>,
    pub lastname: Option<String>,
    pub password: Option<String>,
    pub deleted:i32 
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Authority{
    pub idauthority: i32,
    pub name: String
}

#[derive(Debug, Deserialize, Serialize)]
pub struct RequestLogin{
    pub username: Option<String>,
    pub password: Option<String>
}

#[get("/auth/passwordhasher/{password}")]
pub async fn passwordhasher(path: web::Path<(String,)>) -> HttpResponse {
    let hash = bcrypt::hash(&path.0)?;
    HttpResponse::Ok().content_type("application/json").json(hash)
}

#[post("/auth/login")]
pub async fn login(login_request: Json<RequestLogin>, data: web::Data<AppState>) -> HttpResponse{
    //get the db pool
    let pool = &data.db;
    //get the username and password from the request
    if let Some(username) = &login_request.username {
        //password is optional (in db nullable), so check if it is present or default to "-"
        let password = String::from(&login_request.password.clone().unwrap_or_else(|| "-".to_string()));
        let result = sqlx::query_as!(Users,"SELECT idusers,username,firstname,lastname,password,deleted FROM users WHERE username = ?"
                                ,&username).fetch_optional(pool).await.expect("no user found");
        if let Some(result) = result{
            let password_hash = result.password.unwrap_or_else(|| "x-".to_string());
            if bcrypt::verify(password, &password_hash) {
                    //if password is correct, return the user token
                    let token = UserToken::generate_token(result.username, &result.idusers);
                    let response_string = format!("{{\"result\":\"{}\",\"message\":\"authentication successful\"}}", token);
                    //return token as json formatted result with ok response code and message
                    return HttpResponse::Ok().content_type("application/json")
                        .body(response_string);
            }else{
                return HttpResponse::Ok().content_type("application/json").body("{\"result\":\"failure\",\"message\":\"authentication failed\"}");
            }
        }else{
            return HttpResponse::Ok().content_type("application/json").body("{\"result\":\"failure\",\"message\":\"record lookup failed\"}");
        }
    }
    HttpResponse::Unauthorized().json("Invalid username or password")
}
