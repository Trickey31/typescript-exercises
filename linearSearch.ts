function linearSearch(target: number): number {
  const array = [-5, 2, 10, 4, 6];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

// Big-O: O(n)

console.log(linearSearch(10));
console.log(linearSearch(6));
console.log(linearSearch(20));
