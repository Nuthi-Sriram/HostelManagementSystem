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
const http = require('http').Server(app);
const io = require('socket.io')(http);

//const dbService = require('./dbService'); 

//const {getHomePage} = require('./routes/index');
//const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 3000;  
app.use(cors());
app.use(express.json()); 
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});
io.sockets.on('connection', function(socket) {
  socket.on('username', function(username) {
      socket.username = username;
      io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
  });

  socket.on('disconnect', function(username) {
      io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
  })

  socket.on('chat_message', function(message) {
      io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
  });

});
 

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
  maxAge:  5 * 1000 //5 seconds
}));

// DECLARING CUSTOM MIDDLEWARE
const ifNotLoggedin = (req, res, next) => {
  if(!req.session.isLoggedIn){
      return res.render('login');
  }
  next();
}
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
app.get("/app-student-billing", (req, res) => {
  res.render("app-student-billing");
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

app.get('/add-student-localguardian', (req, res) => {
  let sql = "SELECT * FROM LocalGuardian";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('studentGuardian_view.hbs', {
      results: results
    });
  });
});

//route for insert data
app.post('/saveLocalGuardian', (req, res) => {
  let data = { guardian_name: req.body.guardian_name, reg_no: req.body.reg_no,  gender: req.body.gender, relation: req.body.relation, email_id: req.body.email_id, address: req.body.address};
  let sql = "INSERT INTO LocalGuardian SET ?";
  let query = db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/add-student-localguardian');
  }); 
});
   
//route for update data
app.post('/updateLocalGuardian', (req, res) => {
  let sql = "UPDATE LocalGuardian SET guardian_name='" + req.body.guardian_name + "',reg_no='" + req.body.reg_no + "',gender='" + req.body.gender + "', relation='" + req.body.relation + "',email_id='" + req.body.email_id + "',address='" + req.body.address + "' WHERE reg_no='" + req.body.reg_no + "'";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/add-student-localguardian');
  });
}); 
 
//route for delete data
app.post('/deleteLocalGuardian', (req, res) => {
  let sql = "DELETE FROM LocalGuardian WHERE reg_no='" + req.body.reg_no + "'";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/add-student-localguardian');
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

      
app.get('/outing-request', (req, res) => {
  let sql = "SELECT * FROM outing";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('outing_view_student.hbs', {
      results: results
    });
  });
});

//route for insert student outing data
app.post('/request', (req, res) => {
  let data = { reg_no: req.body.reg_no, outing_type: req.body.outing_type, purpose: req.body.purpose, out_date_time: req.body.out_date_time, expectedin_date_time: req.body.expectedin_date_time, actualin_date_time: req.body.actualin_date_time, staff_id: req.body.staff_id};
  let sql = "INSERT INTO outing SET ?";
  let query = db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/outing-request');
  }); 
});
   
//route for update student outing actual intime
app.post('/updateTime', (req, res) => {
  let sql = "UPDATE Outing SET actualin_date_time='" + req.body.actualin_date_time + "'";  
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/outing-request');
  }); 
});

app.get('/outing-grant', (req, res) => {
  let sql = "SELECT * FROM outing";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('outing_view_warden.hbs', {
      results: results
    });
  });
});

//route for grant gatepass 
app.post('/grant', (req, res) => {
  let sql = "UPDATE outing SET current_status='" + req.body.current_status + "'";  
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/outing-grant');
  }); 
});

app.get("/pricing", (req, res) => {
  res.render("pricing");
});
app.get("/survey", (req, res) => {
  res.render("survey");
});
app.get('/website-forum', ifNotLoggedin, (req,res,next) => {
  dbConnection.execute("SELECT `name` FROM `users` WHERE `id`=?",[req.session.userID])
  .then(([rows]) => {
      res.render('website-forum',{
          name:rows[0].name
      });
  });
  
});
app.get('/add-student-complaint', ifNotLoggedin, (req,res,next) => {
  dbConnection.execute("SELECT `name` FROM `usersStud` WHERE `id`=?",[req.session.userID])
  .then(([rows]) => {
      res.render('add-student-complaint',{
          name:rows[0].name
      });
  });
  
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
app.get("/loginStud", (req, res) => {
  res.render("loginStud");
});
app.get("/sign-up", (req, res) => {
  res.render("sign-up");
});
app.get("/sign-upStud", (req, res) => {
  res.render("sign-upStud");
});
// app.get("/website-student-dashboard", (req, res) => {
//   res.render("website-student-dashboard");
// });
app.get('/website-student-dashboard', ifNotLoggedin, (req,res,next) => {
  dbConnection.execute("SELECT `name` FROM `usersStud` WHERE `id`=?",[req.session.userID])
  .then(([rows]) => {
      res.render('website-student-dashboard',{
          name:rows[0].name
      });
  });
  
});
app.get("/website-student-profile", (req, res) => {
  res.render("website-student-profile");
});
app.get("/realTimeForum", (req, res) => {
  res.render("realTimeForum");
});
// app.get("/website-warden-dashboard", (req, res) => {
//   res.render("website-warden-dashboard");
// });

// app.get('/website-chiefwarden-dashboard', ifNotLoggedin, (req,res,next) => {
//   dbConnection.execute("SELECT `name` FROM `users` WHERE `id`=?",[req.session.userID])
//   .then(([rows]) => {
//       res.render('website-warden-dashboard',{
//           name:rows[0].name
//       });
//   });
  
// });    
app.get("/website-chiefwarden-dashboard", (req, res) => {
  res.render("website-chiefwarden-dashboard");
});
 
app.get('/website-warden-dashboard', ifNotLoggedin, (req,res,next) => {
  dbConnection.execute("SELECT `name` FROM `users` WHERE `id`=?",[req.session.userID])
  .then(([rows]) => {
      res.render('website-warden-dashboard',{
          name:rows[0].name
      });
  });
  
});
// END OF ROOT PAGE
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
                res.send(`your account has been created successfully, Now you can <a href="/login">Login</a>`);
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


//Registration page for student 

app.post('/registerStud', ifLoggedin, 
// post data validation(using express-validator)
[
    body('user_email','Invalid email address!').isEmail().custom((value) => {
        return dbConnection.execute('SELECT `email` FROM `usersStud` WHERE `email`=?', [value])
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
            dbConnection.execute("INSERT INTO `usersStud`(`name`,`email`,`password`) VALUES(?,?,?)",[user_name,user_email, hash_pass])
            .then(result => {
                res.send(`your account has been created successfully, Now you can <a href="/loginStud">Login</a>`);
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
        res.render('sign-upStud',{
            register_error:allErrors,
            old_data:req.body
        });
    }
});// END OF REGISTER PAGE

// LOGIN PAGE 
app.post('/signin', ifLoggedin, [
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

                  res.redirect('/website-warden-dashboard');
              }
              else{
                  res.render('sign-up',{
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
      res.render('sign-up',{
          login_errors:allErrors
      });
  }
});
// END OF LOGIN PAGE


// LOGIN PAGE for student
app.post('/signinStud', ifLoggedin, [
  body('user_email').custom((value) => {
      return dbConnection.execute('SELECT `email` FROM `usersStud` WHERE `email`=?', [value])
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
      
      dbConnection.execute("SELECT * FROM `usersStud` WHERE `email`=?",[user_email])
      .then(([rows]) => {
          // console.log(rows[0].password);
          bcrypt.compare(user_pass, rows[0].password).then(compare_result => {
              if(compare_result === true){
                  req.session.isLoggedIn = true;
                  req.session.userID = rows[0].id;

                  res.redirect('/website-student-dashboard');
              }
              else{
                  res.render('sign-up',{
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
      res.render('sign-upStud',{
          login_errors:allErrors
      });
  }
});
// END OF LOGIN PAGE for student
// Forume Code
io.on("connection", function (socket) {
	console.log("socket connected = " + socket.id);

	socket.on("delete_message", function (id) {
	//	console.log('time to delete');
		db.query("DELETE FROM messages WHERE id = '" + id + "'", function (error, result) {
			io.emit("delete_message", id);
		});
	});    
          
	socket.on("new_message", function (data) {
		console.log("Client says", data)

	
		io.emit("new_message", data);

		db.query("INSERT INTO messages(message) VALUES('" + data + "')", function (error, result) {
			//data.id = result.insertId; 
			io.emit("new_message", {
				id: result.insertId,
				message: data
			})
		});
	});
});

app.get("/get_messages", function (request, result) {
	db.query("SELECT * FROM messages", function (error, messages) {
		result.end(JSON.stringify(messages));
	});
});

//Complaint Raise Code

io.on("connection", function (socket) {
	console.log("socket connected = " + socket.id);

	socket.on("delete_complaint", function (id) {
	//	console.log('time to delete');
		db.query("DELETE FROM Complaints WHERE id = '" + id + "'", function (error, result) {
			io.emit("delete_complaint", id);
		});
	});    
          
	socket.on("new_complaint", function (data) {
		console.log("Client says", data)

	
		io.emit("new_complaint", data);

		db.query("INSERT INTO Complaints(complaint) VALUES('" + data + "')", function (error, result) {
			data.id = result.insertId; 
			io.emit("new_complaint", {
				id: result.insertId,
				complaint: data
			})
		});
	});
});

app.get("/get_complaint", function (request, result) {
	db.query("SELECT * FROM Complaints", function (error, Complaints) {
		result.end(JSON.stringify(Complaints));
	});
});

// LOGOUT
app.get('/logout',(req,res)=>{
  //session destroy
  req.session = null;
  res.redirect('/');
});
// END OF LOGOUT
// set the app to listen on the port
http.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
      