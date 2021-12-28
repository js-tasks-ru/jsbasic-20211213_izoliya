function getMinMax(str) {
  // ваш код...
  let mass = str.split (' ');
  let a = +mass[0];
  let b = a;
  for (i = 0; i < mass.length; i++) {
    if (a >= +mass[i]) {
      a = +mass[i];
    } continue;
  }
  for (i = 0; i < mass.length; i++) {
    if (b <= +mass[i]) {
      b = +mass[i];
    } continue;
  }
  let result = {
    min: a,
    max: b
  };
  return (result);
}
