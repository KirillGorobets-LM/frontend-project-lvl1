export const rules = () => console.log('Find the greatest common divisor of given numbers.');
const getRandomNum = () => Math.floor(Math.random() * (100 - 10)) + 10;

export const question = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  return `${a} ${b}`;
};
// eslint-disable-next-line consistent-return
export const correctAnswer = (str) => {
  const array = str.split(' ');
  let bigNum = 0;
  if (array[0] >= array[1]) {
    // eslint-disable-next-line prefer-destructuring
    bigNum = array[0];
  } else {
    // eslint-disable-next-line prefer-destructuring
    bigNum = array[1];
  }
  for (let i = bigNum; i >= 0; i -= 1) {
    if (array[0] % i === 0 && array[1] % i === 0) {
      return `${i}`;
    }
  }
};
export default rules;
