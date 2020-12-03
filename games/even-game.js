import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';
import getRandomNumFromRange from '../src/utils.js';

const evenGame = () => {
  const userName = greeting();
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  const getGameObject = () => {
    const question = getRandomNumFromRange(10, 100);
    let correctAnswer = '';
    const isEven = (num) => {
      if (num % 2 === 0) {
        return true;
      }
      return false;
    };
    if (isEven(question)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const game = { question, correctAnswer };
    return game;
  };
  gameEngine(getGameObject, userName);
};
export default evenGame;
