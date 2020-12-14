import gameEngine from '../index.js';
import { getRandomNumFromRange } from '../utils.js';

const primeCorrectAnswer = 'yes';
const notPrimeCorrectAnswer = 'no';
const task = `Answer "${primeCorrectAnswer}" if given number is prime. Otherwise answer "${notPrimeCorrectAnswer}".`;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameObject = () => {
  const number = getRandomNumFromRange(0, 200);
  const correctAnswer = isPrime(number) ? primeCorrectAnswer : notPrimeCorrectAnswer;

  return { question: number, correctAnswer };
};

export default () => gameEngine(getGameObject, task);
