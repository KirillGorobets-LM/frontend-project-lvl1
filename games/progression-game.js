import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';
import getRandomNumFromRange from '../src/utils.js';

const progressionGame = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const getGameObject = () => {
    const startNum = getRandomNumFromRange(0, 100);
    const array = [];
    const countOfNumbers = 10;
    const step = getRandomNumFromRange(1, 20);
    const place = getRandomNumFromRange(0, 10);
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
