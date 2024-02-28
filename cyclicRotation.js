function solution(A, K) {
  const N = A.length;
  
  // If array is empty or K is 0, return A as it is
  if (N === 0 || K === 0) {
      return A;
  }
  
  // Calculate the effective number of rotations
  const effectiveRotations = K % N;
  
  // If effective rotations are 0, return A as it is
  if (effectiveRotations === 0) {
      return A;
  }
  
  // Destructure the array into two parts and concatenate them in reverse order
  return [...A.slice(N - effectiveRotations), ...A.slice(0, N - effectiveRotations)];
}

// Test cases
console.log(solution([3, 8, 9, 7, 6], 3));  // Output: [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1));        // Output: [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4));     // Output: [1, 2, 3, 4]
