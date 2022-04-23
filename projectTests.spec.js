const { test, expect } = require('@jest/globals');
const { average } = require('./projectTests');

describe (`testa a função average`, () => {
  test(`retorna média dos valores do array de números recebido`, () => {
    expect(average([2, 3, 5])).toBe(3);
  });
  test(`retorna undefined ao receber array com valores não numéricos`, () => {
    expect(average(['a', 1, 'c'])).toBeUndefined;
  });
  test(`returna undefined ao receber array vazio`, () => {
    expect(average([])).toBeUndefined;
  })
});

describe (`testa a função numbers`, () => {
  test(`retorna true quando o array contém somente números`, () => {
    expect(numbers([1, 3, 5])).toBe(true);
  });
});