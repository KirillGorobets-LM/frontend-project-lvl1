import gameEngine from '../src/index.js';
import getRandomNumFromRange from '../src/utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGameObject = () => {
  const a = getRandomNumFromRange(10, 100);
  const b = getRandomNumFromRange(10, 100);
  const question = `${a} ${b}`;

  const findMaxCommonDivisor = (num1, num2) => {
    let result = 0;
    const minNum = Math.min(num1, num2);
    for (let i = 0; i <= minNum; i += 1) {
      if (a % i === 0 && b % i === 0) {
        result = i;
      }
    }
    return result.toString();
  };
  const correctAnswer = findMaxCommonDivisor(a, b);

  const game = { question, correctAnswer, rules };
  return game;
};

export default () => gameEngine(getGameObject);
