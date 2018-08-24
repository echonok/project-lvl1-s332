import readlineSync from 'readline-sync';
import startGameOfEven from './even';
import startGameOfCalc from './calc';
import startGameOfGCD from './gcd';
import startGameOfBalance from './balance';
import startGameOfProgression from './progression';
import startGameOfPrime from './prime';

const mainMenu = () => {
  console.log('Welcome to the Brain Games! Choose your game:');
  console.log('1. Game of even:');
  console.log('2. Game of calc:');
  console.log('3. Game of GCD:');
  console.log('4. Game of balance:');
  console.log('5. Game of progression:');
  console.log('6. Game of prime:');
  const chosenGame = readlineSync.question('Game: ');
  switch (chosenGame) {
    case '1':
      startGameOfEven();
      break;
    case '2':
      startGameOfCalc();
      break;
    case '3':
      startGameOfGCD();
      break;
    case '4':
      startGameOfBalance();
      break;
    case '5':
      startGameOfProgression();
      break;
    case '6':
      startGameOfPrime();
      break;
    default:
      startGameOfEven();
      break;
  }
};

export default mainMenu;