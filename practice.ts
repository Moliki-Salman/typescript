//Example 1
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

//Example 2
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

//Example 3: funtion that returns apromise and uses async/await function for its result
function promAsync(username: string): Promise<string> {
  return new Promise(function (resolve, reject) {
    if (username.length >= 3) {
      resolve("valid username");
    } else {
      reject("invalid username");
    }
  });
}

async function funt() {
  try {
    let res1 = await promAsync("maxes");
    console.log(res1);
    let res2 = await promAsync("xc");
    console.log(res2);
  } catch (err) {
    console.log(err);
  }
}

funt()
