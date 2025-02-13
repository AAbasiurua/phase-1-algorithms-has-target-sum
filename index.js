function hasTargetSum(array, target) {
  // Write your algorithm here

  // creating an empty set to store the numbers we have seen so far
  const newSet = new Set();

  // looping thru the array
  for(let num of array) {
    // if the (target-num) integer exists in the set, return true
    if(newSet.has(target - num)) {
      return true
    }
    // if not, add current numbe to set 
    newSet.add(num)
  }
  // at this point, no pair was found so we can return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) complexity = linear time complexity 
*/

/* 
  Add your pseudocode here
  create a function that takes in 2 arguments 
  1 = arr; 2 = target;
  the function should return true if any pairs in the arr adds p to the target number 

  function hasTargetSum(array, target) {
    create an empty set [name it whatever u want]
    for each ele 'num' in 'arr'
      if(target - set) {
        return true 
        add 'num' to the set 
      } else {
        return false
      }
  }
*/

/*
  Add written explanation of your solution here
    I created an empty set (a data structure that houses unique values) to store the numbers we have seen so far.
    Then I want to loop thru the array abd check to see if the difference of (target-num) exists in the set. If it 
    does then I want to return true but if not then I want to add the number to the set. If we end up outside the
    loop then I want to return false because that means no pair was found. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));


  console.log("Expecting: false test");
  console.log("=>", hasTargetSum([], 10));

  console.log("Expecting: true test");
  console.log("=>", hasTargetSum([1, 2], 3));
}

module.exports = hasTargetSum;
