use actix_web::get;
use actix_web::HttpResponse;
use actix_web::web;
use actix_web_httpauth::extractors::bearer::BearerAuth;
use serde::Deserialize;
use serde::Serialize;
use serde_json::json;
use sqlx::query_as;
use crate::AppState;

#[derive(Debug, Deserialize, Serialize)]
struct Users{
    idusers: i32,
    username: String,
    firstname: Option<String>,
    lastname: Option<String>,
    password: Option<String>,
    deleted:i32
}

#[get("/users")]
pub async fn get_users(data: web::Data<AppState>,_auth: BearerAuth) -> HttpResponse {
   let pool = &data.db;
    let results = query_as!(Users,
                            "SELECT idusers,username,firstname,lastname,password,deleted FROM users")
        .fetch_all(pool).await.unwrap();
    HttpResponse::Ok().content_type("application/json").json(json!(results))
}
