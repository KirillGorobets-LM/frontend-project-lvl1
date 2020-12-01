import { greeting } from '../src/cli.js';
import { gameEngine } from '../src/index.js';

const primeGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getRandomNum = () => Math.floor(Math.random() * (200 - 0));
  const getQuestionAndCorrectAnswer = () => {
    const a = getRandomNum();
    console.log(`Question: ${a}`);
    for (let i = 2; i < a; i += 1) {
      if (a % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  gameEngine(getQuestionAndCorrectAnswer, userName);
};
export default primeGame;
