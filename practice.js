"use strict";
let exp = new Promise(function (resolve, reject) {
    let food = "Eba";
    if (food.length >= 5) {
        resolve("correct");
    }
    else {
        reject("incorrect");
    }
});
exp
    .then(function (message) {
    console.log("The answer is " + " " + message);
})
    .catch(function (err) {
    console.log("The answer is " + " " + err);
});
