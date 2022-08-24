# shhf
SHHF System!
THis is the SHHF Backend written in Rust.

Techstack:
actix as web backend
sqlx for database communication
reqwest for internal web requests to 3rdparties

# how to install
1) checkout the repository
2) add an .env file in your project root with the following variables:
DATABASE_URL="mysql://user:password@hostname:3306/databasename
SECRET_KEY="smashyourheadfivetimestothekeyboardandputkeyboardonhed"

3) run cargo run
