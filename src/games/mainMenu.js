import readlineSync from 'readline-sync';
import startGameOfEven from './even';
import startGameOfCalc from './calc';
import startGameOfGCD from './gcd';
import startGameOfBalance from './balance';
import startGameOfProgression from './progression';
import startGameOfPrime from './prime';

const chooseOfGame = (userName) => {
  console.log(`\nChoose your games ${userName}:\n`);
  console.log('1. Game of even');
  console.log('2. Game of calc');
  console.log('3. Game of GCD');
  console.log('4. Game of balance');
  console.log('5. Game of progression');
  console.log('6. Game of prime');
  console.log('0. exti');
  const chosenGame = readlineSync.question('\n->');
  return chosenGame;
};

const choser = (userName) => {
  switch (chooseOfGame(userName)) {
    case '1':
      startGameOfEven();
      choser(userName);
      break;
    case '2':
      startGameOfCalc();
      choser(userName);
      break;
    case '3':
      startGameOfGCD();
      choser(userName);
      break;
    case '4':
      startGameOfBalance();
      choser(userName);
      break;
    case '5':
      startGameOfProgression();
      choser(userName);
      break;
    case '6':
      startGameOfPrime();
      choser(userName);
      break;
    case '0':
      console.log(`Good bye, ${userName}!\n`);
      break;
    default:
      console.log(`${userName}, you have to choose game or exit!\n`);
      choser(userName);
      break;
  }
};

const mainMenu = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I ask your name?');
  choser(userName);
};

export default mainMenu;
