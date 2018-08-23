import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'What number is missing in this progression?';
const progressionGenerator = (sizeProgr = 10, startProgr = 4, stepProgr = 2) => {
  const fullProgr = [];
  let i = 0;
  while (sizeProgr > i) {
    fullProgr.push(startProgr + stepProgr * i);
    i += 1;
  }
  return fullProgr;
};

const genGameData = () => {
  const numberOfNumber = 10;
  const startPosition = getRandomNumber(10, 100);
  const stepPosition = getRandomNumber(1, 9);
  const fullProgression = (progressionGenerator(numberOfNumber, startPosition, stepPosition));
  const indexHiddenNumber = getRandomNumber(1, 9);
  const correctAnswer = String(fullProgression[indexHiddenNumber]);
  fullProgression[indexHiddenNumber] = '..';
  const question = fullProgression.join(' ');
  return [question, correctAnswer];
};

const startGameOfProgression = () => startNewGame(genGameData, mainRule);

export default startGameOfProgression;
