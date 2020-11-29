export const rules = () => console.log('What is the result of the expression?');
const operators = ['+', '-', '*'];
const getRandomNum = () => Math.floor(Math.random() * (100 - 10)) + 10;
const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];

export const question = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const op = getRandomOperator();
  return `${a} ${op} ${b}`;
};
// eslint-disable-next-line consistent-return
export const correctAnswer = (str) => {
  const array = str.split(' ');
  if (array[1] === '+') {
    return String(Number(array[0]) + Number(array[2]));
  }
  if (array[1] === '-') {
    return String(array[0] - array[2]);
  }
  if (array[1] === '*') {
    return String(array[0] * array[2]);
  }
};

export default rules;
