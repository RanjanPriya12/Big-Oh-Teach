const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        const sqlQueries = [
            `CREATE TABLE IF NOT EXISTS forms(
                uniqueId UUID PRIMARY KEY NOT NULL,
                title VARCHAR(255) NOT NULL UNIQUE,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phoneNumber VARCHAR(10) NOT NULL,
                isGraduate BOOLEAN NOT NULL
            )`,
            `CREATE TABLE IF NOT EXISTS formsData(
                uniqueId UUID NOT NULL,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phoneNumber VARCHAR(10) NOT NULL,
                isGraduate BOOLEAN NOT NULL,
                FOREIGN KEY (uniqueId) REFERENCES forms(uniqueId)
            )`
        ];

        sqlQueries.forEach(sql => {
            connection.query(sql, (err, result) => {
                if (err) {
                    throw err;
                } else {
                    console.log(`Table created successfully`);
                }
            });
        });
        console.log("Mysql Connected");
    }
});

module.exports = connection;
