function solution(A) {
  let unpaired = 0;
  
  // XOR all elements in the array
  for (let num of A) {
      unpaired ^= num;
  }
  
  return unpaired;
}

// Test case
const A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A)); // Output: 7
