import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const commonDivisor = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  const maxNum = Math.max(num1, num2);
  const findCommonDivisor = (numMin, numMax, firstMin) => {
    if (numMax % numMin === 0 && firstMin % numMin === 0) {
      return numMin;
    }
    return findCommonDivisor(numMin - 1, numMax, firstMin);
  };
  return findCommonDivisor(minNum, maxNum, minNum);
};

const genGameData = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const correctAnswer = String(commonDivisor(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const startGameOfGCD = () => startNewGame(genGameData, mainRule);

export default startGameOfGCD;
