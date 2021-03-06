const express = require('express');
const router = express.Router();
const request = require("request");
const path = require("path");

router.get('/',function(req,res){
  request.get("http://localhost:3000/api/translations/page/login", function(err,response,body) {
    if(err){
      res.render(err);
    } else {
      res.render("index", {data: JSON.parse(body)});
    }
  });
});

router.get('/game',function(req,res){
  request.get("http://localhost:3000/api/translations/page/game", function(err,response,body) {
    if(err){
      res.render(err);
    } else {
      res.render("game", {data: JSON.parse(body)});
    }
  });
});


module.exports = router;
