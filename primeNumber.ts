function primeNumber(number: number): boolean {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(primeNumber(4));
console.log(primeNumber(5));
console.log(primeNumber(10));
console.log(primeNumber(15));
