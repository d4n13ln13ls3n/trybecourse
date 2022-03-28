// exercicio1

/* function palindromo(palavra) {
  let myArray = Array.from(palavra);
  let invertedWord = myArray.reverse();
  let invertedString = invertedWord.join('');
    if (palavra == invertedString) {
      return true;
    }
    else {
      return false;
    }
}

console.log(palindromo("batata"));
*/

//exercicio 2
/*function maiorValor(array) {
  let highestNumber = array[0];
  let indexHighestNumber = 0;
  for (i = 1; i < array.length; i +=1) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
      indexHighestNumber = i;
      
    }
  }
  return indexHighestNumber;
}

console.log("resultado:", maiorValor([2, 3, 6, 7, 10, 1])); */

//exercicio 3
/* function menorValor(array) {
  let lowestNumber = array[0];
  let indexLowestNumber = 0;
  for (i = 1; i < array.length; i +=1) {
    if (array[i] < lowestNumber) {
      lowestNumber = array[i];
      indexLowestNumber = i;
      
    }
  }
  return indexLowestNumber;
}

console.log("resultado:", menorValor([2, 4, 6, 7, 10, 0, -3])); */