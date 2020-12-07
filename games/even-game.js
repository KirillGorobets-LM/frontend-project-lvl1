import gameEngine from '../src/index.js';
import getRandomNumFromRange from '../src/utils.js';

const rules = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const getGameObject = () => {
  const number = getRandomNumFromRange(10, 100);
  let correctAnswer = '';

  const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };
  if (isEven(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const game = { question: number, correctAnswer, rules };
  return game;
};

export default () => gameEngine(getGameObject);
