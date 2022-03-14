/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
 function altersParagraph() {
 document.getElementsByTagName('p')[1].innerText = "Daqui a dois anos me vejo como um dev mais autossuficiente";
 }
altersParagraph();

function altersMainBackgroundColor() {
document.getElementsByClassName('main-content')[0].style.backgroundColor = "rgb(76,164,109)";
}
altersMainBackgroundColor();

function altersCenterBackgroundColor() {
document.getElementsByClassName('center-content')[0].style.backgroundColor = "white";
}
altersCenterBackgroundColor();

function correctsTextH1() {
document.getElementsByTagName('h1')[0].innerText = "JavaScript";
}
correctsTextH1();

function upperCase() {
let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i += 1) {
// paragraphs[i].style = "text-transform: uppercase";
paragraphs[i].innerText = paragraphs[i].innerText.toUpperCase();
}
}
upperCase();

function showOnConsole () {
let contentParagraphs = document.getElementsByTagName('p');
for (let i = 0; i < contentParagraphs.length; i += 1) {
       console.log(contentParagraphs[i]);
}
}
showOnConsole();