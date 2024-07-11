const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  return a.reduce((total,current) => total+current,0)
};

const multiply = function (a) {
  return a.reduce((total,current) => total*current)
};

const power = function (a, b) {
  total = a;
  for (i = 1; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function (a) {
  total = 1;
  for (i = 0; i <= a; i++) {
    if (i >= 1) {
      total *= i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
