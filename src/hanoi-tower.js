const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  answer = {};
  turns = 2**disksNumber - 1;
  tps = turnsSpeed/3600;
  answer['turns'] = turns;
  answer['seconds'] = Math.floor(turns/tps);
  return answer;

};
