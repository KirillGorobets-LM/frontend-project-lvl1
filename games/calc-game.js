export const rules = () => console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
export const question = () => Math.floor(Math.random() * (100 - 10)) + 10;
export const correctAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};
export default rules;
