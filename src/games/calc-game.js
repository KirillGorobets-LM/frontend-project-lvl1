import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getResultOfExpression = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = undefined;
  }
  return result;
};

const getRandomOperator = () => operators[getRandomNumFromRange(0, (operators.length - 1))];
const getGameObject = () => {
  const a = getRandomNumFromRange(10, 100);
  const b = getRandomNumFromRange(10, 100);
  const operator = getRandomOperator();
  const question = `${a} ${operator} ${b}`;

  const correctAnswer = getResultOfExpression(a, b, operator).toString();

  return { question, correctAnswer };
};

export default () => gameEngine(getGameObject, task);
