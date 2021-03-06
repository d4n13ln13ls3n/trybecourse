// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// console.log('primeiro:', planetDistanceFromSun(mars));
// setTimeout(() => console.log('terceiro:', planetDistanceFromSun(venus)), 3000);
// setTimeout(() => console.log('segundo:', planetDistanceFromSun(jupiter)), 2000);

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => console.log("Returned planet: ", mars), 4000);
// };

// getPlanet(); // imprime Marte depois de 4 segundos

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     } else {
//       const errorMessage = "Country could not be found";
//     }
//   }, delay());
// };

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryCurrency, printErrorMessage);

// Escreva um teste que verifique a chamada da callback de uma fun????o uppercase , que transforma as letras de uma palavra em letras mai??sculas. Lembre-se de ter cuidado com os falso-positivos em testes ass??ncronos.

// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// test('testing if uppercase changes the string to capital letters', (done) => {
//   uppercase = ('whatever', (str) => {
//     try {
//       expect(str).toBe('WHATEVER');
//       done();
//     } catch(error) {
//       done(error); 
//     }
//   });
// });

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('N??o temos esse pok??mon para voc?? :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Ol??, seu pok??mon ?? o ${name}, o tipo dele ?? ${type} e a habilidade principal dele ?? ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const callback = (error, message) =>{
  if (error) {
    console.log(error);
    return;
  }
  console.log(message);
}
getPokemonDetails( ((pokemon) => pokemon.name === 'Pikachu'), callback);

// module.exports = {
//   getPokemonDetails,
// }

// const { getPokemonDetails } = require("./get-pokemon-details");

describe("A fun????o getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que n??o existe no banco de dados", (done) => {
    expect.assertions(2);
    getPokemonDetails(((pokemon) => pokemon.name === 'Pikachu'), (error, message) => {
      try {
        expect(message).toBe(undefined);
        expect(error.message).toBe('N??o temos esse pok??mon para voc?? :(')
        done ();
      } catch(error) {
        done(error);
      }
    })
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    expect.assertions(1);
    const expectedString = 'Ol??, seu pokem??n ?? o Charmander, o tipo dele ?? Fire e a habilidade principal dele ?? Ember';

    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }
    getPokemonDetails(((pokemon) => pokemon.name === 'Charmander'), callback);
  });
});

// test('testing if uppercase changes the string to capital letters', (done) => {
//   uppercase = ('whatever', (str) => {
//     try {
//       expect(str).toBe('WHATEVER');
//       done();
//     } catch(error) {
//       done(error); 
//     }
//   });
// });

// Para este exerc??cio, tente adivinhar a sa??da dos console.log dos testes abaixo sem execut??-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});