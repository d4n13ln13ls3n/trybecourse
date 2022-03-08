//exercicio 1
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0;
for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
} */

//exercicio 2
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
console.log("sum:", sum); */

//exercicio 3
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
console.log("sum:", sum);
console.log("number of elements:", numbers.length);
let average = sum / numbers.length
console.log("average:", average); */

//exercicio 4
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
let average = sum / numbers.length
if (average > 20) {
  console.log("Valor maior que 20");
}
else {
  console.log("Vamor menor ou igual a 20");
} */

//exercicio 5
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSorted = numbers.sort();
console.log("Highest number:", numbersSorted[0]); */

//exercicio 6
/* let numbers = [5, 9, 3, 19, 70, 80, 100, 2, 35, 27];
let oddNumbers = 0;
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers += 1;
  }
}
  if (oddNumbers === 0) {
  console.log("No odd numbers found");
  }
  else {
    console.log("Odd numbers:", oddNumbers);
  }
*/

//exercicio 7
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowest = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (lowest > numbers[i]) {
    lowest = numbers[i];
  }
}
console.log("Lowest:", lowest); */

//exercicio 8
/* let myArray = [];
for (let i = 1; i <= 25; i += 1) {
  myArray.push(i);
}
console.log(myArray); */

//exercicio 9
/* let myArray = [];
  let mySecondArray = []
for (let i = 1; i <= 25; i += 1) {
  myArray.push(i);
  mySecondArray.push(i/2);
}
console.log("my array:", myArray);
console.log("my second array:", mySecondArray); */

//exercício 10
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function(a,b){return b-a});
console.log(numbers);
*/

//exercicio 11
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i + 1]) {
    numbersMultiplied.push(numbers[i] * numbers[i + 1]);
  }
  else {
    numbersMultiplied.push(numbers[i] * 2);
  }
}
console.log(numbersMultiplied); */