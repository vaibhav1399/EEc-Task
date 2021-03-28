var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:3000/makeList

router.get('/', function(req, res, next) {

    let json  = {
        "name": "Rajat",
        "Age": 26,
        "School": "abc"
    }
  res.send(json);
});

// http://localhost:3000/makeList/abc
router.get('/abc', function(req, res, next) {

    let json  = {
        "name": "Amit",
        "Age": 26,
        "School": "abc"
    }
  res.send(json);
});

router.post('/', function(req, res, next) {

    // let json  = {
    //     "name": "Rajat",
    //     "Age": 26,
    //     "School": "abc"
    // }
    // console.log(req.body)

    let a = req.body.a;
    let b = req.body.b;


    // let array = req.body.array


    let sum = a+b;
    console.log(sum)
//   res.send("sum");

//   res.send(50000);

  res.send({sum});
});

module.exports = router;
