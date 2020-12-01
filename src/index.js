import readlineSync from 'readline-sync';

export const gameEngine = (getQuestionAndCorrectAnswer, userName) => {
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const ca = getQuestionAndCorrectAnswer();
    const answer = readlineSync.question('Your answer:');
    if (ca === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ca}'`);
      console.log(`Let's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
