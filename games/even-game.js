import { greeting } from '../src/cli.js';
import { gameEngine } from '../src/index.js';

const evenGame = () => {
  const userName = greeting();
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  const getQuestionAndCorrectAnswer = () => {
    const question = Math.floor(Math.random() * (100 - 10)) + 10;
    console.log(`Question: ${question}`);
    if (question % 2 === 0) {
      return 'yes';
    } return 'no';
  };
  gameEngine(getQuestionAndCorrectAnswer, userName);
};
export default evenGame;
