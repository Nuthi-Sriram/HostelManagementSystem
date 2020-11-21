const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const hbs = require('hbs');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const dbConnection = require('./database');
dotenv.config();
const app = express();
//const dbService = require('./dbService');

//const {getHomePage} = require('./routes/index');
//const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 3000
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
// APPLY COOKIE SESSION MIDDLEWARE
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge:  3600 * 1000 // 1hr
}));

// DECLARING CUSTOM MIDDLEWARE
// const ifNotLoggedin = (req, res, next) => {
//   if(!req.session.isLoggedIn){
//       return res.render('login');
//   }
//   next();
// }
const ifLoggedin = (req,res,next) => {
  if(req.session.isLoggedIn){
      return res.redirect('/');
  }
  next();
}
// END OF CUSTOM MIDDLEWARE

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
  let sql = "INSERT INTO Student SET ?";
  let query = db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/add-student-warden');
  }); 
});
   
//route for update data
app.post('/update', (req, res) => {
  let sql = "UPDATE Student SET reg_no='" + req.body.reg_no + "',room_no='" + req.body.room_no + "', block_id='" + req.body.block_id + "',stud_name='" + req.body.stud_name + "',gender='" + req.body.gender + "',dob='" + req.body.dob + "',blood_group='" + req.body.blood_group + "', email_id='" + req.body.email_id + "', address='" + req.body.address + "', father_name='" + req.body.father_name + "', mother_name='" + req.body.mother_name + "', parent_email='" + req.body.parent_email + "', course_id='" + req.body.course_id + "' WHERE reg_no='" + req.body.reg_no + "'";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/add-student-warden');
  });
}); 
 
//route for delete data
app.post('/delete', (req, res) => {
  let sql = "DELETE FROM Student WHERE reg_no='" + req.body.reg_no + "'";
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
app.get("/sign-up", (req, res) => {
  res.render("sign-up");
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
// REGISTER PAGE
app.post('/register', ifLoggedin, 
// post data validation(using express-validator)
[
    body('user_email','Invalid email address!').isEmail().custom((value) => {
        return dbConnection.execute('SELECT `email` FROM `users` WHERE `email`=?', [value])
        .then(([rows]) => {
            if(rows.length > 0){
                return Promise.reject('This E-mail already in use!');
            }
            return true;
        });
    }),
    body('user_name','Username is Empty!').trim().not().isEmpty(),
    body('user_pass','The password must be of minimum length 6 characters').trim().isLength({ min: 6 }),
],// end of post data validation
(req,res,next) => {

    const validation_result = validationResult(req);
    const {user_name, user_pass, user_email} = req.body;
    // IF validation_result HAS NO ERROR
    if(validation_result.isEmpty()){
        // password encryption (using bcryptjs)
        bcrypt.hash(user_pass, 12).then((hash_pass) => {
            // INSERTING USER INTO DATABASE
            dbConnection.execute("INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)",[user_name,user_email, hash_pass])
            .then(result => {
                res.send(`your account has been created successfully, Now you can <a href="/">Login</a>`);
            }).catch(err => {
                // THROW INSERTING USER ERROR'S
                if (err) throw err;
            });
        })
        .catch(err => {
            // THROW HASING ERROR'S
            if (err) throw err;
        })
    }
    else{
        // COLLECT ALL THE VALIDATION ERRORS
        let allErrors = validation_result.errors.map((error) => {
            return error.msg;
        });
        // REDERING login-register PAGE WITH VALIDATION ERRORS
        res.render('sign-up',{
            register_error:allErrors,
            old_data:req.body
        });
    }
});// END OF REGISTER PAGE

// LOGIN PAGE
app.post('/login', ifLoggedin, [
  body('user_email').custom((value) => {
      return dbConnection.execute('SELECT `email` FROM `users` WHERE `email`=?', [value])
      .then(([rows]) => {
          if(rows.length == 1){
              return true;
              
          }
          return Promise.reject('Invalid Email Address!');
          
      });
  }),
  body('user_pass','Password is empty!').trim().not().isEmpty(),
], (req, res) => {
  const validation_result = validationResult(req);
  const {user_pass, user_email} = req.body;
  if(validation_result.isEmpty()){
      
      dbConnection.execute("SELECT * FROM `users` WHERE `email`=?",[user_email])
      .then(([rows]) => {
          // console.log(rows[0].password);
          bcrypt.compare(user_pass, rows[0].password).then(compare_result => {
              if(compare_result === true){
                  req.session.isLoggedIn = true;
                  req.session.userID = rows[0].id;

                  res.redirect('/');
              }
              else{
                  res.render('login-register',{
                      login_errors:['Invalid Password!']
                  });
              }
          })
          .catch(err => {
              if (err) throw err;
          });


      }).catch(err => {
          if (err) throw err;
      });
  }
  else{
      let allErrors = validation_result.errors.map((error) => {
          return error.msg;
      });
      // REDERING login-register PAGE WITH LOGIN VALIDATION ERRORS
      res.render('login-register',{
          login_errors:allErrors
      });
  }
});
// END OF LOGIN PAGE

// LOGOUT
app.get('/logout',(req,res)=>{
  //session destroy
  req.session = null;
  res.redirect('/');
});
// END OF LOGOUT
// set the app to listen on the port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
