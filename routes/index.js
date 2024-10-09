var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// first make a create user route ** I am learning data association
router.get('/createUser', async function(req, res, next) {
  let createdUser = await userModel.create({
    username: "satyajit",
    password: "vitap",
    posts: [],
    email: "satya@gmail.com",
    fullName: "satyajit"
  });

  res.send(createdUser);
});

router.get('/createPost', async function(req, res, next) {
  let createdPost = await postModel.create({
    postText: "hello everyone",
  });

  res.send(createdPost);
});


module.exports = router;
