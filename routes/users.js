const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('D:/Coding Stuff/twe/db/db.js')


// Load User model
const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {


    // REPLACE THIS FIND WITH A SELECT QUERY AND CHECK IF FOR THE SAME
    // console.log("Email: ",typeof(email))
    findUserQuery = "select * from users where email_id = ?"
    // console.log("FinduserQuery: ",findUserQuery,email)
            db.query(findUserQuery, [email], (err, user) => {
              if (err) throw err;
              // console.log("User Data: ",user);
              if (user[0]){
                errors.push({ msg: 'Email already exists' });
                res.render('register', {
                  errors,
                  name,
                  email,
                  password,
                  password2
                });
              }
              else{
                const newUser = new User({
                  name,
                  email,
                  password
                });

                var ts = Date.now()
                var date_obj = new Date(ts);
                var date = date_obj.getDate() + "-" + (date_obj.getMonth() + 1) + "-" + date_obj.getFullYear();
                bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    
                    // console.log("newUser: ",newUser)
                    // HERE WRITE A SQL QUERY TO INSERT TO MYSQL USERS TABLE (ATTR: ID,NAME,EMAIL,PASSWORD,DATE)
                    createUserQuery = "insert into users(email_id,password, date_joined, name) values (?,?,?,?);"
                    db.query(createUserQuery, [newUser.email, newUser.password, date, newUser.name] ,(err, result) => {
                      if (err) throw err;
                      // console.log("1 User inserted: ",result);
                      req.flash(
                        'success_msg',
                        'You are now registered and can log in'
                      );
                      console.log(date);
                      console.log(date_obj);
                      res.redirect('/users/login');
                      
                  })
        
        
                  });
                });
                

      
              }

          })

  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});
module.exports = router;
