const client_conn=require('./connection.js').client

//create login table
const login_query = `
CREATE TABLE IF NOT EXISTS login (
    email varchar not null unique,
    firstname varchar,
    lastname varchar,
    password varchar,
    primary key(email)
);
`;

const session_query = `
CREATE TABLE IF NOT EXISTS sessions (
    email varchar ,
    cookie varchar,
    foreign key(email) references login(email) on delete cascade
);
`;



client_conn.query(login_query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table Login is successfully created');
});

client_conn.query(session_query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table session is successfully created');
});