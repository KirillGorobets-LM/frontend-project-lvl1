import readlineSync from 'readline-sync';

const gameEngine = (getGameObject, userName) => {
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const { question, correctAnswer } = getGameObject();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer:');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
