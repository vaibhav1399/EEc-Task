var express = require('express');
var router = express.Router();


router.post('/LCM', function(req, res, next){

    let arr = req.body.array

 
// Javascript program to find LCM of n elements
 
// Utility function to find
// GCD of 'a' and 'b'

    // Initialize result
    let ans = arr[0];
    let n = arr.length
    // ans contains LCM of arr[0], ..arr[i]
    // after i'th iteration,
    for (let i = 1; i < n; i++) {
        ans = (((arr[i] * ans)) /
                (gcd(arr[i], ans)));
    }

 


 


 res.send({LCM: ans});
});

function gcd(a, b)
{
    if (b == 0)
        return a;
    return gcd(b, a % b);
}






module.exports = router;