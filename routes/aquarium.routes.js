
    var router = require("express").Router();

  
    // Retrieve all User
    router.get("/", (req,res) => {
        res.render('index');
    });

  
  module.exports = router;