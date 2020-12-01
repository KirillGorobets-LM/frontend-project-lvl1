import { greeting } from '../src/cli.js';
import { gameEngine } from '../src/index.js';

const calcGame = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  const getRandomNum = () => Math.floor(Math.random() * (100 - 10)) + 10;
  const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];
  // eslint-disable-next-line consistent-return
  const getQuestionAndCorrectAnswer = () => {
    const a = getRandomNum();
    const b = getRandomNum();
    const op = getRandomOperator();
    console.log(`Question: ${a} ${op} ${b}`);
    if (op === '+') {
      return String(a + b);
    }
    if (op === '-') {
      return String(a - b);
    }
    if (op === '*') {
      return String(a * b);
    }
  };
  gameEngine(getQuestionAndCorrectAnswer, userName);
};
export default calcGame;
