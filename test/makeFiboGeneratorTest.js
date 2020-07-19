const assert=require("assert");
const makeFiboGenerator = require('../src/lib.js').makeFiboGenerator;

const testFiboGeneratorWithDefaultArgs = function() {
  let getNextFiboNumber = makeFiboGenerator();
  assert.equal(0,getNextFiboNumber());
  assert.equal(1,getNextFiboNumber());
  assert.equal(1,getNextFiboNumber());
  assert.equal(2,getNextFiboNumber());
  assert.equal(3,getNextFiboNumber());
  assert.equal(5,getNextFiboNumber());
};

const testFiboGeneratorWithASingleArg = function() {
  let getNextFiboNumber = makeFiboGenerator(2);
  assert.equal(0,getNextFiboNumber());
  assert.equal(2,getNextFiboNumber());
  assert.equal(2,getNextFiboNumber());
  assert.equal(4,getNextFiboNumber());
  assert.equal(6,getNextFiboNumber());
  assert.equal(10,getNextFiboNumber());
};

const testFiboGeneratorWithTwoArgs = function() {
  let getNextFiboNumber = makeFiboGenerator(1,3);
  assert.equal(1,getNextFiboNumber());
  assert.equal(3,getNextFiboNumber());
  assert.equal(4,getNextFiboNumber());
  assert.equal(7,getNextFiboNumber());
  assert.equal(11,getNextFiboNumber());
};

const testMultipleFiboGenerators = function() {
  let getNextFiboNum_1 = makeFiboGenerator(1,3);
  let getNextFiboNum_2 = makeFiboGenerator(2);
  assert.equal(1,getNextFiboNum_1());
  assert.equal(3,getNextFiboNum_1());
  assert.equal(4,getNextFiboNum_1());
  assert.equal(7,getNextFiboNum_1());
  assert.equal(11,getNextFiboNum_1());
  assert.equal(0,getNextFiboNum_2());
  assert.equal(2,getNextFiboNum_2());
  assert.equal(2,getNextFiboNum_2());
  assert.equal(4,getNextFiboNum_2());
  assert.equal(6,getNextFiboNum_2());
  assert.equal(10,getNextFiboNum_2());
};

const runTests = function() {
  if(!makeFiboGenerator) {
    console.log("Function 'fiboGenerator' in not implemented yet. Not running tests.");
    return;
  }

  testFiboGeneratorWithDefaultArgs();
  console.log("testFiboGeneratorWithDefaultArgs passed");

  testFiboGeneratorWithASingleArg();
  console.log("testFiboGeneratorWithASingleArg passed");

  testFiboGeneratorWithTwoArgs();
  console.log("testFiboGeneratorWithTwoArgs passed");

  testMultipleFiboGenerators();
  console.log("testMultipleFiboGenerators passed");
};

runTests();
