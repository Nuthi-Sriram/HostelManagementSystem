
//---------------------------------------------signup page call------------------------------------------------------
exports.signup = function(req, res){
    message = '';
    if(req.method == "POST"){
       var post  = req.body;
       var name= post.user_name;
       var pass= post.password;
       var fname= post.first_name;
       var lname= post.last_name;
       var mob= post.mob_no;
 
       var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";
 
       var query = db.query(sql, function(err, result) {
 
          message = "Succesfully! Your account has been created.";
          res.render('signup.ejs',{message: message});
       });
 
    } else {
       res.render('signup');
    }
 };
  
 //-----------------------------------------------login page call------------------------------------------------------
 exports.login = function(req, res){
    var message = '';
    var sess = req.session; 
 
    if(req.method == "POST"){
       var post  = req.body;
       var name= post.user_name;
       var pass= post.password;
      
       var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";                           
       db.query(sql, function(err, results){      
          if(results.length){
             req.session.userId = results[0].id;
             req.session.user = results[0];
             console.log(results[0].id);
             res.redirect('/home/dashboard');
          }
          else{
             message = 'Wrong Credentials.';
             res.render('index.ejs',{message: message});
          }
                  
       });
    } else {
       res.render('index.ejs',{message: message});
    }
            
 };
 //-----------------------------------------------dashboard page functionality----------------------------------------------
            
 exports.dashboard = function(req, res, next){
            
    var user =  req.session.user,
    userId = req.session.userId;
    console.log('ddd='+userId);
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
    var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
 
    db.query(sql, function(err, results){
       res.render('dashboard.ejs', {user:user});    
    });       
 };
 //------------------------------------logout functionality----------------------------------------------
 exports.logout=function(req,res){
    req.session.destroy(function(err) {
       res.redirect("/login");
    })
 };
 //--------------------------------render user details after login--------------------------------
 exports.profile = function(req, res){
 
    var userId = req.session.userId;
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
    var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
    db.query(sql, function(err, result){  
       res.render('profile.ejs',{data:result});
    });
 };
 //---------------------------------edit users details after login----------------------------------
 exports.editprofile=function(req,res){
    var userId = req.session.userId;
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
    var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
    db.query(sql, function(err, results){
       res.render('edit_profile.ejs',{data:results});
    });
 };
 