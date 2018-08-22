import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const commonDivisor = (num1, num2) => {
  const numMin = Math.min(num1, num2);
  const numMax = Math.max(num1, num2);
  const findCommonDivisor = (numMin, numMax, firstMin) => {
    if (numMax % numMin === 0 && firstMin % numMin === 0) {
      return String(numMin);
    }
    return findCommonDivisor(numMin - 1, numMax, firstMin);
  }
  return findCommonDivisor(numMin, numMax, numMin)
};

const genGameData = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const correctAnswer = commonDivisor(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const startGameOfGCD = () => startNewGame(genGameData, mainRule);

export default startGameOfGCD;
