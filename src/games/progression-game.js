import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const task = 'What number is missing in the progression?';
const countOfNumbers = 10;

const getProgression = (startNum, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const getGameObject = () => {
  const startNum = getRandomNumFromRange(0, 100);
  const step = getRandomNumFromRange(1, 20);
  const emptyIndex = getRandomNumFromRange(0, (countOfNumbers - 1));

  const progression = getProgression(startNum, step, countOfNumbers);
  const correctAnswer = progression[emptyIndex].toString();

  progression[emptyIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => gameEngine(getGameObject, task);
