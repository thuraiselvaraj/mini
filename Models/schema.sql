-- DROP TABLE IF EXISTS login;
-- DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS user_details;

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
    user_age int,
    user_location varchar,
    user_qualification text[],
    user_role varchar,
    user_languages text[],
    user_tech text[],
    user_specialization text[],
    primary key(id)

);

CREATE TABLE IF NOT EXISTS comments(
    id  int references login(id) on delete cascade on update cascade,
    c_id int SERIAL PRIMARY KEY UNIQUE,
    post_id int references post(post_id) ,
    parent_id int references comments(c_id),
    c_time DATETIME NOT NULL DEFAULT GETDATE(),
    c_data varchar,
    c_likes int,

);

CREATE TABLE IF NOT EXISTS post(
    id  int references login(id) on delete cascade on update cascade,
    post_id int,
    post_url varchar,
    post_desc varchar,
    p_time DATETIME NOT NULL DEFAULT GETDATE(),
    post_likes int,
    post_upvotes int
);

CREATE TABLE IF NOT EXISTS stories(
    id  int references login(id) on delete cascade on update cascade,
    post_id int references post(post_id),
    s_id int SERIAL PRIMARY KEY UNIQUE,
    s_url varchar,
    s_time DATETIME NOT NULL DEFAULT GETDATE()
);

CREATE TABLE IF NOT EXISTS subscribers(
    id  int references login(id) on delete cascade on update cascade,
    s_id  int references login(id)
);


CREATE TABLE IF NOT EXISTS user_post_rel(
    u_id  int references login(id) on delete cascade on update cascade,
    story_id int references stories(s_id)
    sub_count int,
);





    

