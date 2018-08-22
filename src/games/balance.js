import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Balance the given number.';

const someString = getRandomNumber(100, 1000);

let arr = String(someString).split('').map(element => Number(element));

const balancer = (someArr) => {
  const minElem = Math.min(...someArr);
  const maxElem = Math.max(...someArr);
  if (maxElem - minElem <= 1) {
    return someArr.sort().join('');
  }
  
  someArr[someArr.findIndex(elem => elem === minElem)] = minElem + 1;
  someArr[someArr.findIndex(elem => elem === maxElem)] = maxElem - 1;

  return balancer(someArr);
};

const genGameData = () => {
  const question = someString;
  const correctAnswer = balancer(arr);
  return [question, correctAnswer];
};

const startGameOfEven = () => startNewGame(genGameData, mainRule);

export default startGameOfBalance;
