function average (array) {
  let i = 0;
  let result = 0;
  let sum = 0;
  if (array === [] || array[i] === NaN) {
    return undefined;
  }
  else {
    for (i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
    result = sum / array.length
    return Math.round(result); 
  }
}
function numbers(array) {
  
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);  

    if (typeof array[i] !== 'number') {
    return false;
    }
    
  }
  return true;
}

console.log('numbers:', numbers(['a', 3, 5]));

module.exports = {
  average,
  numbers
};