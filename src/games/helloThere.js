import readlineSync from 'readline-sync';

const helloThere = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  //const userName = '123';
  console.log(`Hello! ${userName} :)`);
};

export default helloThere;
