import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';

const progressionGame = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const getRandomPlace = () => Math.floor(Math.random() * (11 - 0));
  const getRandomStep = () => Math.floor(Math.random() * (20 - 1));
  const getRandomNum = () => Math.floor(Math.random() * (100 - 0));
  const getQuestionAndCorrectAnswer = () => {
    const startNum = getRandomNum();
    const array = [startNum];
    const countOfNumbers = 10;
    const step = getRandomStep();
    for (let i = 0; i < countOfNumbers - 1; i += 1) {
      array.push(array[i] + step);
    }
    array[getRandomPlace()] = '..';
    console.log(`Question: ${array.join(' ')}`);
    const place = array.indexOf('..');
    let result = 0;
    if (place > 5) {
      result = Number(array[place - 1]) + step;
    } else {
      result = Number(array[place + 1]) - step;
    }
    return `${result}`;
  };
  gameEngine(getQuestionAndCorrectAnswer, userName);
};
export default progressionGame;
