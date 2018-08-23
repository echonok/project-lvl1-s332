import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Balance the given number.';
const balancer = (listOfNumber) => {
  const arrOfNum = listOfNumber.split('').map(element => Number(element));
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
  let listOfNumber = '';
  const numberOfNumber = 5;
  let i = 0;
  while (i < numberOfNumber) {
    listOfNumber += String(getRandomNumber(0, 9));
    i += 1;
  }
  const question = listOfNumber;
  const correctAnswer = balancer(listOfNumber);
  return [question, correctAnswer];
};

const startGameOfBalance = () => startNewGame(genGameData, mainRule);

export default startGameOfBalance;
