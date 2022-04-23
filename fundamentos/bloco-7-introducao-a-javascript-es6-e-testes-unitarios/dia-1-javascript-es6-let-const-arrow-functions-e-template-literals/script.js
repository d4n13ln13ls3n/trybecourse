/* const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
//  console.log(ifScope + ' o que estou fazendo aqui ? :O');
}

testingScope(true); */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

/* function ascendingOrder(array) {
  let orderedArray = [];
  orderedArray = array.sort(function(a,b){return a-b});
  return orderedArray;
} */

/* function ascendingOrder(array) {
  let orderedArray = [];
  const size = array.length;

  for (let i = 0; i < size; i += 1) {
    let minValue = null;
    let minIndex = -1;
    for (let j = 0; j < array.length; j += 1) {
      if (minValue === null || array[j] < minValue) {
        minValue = array[j];
        minIndex = j;
      }
    }
    array.splice(minIndex, 1); //removes 1 element from the position minIndex
    orderedArray.push(minValue); // inserts minValue into the array
  }
  
  return orderedArray;
} 

console.log(ascendingOrder(oddsAndEvens)); */

/*function factorial(n) {
  let result = n;
  console.log('result1:', result);
  for (let i = n - 1; i >= 1; i -= 1) {
    result *= i;
  }
return result;
}
console.log('result2:', factorial(6));
*/

/* function ascendingOrder(array) {
  
  let sortedArray = [];
  let size = array.length;
  for (let i = 0; i < size; i += 1) {
    let minValue = null;
    let minIndex = -1;
    for (let j = 0; j < array.length; j += 1) {
      if (minValue === null || array[j] < minValue) {
        minValue = array[j];
        minIndex = j;
      }
    }
    array.splice(minIndex, 1);
    sortedArray.push(minValue);
  }
  return sortedArray;
}

let oddNumbers = [3, 5, 1, 11, 7];

console.log(`Os números ${ascendingOrder(oddNumbers)} se encontram ordenados de forma crescente!`); */

// function factorial(n) {
//   for (let i = n -1; i >= 1; i -= 1) {
//     n *= i;
//   }
//   return n;
// }
// console.log(factorial(6));

// // const factorial = (n) => 

// function longestWord(sentence) {
//   let array = sentence.split(" ");
//   let longest = " ";
//   for (let i = 0; i < array.length; i += 1) {
//     array[i].length > longest.length ? longest = array[i] : array = array;
//     }
//   }
//   return longest;
// }
// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
// console.log('result:', longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

const mySkills = ['HTML', 'Javascript', 'CSS', 'Bootstrap', 'JQuery'];

function replaceX (string, newWord) {
  let array = string.split(" ");
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'x') {
      array[i] = newWord;
    }
  }
  return array.join(' '); //junta elementos do array com o parâmetro escolhido
}
//console.log('result:', replaceX("Tryber x aqui!", "Daniel"));

function mainSkills (welcome, array) {
  // let sortedArray = array.sort();
  return `${replaceX("Tryber x aqui", "Daniel")} Minhas cinco principais habilidades são: ${mySkills.sort()}`;
}
console.log(mainSkills(replaceX, mySkills));