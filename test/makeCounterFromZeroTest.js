const assert=require("assert");
const makeCounterFromZero = require('../src/lib.js').makeCounterFromZero;

const testCounterBeginsCountingFromZero = function() {
  let countCats = makeCounterFromZero();
  assert.equal(0, countCats());
};

const testCounterIncrementsCountForEveryCall = function() {
  let countDogs = makeCounterFromZero();
  assert.equal(0, countDogs());
  assert.equal(1, countDogs());
  assert.equal(2, countDogs());
};

const testMultipleCounters = function() {
  let countLions = makeCounterFromZero();
  let countTigers = makeCounterFromZero();
  assert.equal(0, countLions());
  assert.equal(1, countLions());
  assert.equal(0, countTigers());
  assert.equal(1, countTigers());
  assert.equal(2, countLions());
};

const runTests = function() {
  if(!makeCounterFromZero) {
    console.log("Function 'makeCounterFromZero' in not implemented yet. Not running tests.");
    return;
  }

  testCounterBeginsCountingFromZero();
  console.log("testCounterBeginsCountingFromZero passed");

  testCounterIncrementsCountForEveryCall();
  console.log("testCounterIncrementsCountForEveryCall passed");

  testMultipleCounters();
  console.log("testMultipleCounters passed");
};

runTests()
