const { Client } = require('pg');

const client = new Client({
    user: 'miniuser',
    host: 'localhost',
    database: 'mini',
    password: 'minipass',
    port: 5432,
});

client.connect();
module.exports.client=client;