const { expect, test } = require('@jest/globals');
const {myRemove, sum, myFizzBuzz} = require('./sum'); 

describe ('tests function sum', () => {

  test('sums two values', () => {
  expect(sum(4, 5)).toBe(9);
  });

  test('sums two values', () => {
    expect(sum(0, 0)).toBe(0);
  })

test(`arguments receive ('a', 5) and return false`, () => {
expect(false).toEqual(sum(NaN(true), NaN(false)));
    });

    test(`arguments receive (4, 'b') and return false`, () => {
      expect(false).toEqual(sum(NaN(false), NaN(true)));
    });

    test(`arguments receive ('a', 'b') and return false`, () => {
      expect(false).toEqual(sum(NaN(true), NaN(true)));
    });

    test(`arguments receive (4, '') and return false`, () => {
      expect(false).toEqual(sum(NaN(false), undefined));
    });

    test(`arguments receive ('', 5) and return false`, () => {
      expect(false).toEqual(sum(undefined, NaN(false)));
    });

    test(`arguments receive ('', '') and return false`, () => {
      expect(false).toEqual(sum(undefined, undefined));
    });

   test(`arguments receive ('', '') and throw error message`, () => {
    expect(() => {
      sum('', '');
    }).toThrow('Both parameters must be informed');
    });
  
  test(`arguments receive ('4', 5) and throw error message`, () => {
    expect(() => {
      sum('a', 5);
    }).toThrow('Both parameters must be numbers');
  });

});

describe ('testando myRemove', () => {
  test (`verifica se myRemove'([1, 2, 3, 4], 3) retorna [1, 2, 4]`, () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1, 2, 4]);
  });
  test (`verifica se myRemove'([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]`, () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test (`verifica se myRemove'([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]`, () => {
    expect(myRemove([1,2,3,4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe ('testando myFizzBuzz', () => {
  test(`multiplo de 3 e 5 deve retornar "fizzbuzz"`, () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test(`multiplo de 3 deve retornar "fizz"`, () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test(`multiplo de 5 deve retornar "buzz"`, () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  test(`número não é multiplo de 3 nem 5`, () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  // test(`parâmetro não é número`, () => {
  //   expect(myFizzBuzz('a').toBeFalsy(false));
  // });
  test(`parâmetro não é número`, () => {
    expect(() => {
      myFizzBuzz('a');
    }).toBeFalsy;
  });
});