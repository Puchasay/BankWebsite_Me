// Require Express - a web server for Node.js
let express = require('express');

// Require the mysql module that let's us
// speak with a mysql server
let mysql = require('mysql');

// Create a new connection
// using correct credentials
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'bankimport'
});

// Connect to the database
db.connect();

// Create a bew web server
let app = express();

// Serve files from the www folder
app.use(express.static('www'));

// Create a route that will show all
// data from the user table in MySQL
// as JSON
/*app.get('/json/users', function (req, res) {
    // Ask a question / Make a query
    db.query('SELECT users.first_name, users.last_name, users.pnr, users.email FROM users', function (error, results) {
        // Send the results of the query to the browser as JSON
        res.json(results);
        // We can write like this to find what error is instead,
        // when you write wrong users as userx:
        //res.json(error || results);
    });
});*/

app.get('/json/accounts', function (req, res) {
    // Ask a question / Make a query
    // make a query for all customerwith theirs account
    db.query('SELECT users.pnr, users.first_name, users.last_name, accounts.number, accounts.balance FROM users, accounts WHERE users.pnr = accounts.user_pnr',
    function (error, results) {
        res.json(results);
    });
});

app.get('/json/sums', function (req, res) {
    // make a query for total summa money per personnummer:
    db.query('SELECT users.pnr, users.first_name, users.last_name, accounts.number, sum(accounts.balance) as saldo FROM users, accounts WHERE users.pnr = accounts.user_pnr group by users.pnr',
    function (error, results) {
        res.json(results);
    });
});

app.get('/json/minuss', function (req, res) {
    // make a query for who has minus saldo:
    db.query('SELECT users.pnr, users.first_name, users.last_name, accounts.number, accounts.balance FROM users, accounts WHERE users.pnr = accounts.user_pnr and accounts.balance < 0',
    function (error, results) {
        // Send the results of the query to the browser as JSON
        res.json(results);
        // We can write like this to find what error is instead, 
        // but this is quite bad and can get wrong message by using this syntax
        // when you write wrong users as userx:
        //res.json(error || results);
    });
});

// Start the web server at a port 
// so it can listen to traffic from a browser
app.listen(3000, function () {
    console.log('Listening on port 3000');
});




