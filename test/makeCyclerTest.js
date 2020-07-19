const assert=require("assert");
const makeCycler = require('../src/lib.js').makeCycler;

const testCyclerThatCanCycleOneElement = function() {
  let cycleOne = makeCycler([1]);
  assert.equal(1,cycleOne());
  assert.equal(1,cycleOne());
  assert.equal(1,cycleOne());
};

const testCycleTwoElements = function() {
  let cycleColours=makeCycler(["black","white"]);
  assert.equal("black",cycleColours());
  assert.equal("white",cycleColours());
  assert.equal("black",cycleColours());
  assert.equal("white",cycleColours());
};

const testCycleOnlyElementsGivenInitiallyEvenIfAnElementAddedLater = function() {
  let colours = ["black","white","red"];
  let cycleColours=makeCycler(colours);
  assert.equal("black",cycleColours());
  assert.equal("white",cycleColours());
  assert.equal("red",cycleColours());
  colours.push("yellow");
  assert.equal("black",cycleColours());
};

const testCycleOnlyElementsGivenInitiallyEvenIfModifiedLater = function() {
  let colours = ["black","white"];
  let cycleColours=makeCycler(colours);
  assert.equal("black",cycleColours());
  assert.equal("white",cycleColours());
  colours[0] = "yellow";
  assert.equal("black",cycleColours());
};

const runTests = function() {
  if(!makeCycler) {
    console.log("Function 'makeCycler' in not implemented yet. Not running tests.");
    return;
  }

  testCyclerThatCanCycleOneElement();
  console.log("testCyclerThatCanCycleOneElement passed");

  testCycleTwoElements();
  console.log("testCycleTwoElements passed");

  testCycleOnlyElementsGivenInitiallyEvenIfAnElementAddedLater();
  console.log("testCycleOnlyElementsGivenInitiallyEvenIfAnElementAddedLater passed");

  testCycleOnlyElementsGivenInitiallyEvenIfModifiedLater();
  console.log("testCycleOnlyElementsGivenInitiallyEvenIfModifiedLater passed");
};

runTests();
