import readlineSync from 'readline-sync';

export const gameEngine = (question, correctAnswer, nameOfUser) => {
  for (let i = 0; i < 3; i += 1) {
    const a = question();
    console.log(`Question: ${a}`);
    const answer = readlineSync.question('Your answer:');
    if (correctAnswer(a) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(a)}'`);
      console.log(`Let\`s try again ${nameOfUser}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${nameOfUser}!`);
};
export default gameEngine;
