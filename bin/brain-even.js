#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const nameOfUser = readlineSync.question('May I have your name?');
console.log(`Hello, ${nameOfUser}!`);
console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');

const getRundom = () => Math.floor(Math.random() * (100 - 10)) + 10;
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
const getCorrectAnswer = (num) => {
  if (isEven(num)) {
    return 'yes';
  } return 'no';
};
const array = [getRundom(), getRundom(), getRundom()];
for (let i = 0; i < array.length; i += 1) {
  console.log(`Question: ${array[i]}`);
  const answer = readlineSync.question('Your answer:');
  if (getCorrectAnswer(array[i]) === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(array[i])}'`);
    console.log(`Let\`s try again ${nameOfUser}!`);
    process.exit();
  }
}
console.log(`Congratulations, ${nameOfUser}!`);
