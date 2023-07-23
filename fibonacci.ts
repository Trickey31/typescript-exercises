function fibonacci(number: number): number[] {
  const fibo = [0, 1];
  for (let i = 2; i < number; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibonacci(7));
