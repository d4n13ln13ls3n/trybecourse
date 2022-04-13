const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// const flatten = arrays.reduce((finalArray, currentArray, index) => finalArray.push(currentArray[index]), []);
// console.log(flatten);



// function flatten(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     const flattenedArray = [];
//     for (let j = 0; j < i.)
//   }
// }

// const flatten = (accumulator, current) => {
//   current.forEach((element) => accumulator.push(element))
//   return accumulator;
//   };
// const flattenedArray = arrays.reduce(flatten, []);
// console.log(flattenedArray);

const flattenedArray = arrays.reduce((accumulator, current) => {
  current.forEach((element) => accumulator.push(element))
  return accumulator;
  }, []);
console.log(flattenedArray);
