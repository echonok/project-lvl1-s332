#! node
import index from '..';
<<<<<<< HEAD
console.log("Welcome to the Brain Games!");
console.log('Hello, ' + index.userName + '!');
=======
import readlineSync from 'readline-sync';
console.log("Welcome to the Brain Games!");
//console.log(index);
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log("Goodbye!");
>>>>>>> d06fcfdbaa259089faccb093f8776da9dff2833c
