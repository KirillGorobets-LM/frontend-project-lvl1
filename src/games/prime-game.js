import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const primeCorrectAnswer = 'yes';
const notPrimeCorrectAnswer = 'no';
const rules = `Answer "${primeCorrectAnswer}" if given number is prime. Otherwise answer "${notPrimeCorrectAnswer}".`;

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
    correctAnswer = primeCorrectAnswer;
  } else {
    correctAnswer = notPrimeCorrectAnswer;
  }

  const game = { question: number, correctAnswer };
  return game;
};

export default () => gameEngine(getGameObject, rules);
