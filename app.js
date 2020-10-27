const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const hbs = require('hbs');
dotenv.config();
const app = express();
//const dbService = require('./dbService');

//const {getHomePage} = require('./routes/index');
//const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 5000
app.use(cors());
app.use(express.json());

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password123@',
  database: 'socka'
});


//connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
// app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
// app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.set("views", "./views");


app.get("/", (req, res) => {
  res.render("index");
});

app.get('/add-student-warden', (req, res) => {
  let sql = "SELECT * FROM Student";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('student_view.hbs', {
      results: results
    });
  });
});
 
//route for insert data
app.post('/save', (req, res) => {
  let data = { reg_no: req.body.reg_no, room_no: req.body.room_no, block_id: req.body.block_id, stud_name: req.body.stud_name, gender: req.body.gender, dob: req.body.dob, blood_group: req.body.blood_group, email_id: req.body.email_id, address: req.body.address, father_name: req.body.father_name, mother_name: req.body.mother_name, parent_email: req.body.parent_email, course_id: req.body.course_id };
  let sql = "INSERT INTO product SET ?";
  let query = db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/add-student-warden');
  });
});

//route for update data
app.post('/update', (req, res) => {
  let sql = "UPDATE product SET product_name='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_id=" + req.body.id;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/add-student-warden');
  });
});

//route for delete data
app.post('/delete', (req, res) => {
  let sql = "DELETE FROM product WHERE product_id=" + req.body.product_id + "";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/add-student-warden');
  });
});



// // create
// app.post('/insert', (request, response) => {
//     const { name } = request.body;
//     const db = dbService.getDbServiceInstance();

//     const result = db.insertNewName(name);

//     result
//         .then(data => response.json({ data: data }))
//         .catch(err => console.log(err));
// });

// // read
// app.get('/getAll', (request, response) => {
//     const db = dbService.getDbServiceInstance();

//     const result = db.getAllData();

//     result
//         .then(data => response.json({ data: data }))
//         .catch(err => console.log(err));
// })

// // update
// app.patch('/update', (request, response) => {
//     const { id, name } = request.body;
//     const db = dbService.getDbServiceInstance();

//     const result = db.updateNameById(id, name);

//     result
//         .then(data => response.json({ success: data }))
//         .catch(err => console.log(err));
// });

// // delete
// app.delete('/delete/:id', (request, response) => {
//     const { id } = request.params;
//     const db = dbService.getDbServiceInstance();

//     const result = db.deleteRowById(id);

//     result
//         .then(data => response.json({ success: data }))
//         .catch(err => console.log(err));
// });

// app.get('/search/:name', (request, response) => {
//     const { name } = request.params;
//     const db = dbService.getDbServiceInstance();

//     const result = db.searchByName(name);

//     result
//         .then(data => response.json({ data: data }))
//         .catch(err => console.log(err));
// });
app.get('/add-warden-chiefwarden', (req, res) => {
  let sql = "SELECT * FROM Staff";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('warden_view.hbs', {
      results: results
    });
  });
});

//route for insert data
app.post('/saveStaff', (req, res) => {
  let data = { staff_id: req.body.staff_id, staff_name: req.body.staff_name, gender: req.body.gender, dob: req.body.dob, email_id: req.body.email_id, staff_role: req.body.staff_role, salary: req.body.salary };
  let sql = "INSERT INTO Staff SET ?";
  let query = db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/add-warden-chiefwarden');
  });
});

//route for update data
app.post('/updateStaff', (req, res) => {
  let sql = "UPDATE Staff SET staff_id='" + req.body.staff_id + "',staff_name='" + req.body.staff_name + "', gender='" + req.body.gender + "',dob='" + req.body.dob + "',email_id='" + req.body.email_id + "',staff_role='" + req.body.staff_role + "',salary='" + req.body.salary + "' WHERE staff_id='" + req.body.staff_id + "'";
  let query = db.query(sql, (err, results) => {
    if (err) throw err; 
    res.redirect('/add-warden-chiefwarden'); 
  });
});   
    
//route for delete data
app.post('/deleteStaff', (req, res) => {
  let sql = "DELETE FROM Staff WHERE staff_id='" + req.body.staff_id + "'";
  console.log(sql)
  let query = db.query(sql, (err, results) => { 
    if (err) throw err; 
    res.redirect('/add-warden-chiefwarden');
  });
});

// app.get("/add-student", (req, res) => {
//   res.render("student_view");
// });


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
app.get("/website-student-dashboard", (req, res) => {
  res.render("website-student-dashboard");
});
app.get("/website-student-profile", (req, res) => {
  res.render("website-student-profile");
});
app.get("/website-warden-dashboard", (req, res) => {
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
