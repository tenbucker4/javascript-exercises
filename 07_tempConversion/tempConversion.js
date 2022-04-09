function ftoc(tempF) {
  let number;
  number = ((tempF - 32) * (5/9));
  let numberRound = parseFloat(number.toFixed(1));
  return numberRound;
};

function ctof(tempC) {
  let number;
  number = ((tempC * (9/5)) + 32);
  let numberRound = parseFloat(number.toFixed(1));
  return numberRound;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
