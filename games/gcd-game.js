import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';

const gcdGame = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const getRandomNum = () => Math.floor(Math.random() * (100 - 10)) + 10;
  // eslint-disable-next-line consistent-return
  const getQuestionAndCorrectAnser = () => {
    const a = getRandomNum();
    const b = getRandomNum();
    console.log(`Question: ${a} ${b}`);
    let bigNum = 0;
    if (a >= b) {
      bigNum = a;
    } else {
      bigNum = b;
    }
    for (let i = bigNum; i >= 0; i -= 1) {
      if (a % i === 0 && b % i === 0) {
        return `${i}`;
      }
    }
  };
  gameEngine(getQuestionAndCorrectAnser, userName);
};
export default gcdGame;
