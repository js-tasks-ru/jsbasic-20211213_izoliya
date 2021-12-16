function factorial (n) {
  let i = n;
  if (n == 0) {
    return ++n;
  } else {
      for (; --n > 0;) {
        i = (i * n);
      }
      return i;
    }
}
