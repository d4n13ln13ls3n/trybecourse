const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addShift (object, key, value) {
  object[key] = value;
}

// addShift(lesson2, 'turno', 'noite');
// console.log('lesson2:', lesson2);

const listKeys = object => Object.keys(object);

const listLength = object => listKeys(object).length;

console.log(listLength(lesson1));
console.log(listLength(lesson2));

const listValues = object =>Object.values(object);

console.log(listValues(lesson1));

const allLessons = {
  lesson1 : Object.assign({}, lesson1),
  lesson2 : Object.assign({}, lesson2),
  lesson3 : Object.assign({}, lesson3)
}
// Object.assign({}, lesson1, lesson2, lesson3);
console.log('all lessons:', allLessons);

const numberStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

console.log('number:', numberStudents());

const getValueByNumber = (object, key) => Object.values(object)[key];

console.log(getValueByNumber(lesson3, 3));

// const verifyPair = (object, key, value) => Object.entries(object).includes([`${key}`, `${value}`]) ? 'Sim' : 'Não';
// console.log('verify:', verifyPair(lesson1, 'turno', 'noite'));
// console.log('verify:', verifyPair(lesson1, 'materia', 'Matemática'));
// console.log(Object.entries(lesson1));

function verifyPair(object, key, value) {
  if (Object.keys(object).includes(key) && object[key] === value) {
    return true;
  } else {
    return false;
  }
}
console.log('verify pair:', verifyPair(lesson2, 'Professor', 'Carlos'));
console.log(lesson2.materia)