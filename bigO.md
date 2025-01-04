# What is big O

[BigO Cheat Sheet](https://www.bigocheatsheet.com)
[BigO ZTM Cheat Sheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)

What is good code ?

1. Readable
2. Scalabe
   - Speed (Time complexity)
   - Memory (Space complexity)

we measure scalability with BigO

## BIG O's

1. O(1) Constant- no loops
2. O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
3. O(n) Linear- for loops, while loops through n items
4. O(n log(n)) Log Liniear- usually sorting operations
5. O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
   nested loops
6. O(2^n) Exponential- recursive algorithms that solves a problem of size N
7. O(n!) Factorial- you are adding a loop for every element

Iterating through half a collection is still O(n)
Two separate collections: O(a \* b)

## What can cause time in a function?

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

## Rules to calculate

1. Always Worst case
2. Remove constants
3. Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b)
   - (+) for steps in order
   - (\*) for nested steps
4. Drop non dominents terms

## What causes space complexity ?

1. Variables
2. Data structures
3. Function call
4. Allocation
