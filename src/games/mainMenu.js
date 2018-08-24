import readlineSync from 'readline-sync';
import startGameOfEven from './even';
import startGameOfCalc from './calc';
import startGameOfGCD from './gcd';
import startGameOfBalance from './balance';
import startGameOfProgression from './progression';
import startGameOfPrime from './prime';

const chooseOfGame = () => {
  console.log('Choose your game:');
  console.log('1. Game of even');
  console.log('2. Game of calc');
  console.log('3. Game of GCD');
  console.log('4. Game of balance');
  console.log('5. Game of progression');
  console.log('6. Game of prime');
  console.log('0. exti');
  const chosenGame = readlineSync.question('Game:');
  return chosenGame;
};

const choser = () => {
  switch (chooseOfGame()) {
    case '1':
      startGameOfEven();
      choser();
    case '2':
      startGameOfCalc();
      choser();
    case '3':
      startGameOfGCD();
      choser();
    case '4':
      startGameOfBalance();
      choser();
    case '5':
      startGameOfProgression();
      choser();
    case '6':
      startGameOfPrime();
      choser();
    case '0':
      console.log('Good bye!');
      return;
    default:
      console.log('You have to choose game or exit!');
      choser();
  }
};

const mainMenu = () => {
  console.log('Welcome to the Brain Games!');
  choser();
};

export default mainMenu;
