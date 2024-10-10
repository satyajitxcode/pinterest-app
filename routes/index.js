var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const passport = require('passport');
const localStrategy = require('passport-local');
passport.authenticate(new localStrategy(userModel.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res) => {
  const { username, email, fullname } = req.body;
  const userData = new userModel({ username, email, fullName: fullname });

  // Add logic to save user or handle response
  userModel.register(userData, req.body.password).then(()=>{
    passport.authenticate("local")(req,res,()=>{
      res.redirect("/profile");
    })
  })
});

router.post('/login', passport.authenticate("local", {sucessRedirect:"/profile", failure:"/"}), (req, res) =>{
  
});

router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}





module.exports = router;
