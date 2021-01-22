DROP TABLE IF EXISTS login;
DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS user_education;

CREATE TABLE IF NOT EXISTS login (
    id SERIAL PRIMARY KEY UNIQUE,
    email varchar not null unique,
    firstname varchar,
    lastname varchar,
    password varchar,
    primary key(email,id)
);

CREATE TABLE IF NOT EXISTS sessions (
    id  int references login(id) on delete cascade on update cascade,
    email varchar not null unique,
    cookie varchar,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS user_details(
    id  int references login(id) on delete cascade on update cascade,
    user_email varchar not null unique,
    user_name varchar,
    user_age integer,
    user_location varchar,
    primary key(id)

);

CREATE TABLE IF NOT EXISTS user_education(
    id  int references login(id) on delete cascade on update cascade,
    user_email varchar not null unique,
    user_qualification varchar,
    user_role varchar,
    user_languages text[],
    user_tech text[],
    user_specialization text[],
    primary key(id)
);



    

