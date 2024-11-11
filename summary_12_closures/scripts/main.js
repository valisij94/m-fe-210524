

let cache = {};

function getFactorial(arg) {
  console.log('HeavyCalc called');
  // some magic
  return 'Heavy result ' + arg;
}


function cachingDecorator(wrappedFunction, arg) {
  const cache = {};

  if (cache[arg]) return cache[arg];

  return function(arg) {
    console.log('now cache is', cache)
    if (cache[arg]) return cache[arg];
    const result = wrappedFunction(arg);
    cache[arg] = result;
    return result;
  }
}

const cachedHeavyCalc = cachingDecorator(getFactorial);

console.log( cachedHeavyCalc(1) );
console.log( cachedHeavyCalc(2) );
console.log( cachedHeavyCalc(1) );
