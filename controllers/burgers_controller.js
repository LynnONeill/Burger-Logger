let express = require("express");

let router = express.Router();

let burger = require("../models/burger.js")


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burger: data
        };
        console.log("Below is the hbsObject log")
        console.log(hbsObject);
        console.log(hbsObject.burger[0].name);
        res.render("index", hbsObject);
    })
});

router.post("/api/burgers/", function (req, res) {
    burger.insertOne([
        "name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function (result) {
        res.json({ burger_id: result.insertID })
    })

});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "burger_id = " + req.params.id;
    console.log('GETTTING HIT HERE')
    // console.log("condition", condition);

    burger.updateOne({
        eaten: req.body.eaten
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});




// Export routes for server.js to use
module.exports = router