const assert=require("assert");
const curry = require('../src/lib.js').curry;

const sum=function(a,b) { return a+b };

const concatWith=function(arrayToConcatWith,anotherArray) {
  return arrayToConcatWith.concat(anotherArray);
};

const isBetween=function(number,lowerLimit,upperLimit) {
  return lowerLimit<=number && number<=upperLimit;
};

const paintCar=function(color,make,model) {
  return {color,make,model};
};

const testCreatingPartialFunctionWithOneArgument = function() {
  let addTwo=curry(sum,2);
  assert.equal(3,addTwo(1));
  assert.equal(7,addTwo(5));
  assert.equal(-1,addTwo(-3));
};

const testCreatingPartialFunctionWithArrayAsAnArgument = function() {
  let concatWith123=curry(concatWith,[1,2,3]);
  assert.deepEqual([1,2,3,4,5,6],concatWith123([4,5,6]));
  assert.deepEqual([1,2,3],concatWith123([]));
};

const testCreatingPartialFunctionThatWillLaterBeSuppliedWithTwoArgs = function() {
  let isTenBetween=curry(isBetween,10);
  assert.equal(true,isTenBetween(5,15));
  assert.equal(false,isTenBetween(12,15));

  let paintYellow=curry(paintCar,"yellow");
  assert.deepEqual({color:"yellow", make:"maruti", model:"swift" },paintYellow("maruti","swift"));
  assert.deepEqual({color:"yellow", make:"ferrari", model:"GTC4" },paintYellow("ferrari","GTC4"));
};

const runTests = function() {
  if(!curry) {
    console.log("Function 'curry' in not implemented yet. Not running tests.");
    return;
  }

  testCreatingPartialFunctionWithOneArgument();
  console.log("testCreatingPartialFunctionWithOneArgument passed");

  testCreatingPartialFunctionWithArrayAsAnArgument();
  console.log("testCreatingPartialFunctionWithArrayAsAnArgument passed");

  testCreatingPartialFunctionThatWillLaterBeSuppliedWithTwoArgs();
  console.log("testCreatingPartialFunctionThatWillLaterBeSuppliedWithTwoArgs passed");
};

runTests();
