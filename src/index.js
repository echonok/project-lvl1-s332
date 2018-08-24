import readlineSync from 'readline-sync';

const numberOfAttempts = 3;

const startNewGame = (game, rule) => {
  console.log(`${rule}\n`);
  const iter = (acc) => {
    if (acc === numberOfAttempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [riddleNum, correctAnswer] = game();
    console.log(`Question: ${riddleNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
      iter(acc + 1);
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
  };
  iter(0);
};
export default startNewGame;
