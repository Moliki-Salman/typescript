"use strict";
// // console.log("Running TypeScripts");
// // var schnema: number = 1;
// // schnema = 3;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// // let schnema2: string = "Ascon";
// // schnema2 ='ray';
//EXAMPLE 1
// /*a promise that expects a reult,it takes a call back function and the function requires a parameter
// //eg fetch() uses a promise.*/
// //because promise return something, we need to pass it into a variable, in this case the promise is passed into let res.
let res = new Promise(function (resolve, reject) {
    //the let res is a return value
    let username = "Sofy"; // here is where we declare the value inside the promise
    if (username.length == 4) {
        resolve("positive");
    }
    else {
        reject("negative");
    }
});
/*the message and err passed in as parameters inside the function in the console.log allows us to be able
to be able to access the parameter "positive" passed into the resolve()function AND if  the
result is negative, the parameter err passed in as a call back function into catch()functiom allows us  to be able
to access the negative parameter passed into the reject() function.*/
res.then(function (message) {
    let output = "user is" + " " + message;
    console.log(output);
}).catch(function (err) {
    let output = "Ans";
    console.log(output);
});
//EXAMPLE 2
let ping = new Promise(function (res, rej) {
    if (true) {
        res("good");
    }
    else {
        rej("bad");
    }
});
ping.then(function (mess) {
    console.log(sum());
}).catch();
function sum() {
    return 2 + 2;
}
//in typescript onces you declare a return, you must specify the return value
//in the first funciton, you can pass a value/parameter inside the first, while the second can only return a promise, one cannot interact or pass in a value.
//EXAMPLE 3: A function that returns a promise, you can pass a parameter inside the function
function res1(dt) {
    return new Promise(function (resolve, reject) {
        if (dt.length == 4) {
            resolve("valid");
        }
        else {
            reject("invalid");
        }
    });
}
res1("oluchi") // here is where value that was passed into the function
    .then(function (message) {
    console.log(message);
})
    .catch(function (err) {
    console.error(err);
});
//its best to get a postive response before checking for invalid responses so that an async function will work properly with await
//EXAMPLE 4
function res2(dt) {
    return new Promise(function (resolve, reject) {
        if (dt.length == 4) {
            setTimeout(function () {
                resolve("valid");
            }, 2000);
        }
        else {
            reject("invalid");
        }
    });
}
function simple_async() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rs = yield res2("Dami");
            console.log(rs);
            const rs1 = yield res2("Oluchi");
            console.log(rs1);
        }
        catch (err) {
            console.log(err);
        }
    });
}
simple_async();
console.log("run first");
