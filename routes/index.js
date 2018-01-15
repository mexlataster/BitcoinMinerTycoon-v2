const express = require('express');
const router = express.Router();
const request = require("request");
const path = require("path");

router.get('/',function(req,res){
  request.get("localhost:3000/api/translations/h1_welcome_text", function(err,response,body) {
    if(err){
      res.render("index", {data: data});
    } else {
      res.send("test");
    }
  });
  //res.render(path.join(__dirname+'/public/index'), {"person": person});
  //__dirname : It will resolve to your project folder.
});


module.exports = router;
