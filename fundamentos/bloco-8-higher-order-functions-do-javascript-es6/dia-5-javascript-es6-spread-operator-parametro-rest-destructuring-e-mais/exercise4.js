const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const [ {name, bornIn, nationality} ] = people;

const filterPeople = people.filter(({bornIn, nationality}) => bornIn < 2000 && bornIn > 1899 && nationality === 'Australian');

console.log(filterPeople);

// const myList = [1, 2, 3];

// escreva swap abaixo

// [myList[0], myList[1], myList[2]] = [3, 2, 1];
// console.log(myList);

// const swap = (array) => [ array[0], , , array[array.length-1] ] = [ array[array.length-1], , , array[0] ];
// const swap = ([first, ...rest]) => {
//   console.log('rest:', Object.values(rest));
//   return ([rest[rest.length -1], (Object.values(rest)).shift() , first]);
// }
// console.log(swap(myList));

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

function toObject(list) {
  const [model, maker, year] = list;
  return {
    model: model,
    maker: maker,
    year: year,
  };
}
console.log(toObject(palio));