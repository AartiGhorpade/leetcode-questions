function sqrt(x) {
  if (x < 0) return NaN;
  if (x === 0) return 0;

  let i = 0;
  while (i * i < x) {
    i++;
  }

  return i - 1;
}

console.log(sqrt(4)); // 2
console.log(sqrt(8)); // 2