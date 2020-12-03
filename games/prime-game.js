import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';

const primeGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getRandomNum = () => Math.floor(Math.random() * (200 - 0));
  const getGameObject = () => {
    const question = getRandomNum();
    let correctAnswer = '';
    for (let i = 2; i < Math.sqrt(question); i += 1) {
      if (question % i === 0) {
        correctAnswer = 'no';
        break;
      }
      correctAnswer = 'yes';
    }
    const game = { question, correctAnswer };
    return game;
  };
  gameEngine(getGameObject, userName);
};
export default primeGame;
