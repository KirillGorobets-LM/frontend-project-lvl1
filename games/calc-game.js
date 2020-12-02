import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';

const calcGame = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  const getRandomNum = () => Math.floor(Math.random() * (100 - 10)) + 10;
  const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];
  const getGameObject = () => {
    const a = getRandomNum();
    const b = getRandomNum();
    const operator = getRandomOperator();
    const question = `${a} ${operator} ${b}`;
    let correctAnswer = '';
    if (operator === '+') {
      correctAnswer = (a + b).toString();
    }
    if (operator === '-') {
      correctAnswer = (a - b).toString();
    }
    if (operator === '*') {
      correctAnswer = (a * b).toString();
    }
    const game = { question, correctAnswer };
    return game;
  };
  gameEngine(getGameObject, userName);
};
export default calcGame;
