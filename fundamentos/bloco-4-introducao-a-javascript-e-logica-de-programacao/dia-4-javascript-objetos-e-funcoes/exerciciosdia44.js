let info = {
  personagem: 'Margarida',
  origem: '\nPato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};
/* function welcome () {
  console.log("Bem-vinda, " + info.personagem);
}

welcome(); */

//exercicio 2
/*for (x in info) {
  console.log(info);
}*/

//exercicio 3
/* for (x in info) {
  console.log(x);
}
*/

//exercicio 4
/* for (x in info) {
  console.log(info[x]);
} */

//exercicio 5
/* let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: '\nNamorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrente: 'Sim'
};

console.log(info.personagem + " e " + info2.personagem + info.origem + " e " + info2.origem + info2.nota + "\n Ambos recorrentes"); */

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
/* {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
*/
/*
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {titulo: 'O Pior Dia de Todos', 
    autor: 'Daniela Kopsch', 
    editora: 'Tordesilhas'
  }, 
  { 
    titulo: 'Harry Potter e o Prisioneiro de Azkaban', 
    autor: 'JK Rowling', 
    editora:'Rocco'}
  ]
};

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0]['titulo'] + "'.");
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'.");
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos."); */