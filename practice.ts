let exp = new Promise(function (resolve, reject) {
  //an example of a promise that is assigned to a variable
  let food = "Eba"; // the parameter is declared inside the promise.
  if (food.length >= 5) {
    resolve("correct");
  } else {
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

function exp2(pasword: string): Promise<string> {
  // an example of a function that accept a parameter, the function returns a promise
  return new Promise(function (resolve, reject) {
    if (pasword.length > 5) {
      resolve("valid password");
    } else {
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
