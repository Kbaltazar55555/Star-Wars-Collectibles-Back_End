const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DB_URI, 
{
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
})
.then(() => {
    console.log('connected to mongo db, boi')
})
.catch((err) => {
        console.log(err.mesage);
});

db.on('error', () => {
    console.log('Error occured from the DB');
});
db.on('open', () => {
    console.log('Successfully connected to the database');
});

module.exports = mongoose;