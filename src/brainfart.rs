pub type Brainfarts = Response<Brainfart>;

#[derive(Debug, Deserialize, Serilaize)]
pub struct Brainfart {
    pub idbrainfart: String,
    pub created_at: DateTime<Utc>,
    pub message: String,
    pub likes: Vec<Like>
}

impl Brainfart {
   pub fn new(message: String) -> Self{
       Self{
           id: Uuid::new_v4().to_string(),
           created_at: Utc::now(),
           message,
           likes: vec![]
       }
   }
}


