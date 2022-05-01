const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employees"
});

// Need to set up error handling just in case the connection is messed up
connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;