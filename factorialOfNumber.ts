function factorial(number: number): number {
  let result = 1;
  if (number === 0 || number === 1) return 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(4));
