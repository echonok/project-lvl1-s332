import readlineSync from 'readline-sync';
import startGameOfEven from 'even';
import startGameOfCalc from '../games/calc';
import startGameOfGCD from '../games/gcd';
import startGameOfBalance from '../games/balance';
import startGameOfProgression from '../games/progression';
import startGameOfPrime from '../games/prime';



const helloThere = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`So, hi ${userName} :). Choose your game:`);
  console.log(`1. Game of even:`);
  console.log(`2. Game of calc:`);
  console.log(`3. Game of GCD:`);
  console.log(`4. Game of balance:`);
  console.log(`5. Game of progression:`);
  console.log(`6. Game of prime:`);
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

export default helloThere;
