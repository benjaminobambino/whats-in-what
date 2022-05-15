const getPrimaryOrSecondary = (food, index) => {
  const primSecDivided = food.split('LESS THAN');
  return primSecDivided[index];
};

module.exports = {
  getPrimaryOrSecondary
};
