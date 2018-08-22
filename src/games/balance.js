import startNewGame from '..';
import getRandomNumber from '../tools';

const mainRule = 'Balance the given number.';


const balancer = (someArr) => {
  const minElem = Math.min(...someArr);
  const maxElem = Math.max(...someArr);
  if (maxElem - minElem <= 1) {
    return someArr.sort().join('');
  }
  const indexOfMin = someArr.findIndex(elem => elem === minElem);
  const indexOfMax = someArr.findIndex(elem => elem === maxElem);
  someArr.splice(indexOfMin, 1);
  someArr.splice(indexOfMax, 1);
  someArr.push(minElem + 1);
  someArr.push(maxElem - 1);
  return balancer(someArr);
};

const genGameData = () => {
  const someString = getRandomNumber(100, 1000);
  const arr = String(someString).split('').map(element => Number(element));
  const question = someString;
  const correctAnswer = balancer(arr);
  return [question, correctAnswer];
};

const startGameOfBalance = () => startNewGame(genGameData, mainRule);

export default startGameOfBalance;
