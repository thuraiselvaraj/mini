-- DROP TABLE IF EXISTS login;
-- DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS user_details;

CREATE TABLE IF NOT EXISTS login (
    id SERIAL UNIQUE,
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
    c_time TIMESTAMPTZ NOT NULL DEFAULT Now() ,
    c_data varchar,
    c_likes int,

);

CREATE TABLE IF NOT EXISTS post(
    id  int references login(id) on delete cascade on update cascade,
    post_id int,
    post_url varchar,
    post_desc varchar,
    post_time TIMESTAMPTZ NOT NULL DEFAULT Now() ,
    post_likes int,
    post_upvotes int,
    post_thumb_url varchar
);

CREATE TABLE IF NOT EXISTS stories(
    id  int references login(id) on delete cascade on update cascade,
    post_id int references post(post_id),
    story_id int SERIAL PRIMARY KEY UNIQUE,
    story_url varchar,
    story_time TIMESTAMPTZ NOT NULL DEFAULT Now() ,
    story_thumb_url varchar
);

CREATE TABLE IF NOT EXISTS subscribers(
    id  int references login(id) on delete cascade on update cascade,
    sub_id  int references login(id)
);


CREATE TABLE IF NOT EXISTS user_post_relation(
    u_id  int references login(id) on delete cascade on update cascade,
    story_id int references stories(story_id),
    sub_count int,
);




CREATE TABLE  IF  NOT EXISTS chats(
    chat_id serial  PRIMARY KEY UNIQUE,
    sender_id  int references login(id) on delete cascade on update cascade,
    receiver_id  int references login(id) on delete cascade on update cascade,
    chat_content varchar,
    chat_time TIMESTAMPTZ NOT NULL DEFAULT Now() ,
    chat_med_url varchar
) ;


CREATE TABLE  IF  NOT EXISTS friends(
    a_id int references login(id) on delete cascade on update cascade,
    b_id int references login(id) on delete cascade on update cascade,
);

CREATE TABLE  IF  NOT EXISTS friends(
    a_id int ,
    b_id int ,
);


    

