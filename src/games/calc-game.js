import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[getRandomNumFromRange(0, (operators.length - 1))];
const getGameObject = () => {
  const a = getRandomNumFromRange(10, 100);
  const b = getRandomNumFromRange(10, 100);
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

export default () => gameEngine(getGameObject, rules);
