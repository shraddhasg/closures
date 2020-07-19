const assert=require("assert");
const makeCounterFromN = require('../src/lib.js').makeCounterFromN;

const testCounterBeginsCountingFromGivenNumber = function() {
  let countApples = makeCounterFromN(2);
  assert.equal(2, countApples());
};

const testCounterIncrementsCountForEveryCall = function() {
  let countMangos = makeCounterFromN(1);
  assert.equal(1, countMangos());
  assert.equal(2, countMangos());
  assert.equal(3, countMangos());
};

const testMultipleCounters = function() {
  let countOranges = makeCounterFromN(2);
  let countGrapes = makeCounterFromN(3);
  assert.equal(2, countOranges());
  assert.equal(3, countOranges());
  assert.equal(3, countGrapes());
  assert.equal(4, countGrapes());
  assert.equal(4, countOranges());
};

const testCounterWithNegativeNumber = function() {
  let countBananas = makeCounterFromN(-1);
  assert.equal(-1, countBananas());
  assert.equal(0, countBananas());
  assert.equal(1, countBananas());
};

const runTests = function() {
  if(!makeCounterFromN) {
    console.log("Function 'makeCounterFromN' in not implemented yet. Not running tests.");
    return;
  }

  testCounterBeginsCountingFromGivenNumber();
  console.log("testCounterBeginsCountingFromGivenNumber passed");

  testCounterIncrementsCountForEveryCall();
  console.log("testCounterIncrementsCountForEveryCall passed");

  testMultipleCounters();
  console.log("testMultipleCounters passed");

  testCounterWithNegativeNumber();
  console.log("testCounterWithNegativeNumber passed");
};

runTests();
