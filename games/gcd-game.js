import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';
import getRandomNumFromRange from '../src/utils.js';

const gcdGame = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const getGameObject = () => {
    const a = getRandomNumFromRange(10, 100);
    const b = getRandomNumFromRange(10, 100);
    const question = `${a} ${b}`;
    let correctAnswer = '';
    const findMaxCommonDivisor = (num1, num2) => {
      let result = 0;
      const bigNum = Math.max(num1, num2);
      for (let i = bigNum; i >= 0; i -= 1) {
        if (a % i === 0 && b % i === 0) {
          result = i;
          break;
        }
      }
      return result.toString();
    };
    correctAnswer = findMaxCommonDivisor(a, b);
    const game = { question, correctAnswer };
    console.log(game);
    return game;
  };
  gameEngine(getGameObject, userName);
};
export default gcdGame;
