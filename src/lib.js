const { read } = require("fs");
const { count } = require("console");

const makeConstant = function (input) {
  return function () {
    return input;
  };
};

const makeCounterFromN = function (input) {
  let count = input;
  return function () {
    return count++;
  };
};

const makeCounterFromZero = function () {
  let count = 0;
  return function () {
    return count++;
  };
};

const makeDeltaTracker = function (initialValue) {
  return function (delta) {
    if (!delta) {
      delta = 0;
    }

    return {
      old: initialValue,
      delta: delta,
      new: (initialValue = initialValue + delta),
    };
  };
};

const makeFiboGenerator = function (firstNumber, secondNumber) {
  if (arguments.length == 0) {
    firstNumber = -1;
    secondNumber = 1;
  }

  if (arguments.length == 1) {
    secondNumber = firstNumber;
    firstNumber = 0;

    secondNumber = secondNumber - firstNumber;
    firstNumber = firstNumber - secondNumber;
  }

  if (arguments.length == 2) {
    secondNumber = secondNumber - firstNumber;
    firstNumber = firstNumber - secondNumber;
  }

  return function () {
    let result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
    return result;
  };
};

const makeCycler = function (input) {
  let i = 0;
  return function () {
    input.push(input[i]);
    return input[i++];
  };
};

// const curry = function (arg1, arg2) {
//   return arg1.bind(null, arg2);
// };

const curry = function (actionToDo, doWith) {
  return function (first, second) {
    return actionToDo(doWith, first, second);
  };
};

const compose = function (firstAction, secondAction) {
  return function (input1, input2) {
    return firstAction(secondAction(input1, input2));
  };
};

exports.makeConstant = makeConstant;
exports.makeCounterFromZero = makeCounterFromZero;
exports.makeCounterFromN = makeCounterFromN;
exports.makeDeltaTracker = makeDeltaTracker;
exports.makeFiboGenerator = makeFiboGenerator;
exports.makeCycler = makeCycler;
exports.curry = curry;
exports.compose = compose;
