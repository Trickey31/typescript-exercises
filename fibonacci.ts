function recursiveFibo(index: number): number {
  if (index < 2) return index;
  return recursiveFibo(index - 1) + recursiveFibo(index - 2);
}

function fibonacci(number: number): number[] {
  const fibo = [];
  for (let i = 0; i <= number; i++) {
    fibo.push(recursiveFibo(i));
  }
  return fibo;
}

// function fibonacci(number: number): number[] {
//   const fibo = [0, 1];
//   for (let i = 2; i < number; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }

console.log(fibonacci(7));
console.log(fibonacci(6));
console.log(fibonacci(1));
console.log(fibonacci(0));
