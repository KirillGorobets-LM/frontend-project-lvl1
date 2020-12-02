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
    const op = getRandomOperator();
    const question = `${a} ${op} ${b}`;
    let correctAnswer = '';
    let game = {};
    if (op === '+') {
      correctAnswer = (a + b).toString();
    }
    if (op === '-') {
      correctAnswer = (a - b).toString();
    }
    if (op === '*') {
      correctAnswer = (a * b).toString();
    }
    game = { question, correctAnswer };
    return game;
  };
  gameEngine(getGameObject, userName);
};
export default calcGame;
