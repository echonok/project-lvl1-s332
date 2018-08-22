import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'What is the result of the expression?';
const min = 1;
const max = 100;

const genGameData = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const mathMixer = getRandomNumber(1, 4);
  let mathOperand;
  let correctAnswer;
  switch (mathMixer) {
    case 1:
      correctAnswer = String(num1 * num2);
      mathOperand = '*';
      break;
    case 2:
      correctAnswer = String(num1 + num2);
      mathOperand = '+';
      break;
    case 3:
      correctAnswer = String(num1 - num2);
      mathOperand = '-';
      break;
    default:
      correctAnswer = String(num1 * num2);
      mathOperand = '*';
      break;
  }

  const question = `${num1} ${mathOperand} ${num2}`;
  return [question, correctAnswer];
};

const startGameOfCalc = () => startNewGame(genGameData, rule);

export default startGameOfCalc;
