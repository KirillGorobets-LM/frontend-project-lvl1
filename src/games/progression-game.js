import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const rules = 'What number is missing in the progression?';

const getGameObject = () => {
  const startNum = getRandomNumFromRange(0, 100);
  const array = [];
  const countOfNumbers = 10;
  const step = getRandomNumFromRange(1, 20);
  const place = getRandomNumFromRange(0, (countOfNumbers - 1));

  for (let i = 0; i < countOfNumbers; i += 1) {
    array.push(startNum + step * i);
  }

  const correctAnswer = array[place].toString();
  array[place] = '..';
  const question = array.join(' ');

  const game = { question, correctAnswer };
  return game;
};

export default () => gameEngine(getGameObject, rules);
