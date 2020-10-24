const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const dbService = require('./dbService');

 //const {getHomePage} = require('./routes/index');
 //const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 3000;
app.use(cors());
app.use(express.json());

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.

// const db = mysql.createConnection ({
//     host: 'localhost',
//     user: 'root',
//     password: 'Password123@',
//     database: 'socka'
// });


// connect to database
// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Connected to database');
// });
// global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
// app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
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

app.get("/add-student", (req, res) => {
    res.render("add-student");

    // create
app.post('/insert', (request, response) => {
    const { name } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewName(name);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

// read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

// update
app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

// delete
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(name);
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})


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
app.get("/website-student-profile",(req,res)=>{
    res.render("website-student-profile");
});
app.get("/website-warden-dashboard",(req,res)=>{
    res.render("website-warden-dashboard");
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
