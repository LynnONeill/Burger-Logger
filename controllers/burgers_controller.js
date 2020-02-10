let express = require("express");

let router = express.Router();

let burger = require("../models/burger.js")


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log("Below is the hbsObject log")
        console.log(hbsObject);
        console.log(hbsObject.burger[0].name);
        res.render("index", hbsObject);
    })
});

router.post("/api/burgers/", function(req, res) {
    burger.insertOne([
        "name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function(result) {
        res.json({burger_id: result.insertID})
    })
        
    })




// Export routes for server.js to use
module.exports = router