//Завдання 1
let user = {};

user.name = "Mark";
user.surname = "Smith";
console.log(user);

user.name = "Taras";
console.log(user);

delete user.name;
console.log(user);

//Завдання 2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

alert(isEmpty(schedule)); //true

schedule["8:30"] = "Wake up!";

alert(isEmpty(schedule)); //false

//Завдання 3
let salaries = {
  Jarik: 1000,
  Anna: 1600,
  Miko: 1300,
};

function calcSalarySum(salaries) {
  let sum = 0;
  for (let name in salaries) {
    sum += salaries[name];
  }
  if (salaries === null) {
    console.log(0);
  }
  return sum;
}

console.log(calcSalarySum(salaries));

//Завдання 4
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log("До перетворення:");
console.log(menu);

multiplyNumeric(menu);

console.log("Після перетворення:");
console.log(menu);
