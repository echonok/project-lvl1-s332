#! node
import index from '..';
import readlineSync from 'readline-sync';
console.log("Welcome to the Brain Games!");
//console.log(index);
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log("Goodbye!");