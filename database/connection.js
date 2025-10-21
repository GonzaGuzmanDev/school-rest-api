import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'secretpass',
    database: 'school-api'
});

console.log('Database connection established');

/*db.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));*/

export default db;