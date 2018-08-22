import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const genGameData = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  
  let numMin = Math.min(num1, num2);
  let numMax = Math.max(num1, num2);

  let correctAnswer = commonDivisor(numMin, numMax);

  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const commonDivisor = (numMin, numMax) => {
  if (numMax % numMin === 0) {
    return numMin;
  }
  return commonDivisor(numMin - 1, numMax);
}

const startGameOfGCD = () => startNewGame(genGameData, mainRule);

export default startGameOfGCD;
