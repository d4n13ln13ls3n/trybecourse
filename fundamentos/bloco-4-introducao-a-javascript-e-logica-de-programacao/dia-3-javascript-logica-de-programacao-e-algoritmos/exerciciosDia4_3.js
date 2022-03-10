// EXERCISE 1 - function factorial(n) {
  /*let result = 1;
  let n = 5;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  console.log("result:", result);
/*  return result;
}
console.log("Result:", factorial(5)); */

/* steps:
- create a variable to store the calculations;
- calculate n * (n-1) until n == 1; */

//exercicio 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

/* function invert(anyString) {
  let invertedWord = [];
  for (let i = anyString.length-1; i >= 0; i--) {
    invertedWord.push(anyString[i]);
  }
  return invertedWord.toString();
}
console.log(invert("banana")); */

/* - create a variable to receive the final letter of the given word;
- transport that final letter to the variable, using pop
- use a loop so the second step can be repeated until there aren't any more letters in the given word; */

// EXERCICIO 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array. Considere o número de caracteres de cada palavra.

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
function longestWord(array) {
  let currentLongest = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > currentLongest.length) {
      currentLongest = array[i];
    }
    else {
      return currentLongest;
    }
  }
  return currentLongest;
}
console.log("Result:", longestWord(array)); */

// EXERCICIO 4 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
function shortestWord(array) {
  let currentShortest = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < currentShortest.length) {
      currentShortest = array[i];
    }
  }
  return currentShortest;
}
console.log("Result3:", shortestWord(array)); */

function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function highestPrimeNumber (n1, n2) {
  let highestPrime = 2;
  if (n2 <= n1) {
    throw new Error ("n2 cannot be less or equal than n1");
    return;
  }
  for (let j = n1; j <= n2; j += 1) {
    if (isPrime(j) === true) {
      highestPrime = j;
    }
  }
  return highestPrime;
}
console.log("final result:", highestPrimeNumber(370,40));