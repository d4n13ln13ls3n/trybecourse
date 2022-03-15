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

//exercicio 4
/*function longestString(array) {
  let longest = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}
console.log(longestString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); */

// exercicio 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

/*function repeatedMoreOften(array) {
  let sortedArray = array.sort();
  console.log("sorted array:", sortedArray);
  let countFirstNumber = 0;
  let countSecondNumber = 0;
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (sortedArray[0] === sortedArray[i]) {
      countFirstNumber++;
    }
    if (sortedArray[countFirstNumber] === sortedArray[i]) {
      countSecondNumber++;
    }
  }
  console.log("count 1st number:", countFirstNumber);
  console.log("count 2nd number:", countSecondNumber);
  console.log("count 1st and 2nd numbers:", countFirstNumber + countSecondNumber);
  let remainingNumbers = array.length - (countFirstNumber + countSecondNumber);
  console.log("remaining numbers:", remainingNumbers);
  if (remainingNumbers < (countFirstNumber + countSecondNumber) && countFirstNumber > countSecondNumber) {
    return sortedArray[0];
  }
  else if (remainingNumbers < (countFirstNumber + countSecondNumber) && countFirstNumber < countSecondNumber) {
    return sortedArray[countFirstNumber];
  }
}
console.log("result:", repeatedMoreOften([2, 3, 2, 5, 8, 2, 3])); */

/*steps
1 classificar o array em ordem ascendente, para que os números iguais fiquem juntos
2 fazer um for loop para percorrer o intervalo e descobrir quantas vezes o primeiro número aparece
3 de posse da informação acima, descobrir quantas vezes o segundo número aparece
4 somar o número de vezes que o primeiro e segundo número aparecem e ver se já não ultrapassa o comprimento do array
5 caso não ultrapasse, ver o número de vezes que o terceiro número aparece
6 repetir passo 4 com o terceiro número
7 ver número de vezes que o quarto número aparece, e assim por diante */

//exercicio 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

/*
function reverseSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}
console.log(reverseSum(7)); */

// exercicio 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
/* Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false */

// long attempt 
/* function match(word, ending) {
  let endingLength = ending.length;
  let endingArray = Array.from(ending);
  let wordArray = Array.from(word);
  let finalLetters = wordArray.splice(wordArray.length-2, ending.length);
  console.log("final letters:", finalLetters);
  console.log("ending array:", endingArray);
  console.log("type of finalletters:", typeof finalLetters);
  console.log("type of endingArray:", typeof endingArray);
    if (finalLetters === endingArray) {
      return true;
    }
    else if (finalLetters !== endingArray) {
    return false;
    }
}
console.log(match('trybe', 'be')); */

// exercicio 7 solved the quickest way
/*function match(word, ending) {
  let result = word.endsWith(ending);
  if (result === true) {
    return true;
  }
  else {
    return false;
  }
}
console.log(match('trybe', 'ber')); */
/*Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .*/

function repeatedTheMost (array) {
  let globalCounter = 0;
  let repeatedNumbers = "there are no repeated numbers";
    for (let i = 0; i < array.length; i += 1) {
      let localCounter = 0;
        for (let j = 0; j < array.length; j += 1) {
          if (array[i] === array[j]) {
            
          }
        }
    }

}
console.log(repeatedTheMost([2, 3, 2, 5, 8, 2, 3]));