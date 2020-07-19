const assert=require("assert");
const compose = require('../src/lib.js').compose;

const lengthOf=function(collection) {return collection.length};
const decrement=function(number){return number-1};
const isNotZero=function(x) {return x!=0};
const removeZeroes=function(array) {return array.filter(isNotZero)};
const concatWith=function(arrayToConcatWith,anotherArray) {
  return arrayToConcatWith.concat(anotherArray);
};

const testComposeTwoFunctionsThatTakesOneArg = function() {
  let lastPosition=compose(decrement,lengthOf);
  assert.equal(0,lastPosition([1]));
  assert.equal(1,lastPosition([1,2]));
  assert.equal(2,lastPosition([1,2,3]));
  assert.equal(4,lastPosition("abcde"));
};

const testComposeTwoFunctionsThatTakesTwoArgs = function() {
  let concatNonZeroValues=compose(removeZeroes,concatWith);
  assert.deepEqual([1],concatNonZeroValues([1],[0]));
  assert.deepEqual([1],concatNonZeroValues([0],[1]));
  assert.deepEqual([1,1],concatNonZeroValues([1,0],[1,0]));
};


const runTests = function() {
  if(!compose) {
    console.log("Function 'compose' in not implemented yet. Not running tests.");
    return;
  }

  testComposeTwoFunctionsThatTakesOneArg();
  console.log("testComposeTwoFunctionsThatTakesOneArg passed");

  testComposeTwoFunctionsThatTakesTwoArgs();
  console.log("testComposeTwoFunctionsThatTakesTwoArgs passed");
};

runTests();
