/* eslint-disable import/prefer-default-export */
export const getRandomNumFromRange = (min, max) => {
  const num = Math.floor(Math.random() * (max + 1 - min)) + min;
  return num;
};
