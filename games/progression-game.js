import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';

const progressionGame = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const getRandomPlace = () => Math.floor(Math.random() * (11 - 0));
  const getRandomStep = () => Math.floor(Math.random() * (20 - 1));
  const getRandomNum = () => Math.floor(Math.random() * (100 - 0));
  const getGameObject = () => {
    const startNum = getRandomNum();
    const array = [];
    const countOfNumbers = 10;
    const step = getRandomStep();
    const place = getRandomPlace();
    for (let i = 0; i < countOfNumbers; i += 1) {
      array.push(startNum + step * i);
    }
    const correctAnswer = (array[place]).toString();
    array[place] = '..';
    const question = `${array.join(' ')}`;
    const game = { question, correctAnswer };
    return game;
  };
  gameEngine(getGameObject, userName);
};
export default progressionGame;
