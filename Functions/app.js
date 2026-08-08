// مینی پروژه کلاس

function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  }

  if (operator === "-") {
    return a - b;
  }

  if (operator === "*") {
    return a * b;
  }

  if (operator === "/") return a / b;
}
console.log(calculate(10, 5, "+"));

// تمرین اول

function square(number) {
  return number ** 2;
}
const result1 = square(5);

console.log(result);

// تمرین 2

function cube(number) {
  return number ** 3;
}
const result = cube(3);

console.log(result);

//تمرین 3

function checkTemp(temp) {
  if (temp >= 30) {
    console.log("hot");
  } else {
    console.log("normal");
  }
}

checkTemp(29);

// تمرین4

function calculatesalary(hours, rate) {
  const multiply = 20 * 15;

  console.log(multiply);
}

calculatesalary();
