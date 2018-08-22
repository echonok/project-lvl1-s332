import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Balance the given number.';
const balancer = (listOfNumber) => {
  const arrOfNum = listOfNumber.split('').map(element => Number(element));
  console.log(arrOfNum);
  while (Math.max(...arrOfNum) - Math.min(...arrOfNum) > 1) {
    const minElem = Math.min(...arrOfNum);
    const maxElem = Math.max(...arrOfNum);
    const indexOfMin = arrOfNum.findIndex(elem => elem === minElem);
    const indexOfMax = arrOfNum.findIndex(elem => elem === maxElem);
    arrOfNum.splice(indexOfMin, 1);
    arrOfNum.splice(indexOfMax-1, 1);
    arrOfNum.push(minElem + 1);
    arrOfNum.push(maxElem - 1);
  }
  return arrOfNum.sort().join('');
};

const genGameData = () => {
  let listOfNumber = '';
  const numberOfNumber = 5;
  for (i = 0; i < numberOfNumber; i++) { 
    listOfNumber += String(getRandomNumber(0, 9));
  }
  const question = someString;
  const correctAnswer = balancer(listOfNumber);
  return [question, correctAnswer];
};

const startGameOfBalance = () => startNewGame(genGameData, mainRule);

export default startGameOfBalance;
