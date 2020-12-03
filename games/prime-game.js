import greeting from '../src/cli.js';
import gameEngine from '../src/index.js';
import getRandomNumFromRange from '../src/utils.js';

const primeGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getGameObject = () => {
    const question = getRandomNumFromRange(0, 200);
    let correctAnswer = '';
    const isPrime = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (question % i === 0) {
          return false;
        }
      }
      return true;
    };
    if (isPrime(question)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const game = { question, correctAnswer };
    return game;
  };
  gameEngine(getGameObject, userName);
};
export default primeGame;
