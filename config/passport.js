const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../db/db')

// Load User model
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      findExistingUser = "SELECT * from users where email_id = ?"
      console.log("Email Entered: ",email)
      db.query(findExistingUser,[ email ],(err,user) => {
        console.log("Users with email: ",user)
        // if (err) throw err
        if (!user[0]){
          console.log("User Data:",user[0])
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match Password
        bcrypt.compare(password, user[0].password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });

      })
    })
  );
  
  passport.serializeUser(function(user, done) {
    done(null, user[0].u_id);
  });

  passport.deserializeUser(function(id, done) {
    findByIdSQL = "SELECT * from users where u_id=?"
    db.query(findByIdSQL,[ id ], (err,user) => {
      done(err, user[0]);
    })

  });
};
