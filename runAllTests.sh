test_root="./test"
declare -a test_files=("makeConstantTest.js" "makeCounterFromNTest.js" "makeCounterFromZeroTest.js" "makeDeltaTrackerTest.js" "makeFiboGeneratorTest.js" "makeCyclerTest.js" "curryTest.js" "composeTest.js")

for test_file in "${test_files[@]}"
do
  echo "\n--------- Testing $test_file ---------"
  node "$test_root/$test_file"
done
