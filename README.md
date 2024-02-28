## Codility Challenges

### Challenge 1: Binary Gap

**Description:**  
Given a positive integer `N`, the function `solution(N)` returns the length of the longest binary gap in its binary representation.

**Explanation:**  
This function iterates through the binary representation of the input number `N`, counts the length of consecutive zeros between ones, and returns the length of the longest gap.

### Challenge 2: Cyclic Rotation

**Description:**  
The function `solution(A, K)` rotates the elements of array `A` to the right `K` times.

**Explanation:**  
This function calculates the effective number of rotations based on the length of array `A` and `K`, then splits the array into two parts and concatenates them in reverse order to achieve the rotation.

### Challenge 3: Odd Occurrences In Array

**Description:**  
Given an array `A` consisting of `N` integers, where each element occurs in pairs except for one unpaired element, the function `solution(A)` returns the value of the unpaired element.

**Explanation:**  
This function utilizes bitwise XOR operation to efficiently find the unpaired element in the array. It iterates through all elements of the array and performs XOR operation with an accumulator variable initialized to 0. The result of XORing all elements will be the unpaired element.

