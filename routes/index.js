const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Article = require('../models/Article');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.post('/submit', ensureAuthenticated, (req, res) =>{
  const {atitle, atype, acontent} = req.body;
  const newArticle = new Article({ atype, atitle, acontent});
  newArticle.save().then(user => {
    req.flash(
      'success_msg',
      'You are now registered and can log in'
    );
    res.redirect('/users/login');
  })
  .catch(err => console.log(err));
  
  res.render('submit');
});

module.exports = router;
