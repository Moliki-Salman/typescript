"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Example 1
let exp = new Promise(function (resolve, reject) {
    //an example of a promise that is assigned to a variable
    let food = "Eba"; // the parameter is declared inside the promise.
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
    console.log("The answer is " + err);
});
//Example 2
function exp2(pasword) {
    // an example of a function that accept a parameter, the function returns a promise
    return new Promise(function (resolve, reject) {
        if (pasword.length > 5) {
            resolve("valid password");
        }
        else {
            reject("not a valid password");
        }
    });
}
exp2("uniqPassword") // the value is passed here into the function
    .then(function (message) {
    console.log(`The password is a ${message}`);
})
    .catch(function (err) {
    console.log(`The password is  ${err}`);
});
//Example 3
function promAsync(username) {
    return new Promise(function (resolve, reject) {
        if (username.length >= 3) {
            resolve("valid username");
        }
        else {
            reject("invalid username");
        }
    });
}
function funt() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res1 = yield promAsync("maxes");
            console.log(res1);
            let res2 = yield promAsync("xc");
            console.log(res2);
        }
        catch (err) {
            console.log(err);
        }
    });
}
funt();
