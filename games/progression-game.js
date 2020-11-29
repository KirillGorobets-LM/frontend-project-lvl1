export const rules = () => console.log('What number is missing in the progression?');
const getRandomPlace = () => Math.floor(Math.random() * (11 - 0));
const getRandomStep = () => Math.floor(Math.random() * (20 - 1));
const getRandomNum = () => Math.floor(Math.random() * (100 - 0));

export const question = () => {
  const startNum = getRandomNum();
  const array = [startNum];
  const step = getRandomStep();
  for (let i = 0; i < 9; i += 1) {
    array.push(array[i] + step);
  }
  array[getRandomPlace()] = '..';
  return `${array}`;
};

export const correctAnswer = (str) => {
  const arr = str.split(',');
  const place = arr.indexOf('..');
  let step = 0;
  let result = 0;
  if (place > 5) {
    step = arr[1] - arr[0];
    result = Number(arr[place - 1]) + step;
  } else {
    step = arr[arr.length - 1] - arr[arr.length - 2];
    result = Number(arr[place + 1]) - step;
  }
  return `${result}`;
};
export default rules;
