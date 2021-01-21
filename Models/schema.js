const client_conn=require('./connection.js').client

//create login table
const query = `
CREATE TABLE IF NOT EXISTS login (
    uid int not null,
    email varchar unique not null,
    firstname varchar,
    lastname varchar,
    password varchar,
    session_id varchar
);
`;

client_conn.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
});
