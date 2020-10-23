const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

 //const {getHomePage} = require('./routes/index');
 //const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 3000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Password123@',
    database: 'socka'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
	res.render("index");
});
app.get("/pricing", (req, res) => {
	res.render("pricing");
});
app.get("/survey", (req, res) => {
	res.render("survey");
});
app.get("/website-forum", (req, res) => {
	res.render("website-forum");
});
app.get("/website-forum-thread", (req, res) => {
	res.render("website-forum-thread");
});
app.get("/website-contact", (req, res) => {
	res.render("website-contact");
});
app.get("/login", (req, res) => {
	res.render("login");
});
app.get("/website-student-dashboard",(req,res)=>{
    res.render("website-student-dashboard");
});
// app.get('/add', addPlayerPage);
// app.get('/edit/:id', editPlayerPage);
// app.get('/delete/:id', deletePlayer);
// app.post('/add', addPlayer);
// app.post('/edit/:id', editPlayer);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
