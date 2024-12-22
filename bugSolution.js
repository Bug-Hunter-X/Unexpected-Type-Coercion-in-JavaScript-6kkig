function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Error: Invalid input type';
  }
}

console.log(foo(5, '5')); // Output: Error: Invalid input type
console.log(foo(5, 5)); // Output: 10