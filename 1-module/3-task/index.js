function ucFirst(str) {
  // ваш код...
  if (str.length == 1) {
    return ( str.toUpperCase() );
  } else if (str.length == 0) {
    return ( str );
  } else {
      return ( str[0].toUpperCase() + str.slice(1) );
    }
}
