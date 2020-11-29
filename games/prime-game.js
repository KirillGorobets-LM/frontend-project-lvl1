export const rules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const getRandomNum = () => Math.floor(Math.random() * (200 - 0));

export const question = () => {
  const number = getRandomNum();
  return `${number}`;
};

export const correctAnswer = (str) => {
  const num = Number(str);
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
export default rules;
