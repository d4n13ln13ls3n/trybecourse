const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = (object) => {
const {name, length, measurementUnit} = object;
return `${name} is ${length} ${measurementUnit} long`
};

// const shipLength = (object) => {
//   const [ {name, length, measurementUnit} ] = ships;
//   for (x in object) {
// return `${name} is ${length} ${measurementUnit} long`;
// }};

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

//Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

// escreva greet abaixo

const greet = (name, greeting = "Hi") => {
[name, greeting] = [greeting, name];
return `${name} ${greeting}`;
}

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};


// const { spring, summer, autumn, winter, { spring = [month3, month4, month5 ]  } = yearSeasons;
const monthsOfTheYear = () => {
  const { spring: [month3, month4, month5], summer: [month6, month7, month8], autumn: [ month9, month10, month11 ], winter: [month12, month1, month2] } = monthsOfTheYear;
  return [month1, month2, ...spring, ...summer, ...autumn, month12 ];
}
  console.log(monthsOfTheYear());