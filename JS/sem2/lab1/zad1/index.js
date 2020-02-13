function isPrime(number) {
  if (number < 2) {
    return false;
  }
  let dividers = 0;
  for (let i = number; i >= 1 && dividers < 3; i--) {
    if (number % i === 0) {
      dividers++;
    }
  }
  if (dividers === 2) {
    return true;
  }
  return false;
}

function primesInRange(max, min = 2) {
  if (max < min) {
    return [];
  }
  let primes = [];
  for (min; min <= max; min++) {
    if (isPrime(min)) {
      primes.push(min);
    }
  }
  return primes;
}

console.log(primesInRange(20, 4));
