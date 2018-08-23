import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Balance the given number.';
const balancer = (numberForBalance) => {
  const arrOfNum = numberForBalance.split('').map(element => Number(element));
  while (Math.max(...arrOfNum) - Math.min(...arrOfNum) > 1) {
    const minElem = Math.min(...arrOfNum);
    const maxElem = Math.max(...arrOfNum);
    const indexOfMin = arrOfNum.findIndex(elem => elem === minElem);
    const indexOfMax = arrOfNum.findIndex(elem => elem === maxElem);
    arrOfNum[indexOfMin] = minElem + 1;
    arrOfNum[indexOfMax] = maxElem - 1;
  }
  return arrOfNum.sort().join('');
};

const genGameData = () => {
  const randomNumber =  getRandomNumber(1, 10000);
  const question = randomNumber;
  const correctAnswer = balancer(randomNumber);
  return [question, correctAnswer];
};

const startGameOfBalance = () => startNewGame(genGameData, mainRule);

export default startGameOfBalance;
