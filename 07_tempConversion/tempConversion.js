const convertToCelsius = function(temperature) {
  let celsius = ((temperature -32) * 5/9);
  if(celsius % 1 != 0)
    {
      celsius = celsius.toFixed(1);
      celsius = Number(celsius);
    }
  return celsius;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = ((temperature * (9/5))+ 32);
  if(fahrenheit % 1 != 0)
    {
      fahrenheit = fahrenheit.toFixed(1);
      fahrenheit = Number(fahrenheit);
    }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
