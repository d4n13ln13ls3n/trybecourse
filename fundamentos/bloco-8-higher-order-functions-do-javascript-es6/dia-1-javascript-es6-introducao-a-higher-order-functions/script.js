const employees = (nomeCompleto) => {
  const username = (nomeCompleto.split(" ")).join("_").toLowerCase();
  return {
    nomeCompleto, 
    email: `${username}@trybe.com`
  };
}

// console.log(employees('Daniel Yabu'));

const newEmployees = (createEmployeeFn) => {
  const employees = {
    id1: createEmployeeFn('Pedro Guerra'),
    id2: createEmployeeFn('Luiza Drummond'),
    id3: createEmployeeFn('Carla Paiva'),
  }
  return employees;
}

// console.log(newEmployees(employees));

// function newEmployees2(createEmployeeFn) {
//   const employees = {
//     id1: createEmployeeFn('Pedro Guerra'),
//     id2: createEmployeeFn('Luiza Drummond'),
//     id3: createEmployeeFn('Carla Paiva'),
//   }
//   return employees;
// }

const checkNumbers = (chosenNumber, winningNumber) => {
  if (chosenNumber === winningNumber) {
    return true;
  }
  return false;
}

const lotteryResult = (chosenNumber, checkNumbersFn) => {
  const winningNumber = Math.floor(Math.random() * 5) + 1;
  if (checkNumbersFn(chosenNumber, winningNumber)) {
    return "Parabéns você ganhou";
  }
  return "Tente novamente";
}

// console.log(lotteryResult(3, checkNumbers));

//HOF
const finalScore = (answerSheet, SSanswers, checkAnswersfn) => {
 return checkAnswersfn(answerSheet, SSanswers);
}

const checkAnswers = (answerSheet, SSanswers) => {
  let score = 0;
  for (let i = 0; i < answerSheet.length; i += 1) {
    if (SSanswers[i] === answerSheet[i]) {
      score += 1;
    }
    else if(SSanswers[i] === 'N.A') {
      score = score;
    }
    else if (SSanswers[i] !== answerSheet[i]) {
      score -= 0.5;
    }
  }
  return score;
}
// console.log('result:', checkAnswers(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']));
// console.log(finalScore(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checkAnswers));

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 15,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => { //https://www.w3schools.com/js/js_random.asp
  return (Math.floor(Math.random() * (dragon.strength - 14)) + 15);
}

const warriorDamage = () => {
  return (Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + 30);
}

const mageStats = () => {
  if (mage.mana < 15) {
    return {
    damage: "Não possui mana suficiente",
    mana: 0,
    }
  }
  return {
    damage: (Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence),
    mana: 15,
  }
}

const gameActions = {
  warriorAction: (callback) => {
    warrior.damage = callback();
    dragon.healthPoints -= warrior.damage;
  },
  mageAction: (callback) => {
    mage.damage = callback().damage;
    dragon.healthPoints -= mage.damage;
    mage.mana -= callback().mana;
  },
  dragonAction: (callback) => {
    dragon.damage = callback();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  logBattleMembers: () => {
    console.log(battleMembers);
  }
}

// console.log('dragon damage:', dragonDamage());

gameActions.warriorAction(warriorDamage);
// console.log('warrior:',warrior);
// console.log('dragon:', dragon);

gameActions.mageAction(mageStats);
// console.log('mage:', mage);
// console.log('dragon:', dragon);

gameActions.dragonAction(dragonDamage);

// console.log('dragon:', dragon);
// console.log('warrior:', warrior);
// console.log('mage:', mage);
// console.log(battleMembers);

gameActions.logBattleMembers();