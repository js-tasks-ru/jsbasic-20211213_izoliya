function camelize(str) {
  let arr = str.split('');
  let index = arr.indexOf('-');
while (index != -1) {
  arr.splice(index, 1);
  let b = arr[index].toUpperCase();
  arr.splice(index, 1, b);
  index = arr.indexOf('-', index + 1);
}
return (arr.join(''));
}
