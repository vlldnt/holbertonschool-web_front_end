import { performance } from "node:perf_hooks";

function countPrimeNumbers() {
  let count = 0;

  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    const sqrt = Math.sqrt(i);
    for (let j = 2; j <= sqrt; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count++;
  }

  return count;
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
