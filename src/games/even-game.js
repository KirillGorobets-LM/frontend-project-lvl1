import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const evenCorrectAnswer = 'yes';
const notEvenCorrectAnswer = 'no';
const task = `Answer "${evenCorrectAnswer}" if the number is even, otherwise answer "${notEvenCorrectAnswer}".`;

const isEven = (num) => num % 2 === 0;

const getGameObject = () => {
  const number = getRandomNumFromRange(10, 100);
  const correctAnswer = isEven(number) ? evenCorrectAnswer : notEvenCorrectAnswer;
  return { question: number, correctAnswer };
};

export default () => gameEngine(getGameObject, task);
