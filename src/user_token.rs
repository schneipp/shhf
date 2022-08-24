use chrono::Utc;
use jsonwebtoken::{EncodingKey, Header, DecodingKey};
use serde::{Serialize, Deserialize};


/*pub static KEY: [u8; 16] = [
    0x08, 0x02, 0x03, 0x04, 0x45, 0x06, 0x07, 0x08,
    0x09, 0x1a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
];
*/
static ONE_WEEK: i64 = 60 * 60 * 24 * 7; // in seconds
pub static KEY: &str = env!("SECRET_KEY");
#[derive(Debug, Serialize, Deserialize)]
pub struct UserToken {
    // issued at
    pub iat: i64,
    // expiration
    pub exp: i64,
    // data
    pub user: String,
    pub idusers: i32,
    pub login_session: String,
}

impl UserToken {
    pub fn generate_token(username: String,idusers: &i32) -> String {
        let now = Utc::now().timestamp_nanos() / 1_000_000_000; // nanosecond -> second
        let payload = UserToken {
            iat: now,
            exp: now + ONE_WEEK,
            user: username,
            idusers: *idusers,
            login_session: idusers.to_string(),
        };

        jsonwebtoken::encode(
            &Header::default(),
            &payload,
            &EncodingKey::from_secret(KEY.as_ref()),
        )?
    }
    pub fn verify_token(token: String) -> bool {
        jsonwebtoken::decode::<UserToken>(
            &token,
            &DecodingKey::from_secret(KEY.as_ref()),
            &jsonwebtoken::Validation::default(),
        )
        .is_ok()
    }
    pub fn decode_token(token: String) -> UserToken {
        jsonwebtoken::decode::<UserToken>(
            &token,
            &DecodingKey::from_secret(KEY.as_ref()),
            &jsonwebtoken::Validation::default(),
        )?.claims
    }
}
