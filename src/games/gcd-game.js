import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const findMaxCommonDivisor = (num1, num2) => {
  let result = 0;
  const minNum = Math.max(num1, num2);
  for (let i = minNum; i >= 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const getGameObject = () => {
  const a = getRandomNumFromRange(10, 100);
  const b = getRandomNumFromRange(10, 100);
  const question = `${a} ${b}`;

  const correctAnswer = findMaxCommonDivisor(a, b).toString();

  return { question, correctAnswer };
};

export default () => gameEngine(getGameObject, task);
