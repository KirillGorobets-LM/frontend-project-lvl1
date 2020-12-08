import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const evenCorrectAnswer = 'yes';
const notEvenCorrectAnswer = 'no';
const rules = `Answer "${evenCorrectAnswer}" if the number is even, otherwise answer "${notEvenCorrectAnswer}".`;

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
    correctAnswer = evenCorrectAnswer;
  } else {
    correctAnswer = notEvenCorrectAnswer;
  }
  const game = { question: number, correctAnswer };
  return game;
};

export default () => gameEngine(getGameObject, rules);
