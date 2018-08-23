import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Is this number prime? (yes/no)';

const isPrime = (someNumber) => {
  if (num < 2 || (num % 2 === 0 && num !== 2)) {
    return false;
  }
  const maxDivisor = Math.round(Math.sqrt(someNumber)) + 1;
  for (let i = 3; i < maxDivisor; i += 2) {
    if (someNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const randomNumber = getRandomNumber(0, 1000);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `${randomNumber}`;
  return [question, correctAnswer];
};

const startGameOfPrime = () => startNewGame(genGameData, mainRule);

export default startGameOfPrime;
