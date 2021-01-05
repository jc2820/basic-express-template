DROP TABLE IF EXISTS users;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    bio TEXT
);

INSERT INTO users (username, email, bio)
VALUES ('Name', 'email@server.com', 'Notes');