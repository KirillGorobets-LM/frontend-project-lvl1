const getRandomNumFromRange = (min, max) => {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};
export default getRandomNumFromRange;
