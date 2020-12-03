import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';

const gcdGame = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const getRandomNum = () => Math.floor(Math.random() * (100 - 10)) + 10;
  const getGameObject = () => {
    const a = getRandomNum();
    const b = getRandomNum();
    const question = `${a} ${b}`;
    let correctAnswer = '';
    const bigNum = Math.max(a, b);
    for (let i = bigNum; i >= 0; i -= 1) {
      if (a % i === 0 && b % i === 0) {
        correctAnswer = i.toString();
        break;
      }
    }
    const game = { question, correctAnswer };
    return game;
  };
  gameEngine(getGameObject, userName);
};
export default gcdGame;
