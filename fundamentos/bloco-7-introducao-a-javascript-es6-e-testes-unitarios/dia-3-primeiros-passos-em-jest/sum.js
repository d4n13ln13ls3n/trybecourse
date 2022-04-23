function sum(a,b) {
  if (isNaN(a) === true || isNaN(b) === true) {
    throw new Error('Both parameters must be numbers');
  } //must be numbers - incorrect
  else if (a === '' || b === '') {
    throw new Error('Both parameters must be informed');
  } // correct
  
  return a + b;
}
// let x; //undefined
// let y = ''; //null

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


module.exports = {sum, myRemove, myFizzBuzz};