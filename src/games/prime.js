import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Is this number prime? (yes/no)';

const isPrime = (someNumber) => {
  if (someNumber === 0 || someNumber === 1 || someNumber % 2 === 0) {
    return false;
  }
  for (let i = someNumber - 1; i > 1; i -= 1) {
    if (someNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const RandomNumber = getRandomNumber(0, 1000);
  const correctAnswer = isPrime(RandomNumber) ? 'yes' : 'no';
  const question = `${RandomNumber}`;
  return [question, correctAnswer];
};

const startGameOfPrime = () => startNewGame(genGameData, mainRule);

export default startGameOfPrime;
