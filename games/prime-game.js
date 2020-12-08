import gameEngine from '../src/index.js';
import getRandomNumFromRange from '../src/utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameObject = () => {
  const number = getRandomNumFromRange(0, 200);
  let correctAnswer = '';

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  const game = { question: number, correctAnswer };
  return game;
};

export default () => gameEngine(getGameObject, rules);
