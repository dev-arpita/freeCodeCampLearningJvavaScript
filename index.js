function findElement(arr, func) {
  const num = arr.map(func).indexOf(true)
  return arr[num]
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) )
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
