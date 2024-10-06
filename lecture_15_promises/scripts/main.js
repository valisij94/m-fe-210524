function asyncFunction() {
  return setTimeout( () => {
    resolve('Hey there!');
  }, 1000);
}