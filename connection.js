const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employees_db"
});

// Need to set up error handling just in case the connection is messed up
connection.connect(function (err) {
    if (err) throw err;
    console.log("Will this throw an error")
});

module.exports = connection;