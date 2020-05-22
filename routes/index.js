const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Article = require('../models/Article');
const db = require('../db/db')

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
  console.log("The new Article Doc: ",newArticle)
  insertArticleQuery = "INSERT into ARTICLES(atype,atitle,acontent) VALUES (?,?,?)"
  db.query(insertArticleQuery,[atype,atitle,acontent],(err,article) => {
    if (err) throw err
    console.log("Current Article Was Updated in mySQL db: ",article)
    res.render('submit');
  })
  // newArticle.save().then(user => {

  // })
  // .catch(err => console.log(err));
  
  
});

module.exports = router;
