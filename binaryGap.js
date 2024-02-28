function solution(N) {
  // Convert N to binary representation
  let binaryStr = N.toString(2);
  
  let maxGap = 0;
  let currentGap = 0;
  let counting = false;
  
  // Iterate through the binary string
  for (let i = 0; i < binaryStr.length; i++) {
      if (binaryStr[i] === '1') {
          // If a '1' is encountered and counting is already true,
          // update the maximum gap if the current gap is greater
          if (counting && currentGap > maxGap) {
              maxGap = currentGap;
          }
          // Reset currentGap
          currentGap = 0;
          // Start counting for the next gap
          counting = true;
      } else if (counting) {
          // If a '0' is encountered while counting,
          // increment the current gap
          currentGap++;
      }
  }
  
  return maxGap;
}

// Test cases
console.log(solution(9));     // Output: 2
console.log(solution(529));   // Output: 4
console.log(solution(20));    // Output: 1
console.log(solution(1041)); // Output: 5
console.log(solution(32));   // Output: 0
