const a = 4;
const b = 3;
const c = 7;

const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

// Programa 2 - maior de 2
if (a > b) {
  console.log("maior:", a);
}
else {
  console.log("maior:", b);
}
//

// Programa 3 - maior de 3
if (a > b && a > c) {
  console.log("maior:", a);
}
else if (b > a && b > c) {
  console.log("maior:", b);
}
else if (c > a && c > b) {
  console.log("maior:", c);
}
else {
  console.log("Não existe um número que seja isoladamente maior que os outros");
}
//

//Programa 4 - positive or negative
const anyNumber = 9;
if (anyNumber >= 0) {
  console.log("anyNumber is positive");
}
else {
  console.log("anyNumber is negative");
}
//

//Programa 5 - angulos de um triangulo
const anguloA = 30;
const anguloB = 60;
const anguloC = 90;
const totalAngulos = anguloA + anguloB + anguloC;
if (totalAngulos === 180) {
  console.log("true");
}
else if (totalAngulos !== 180 || anguloA < 0 || anguloB < 0 || anguloC < 0) {
  console.log("false");
}
//

//programa 6 = chess pieces
const piece = "rook";
switch(piece.toLowerCase()) {
  case "knight":
    console.log("L-shaped move");
    break;

  case "bishop":
    console.log("moves diagonally");
    break;

  case "rook":
    console.log("moves vertically and horizontally");
    break;

  case "queen":
    console.log("moves diagonally, vertically and horizontally");
    break;

  case "king":
    console.log("moves diagonally, vertically and horizontally, but one square at a time");
    break;

  case "pawn":
    console.log("moves forward, one or two squares in the first move and one square after the second move; it captures diagonally");
    break;

  default:
    console.log("this piece doesn't exist");
}
//

// Programa 7 - Percentage to American Grades
let percentage = 91;
if (percentage < 0 || percentage > 100) {
  console.log("Input not valid");
}
else if (percentage >= 90 && percentage <= 100) {
  console.log("Your mark is A");
}
else if (percentage >= 80) {
  console.log("Your mark is B");
}
else if (percentage >= 70) {
  console.log("Your mark is C");
}
else if (percentage >= 60) {
  console.log("Your mark is D");
}
else if (percentage >= 50) {
  console.log("Your mark is E");
}
else if (percentage < 50) {
  console.log("Your mark is F");
}

//

// Programa 8 - odd and even (one even true; no evens false)
let firstNumber = 10;
let secondNumber = 3;
let thirdNumber = 9;
if (firstNumber % 2 == 0 || secondNumber % 2 == 0 || thirdNumber == 0) {
  console.log("true");
}
else {
  console.log("false");
}

// Programa 9 - odd and even (one odd true; no odds false)
let firstNum = 10;
let secondNum = 3;
let thirdNum = 90;
if (firstNum % 2 == 1 || secondNum % 2 == 1 || thirdNum == 1) {
  console.log("true");
}
else {
  console.log("false");
}

//Programa 10 - custo total e lucro
const valorCusto = 15;
const valorVenda = 20;
const impostoSobreOCusto = valorCusto * 0.2;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const lucro = valorVenda - valorCustoTotal;
const impostoTotal = impostoSobreOCusto * 1000;
const lucroTotal = (lucro * 1000);
if (valorCusto < 0 || valorVenda < 0) {
  console.log("Não é possível calcular");
}
else {
  console.log("Lucro:", lucro);
  console.log("Custo total:", valorCustoTotal);
  console.log("Lucro total:", lucroTotal);
  console.log("Imposto:", impostoSobreOCusto);
}
//Programa 11 - INSS e IR
let salarioBruto = 3000;
let aliquotaINSS = 0;

let salarioLiquido = 0;

if (salarioBruto >= 2594.93 || salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
}
  else if (salarioBruto >= 1556.95 || salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
  }
  else if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
  }
  else {
    aliquotaINSS = 570.88;
  }

  let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  salarioLiquido = 1903.98;
}
  else if (salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.8);
  }
  else if (salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.8);
  }
  else if (salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);
  }
  else if (salarioBase >= 4664.38) {
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
  }

  console.log("aliquota INSS:", aliquotaINSS);
  console.log("salário base:", salarioBase);
  console.log("salário liquido:", salarioLiquido);