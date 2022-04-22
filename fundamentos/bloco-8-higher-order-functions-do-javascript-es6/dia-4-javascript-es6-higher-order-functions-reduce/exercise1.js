// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// const [primeiro, segundo, terceiro] = arrays;
// const flattenedArr = [...primeiro, ...segundo, ...terceiro];
// console.log('flattened:', flattenedArr);
// const flatten = arrays.reduce((finalArray, currentArray, index) => finalArray.push(currentArray[index]), []);
// console.log(flatten);



// function flatten(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     const flattenedArray = [];
//     for (let j = 0; j < i.)
//   }
// }

// const flatten = (accumulator, current) => {
//   current.forEach((element) => accumulator.push(element))
//   return accumulator;
//   };
// const flattenedArray = arrays.reduce(flatten, []);
// console.log(flattenedArray);

// const flattenedArray = arrays.reduce((accumulator, current) => {
//   current.forEach((element) => accumulator.push(element))
//   return accumulator;
//   }, []);
// console.log(flattenedArray);


// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const resume = {...user, ...jobInfos};
// console.log(resume);

// Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

// const { name, age, nationality, profession, squad, squadInitials } = resume;
// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

// const [first, second, third, fourth] = arrayCountries;
// console.log(fourth, third, second, first);

const getNationality = ({ firstName, nationality = "Brazilian"}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// const { firstName, lastName, nationality = 'Brazilian' } = person;
// console.log('person.nationality:', nationality);
// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));