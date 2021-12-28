const ftoc = function(number) {
  let num1 = (number - 32) * 5/9
  let signo = num1 >= 0 ? 1 : -1;


  if(num1 % 2 == 0){
    var decimals = 0;
  }else{
    decimals = 1;
  }

  let celcius = (Math.round((num1 * Math.pow(10, decimals)) + (signo * 0.0001)) / Math.pow(10, decimals)).toFixed(decimals)
  return parseFloat(celcius)
};

console.log(ftoc(32))

const ctof = function(number) {
  let num1 = (number * 9/5) + 32;

  let decimals = 1;
  // if(number % 2 == 0){
  //   var decimals = 0;
  // }else{
  //   decimals = 1;
  // }
  let signo = num1 > 0 ? 1 : -1;

  let fahrenheit = (Math.round((num1 * Math.pow(10, decimals)) + (signo * 0.0001)) / Math.pow(10, decimals)).toFixed(decimals);
  return parseFloat(fahrenheit)
};

console.log(ctof(100))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
