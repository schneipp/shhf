use actix_web::{HttpResponse, post, web::Json};
use serde::{Serialize, Deserialize};



#[derive(Serialize,Deserialize,Debug)]
struct Menuitems<'a>{
    url: &'a str,
    name: &'a str,
}

#[derive(Serialize,Deserialize,Debug)]
pub struct Token{
pub     token: Option<String>,
}


#[post("/menuitems")]
pub async fn menuitems(request: Json<Token>) -> HttpResponse {
    let mut logged_in = false;
    if let Some(_token) = &request.token {
            logged_in = true;
    }    
    let mut items:Vec<Menuitems> = vec![Menuitems{url:"/",name:"Dump"}];
    if !logged_in {
       items.push(Menuitems{url:"/auth",name:"Login"});
    }else{
       items.push(Menuitems{url:"/post",name:"Add"});
       items.push(Menuitems{url:"/auth",name:"Profile"});
    }
    HttpResponse::Ok().content_type("application/json").json(items)
}

