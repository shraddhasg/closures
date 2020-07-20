const { read } = require("fs");
const { count } = require("console");

const makeConstant = function (input) {
  return (result = function () {
    return input;
  });
};

const makeCounterFromN = function (input) {
  let count = input;
  return (result = function () {
    return count++;
  });
};

const makeCounterFromZero = function () {
  let count = 0;
  return (result = function () {
    return count++;
  });
};

const makeDeltaTracker = function (input) {
  let prevNew = 0,
    count = 0;
  return (result = function (data) {
    if (data) {
      if (count == 0) {
        prevNew = input + data;
        count++;
        return { old: input, delta: data, new: input + data };
      }
      return { old: prevNew, delta: data, new: prevNew + data };
    }
    return { old: input, delta: 0, new: input + 0 };
  });
};

const makeFiboGenerator = function (firstNumber, secondNumber) {
  if (arguments.length == 0) {
    firstTerm = -1;
    secondTerm = 1;
  }

  if (arguments.length == 1) {
    secondNumber = firstNumber;
    firstNumber = 0;

    secondTerm = secondNumber - firstNumber;
    firstTerm = firstNumber - secondTerm;
  }

  if (arguments.length == 2) {
    secondTerm = secondNumber - firstNumber;
    firstTerm = firstNumber - secondTerm;
  }

  return (result = function () {
    let result = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = result;
    return result;
  });
};

const makeCycler = function (input) {
  let i = 0;
  return (result = function () {
    input.push(input[i]);
    return input[i++];
  });
};

const curry = function (arg1, arg2) {
  return (result = arg1.bind(null, arg2));
};

const compose = function (firstArg, secondArg) {
  return (result = function (arg) {
    if (arguments.length == 1) return arg.secondArg - 1;
  });
};

exports.makeConstant = makeConstant;
exports.makeCounterFromZero = makeCounterFromZero;
exports.makeCounterFromN = makeCounterFromN;
exports.makeDeltaTracker = makeDeltaTracker;
exports.makeFiboGenerator = makeFiboGenerator;
exports.makeCycler = makeCycler;
exports.curry = curry;
exports.compose = compose;
