import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const min = 1;
const max = 10;

const genGameData = () => {
  const question = getRandomNumber(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGameOfEven = () => startNewGame(genGameData, mainRule);

export default startGameOfEven;
