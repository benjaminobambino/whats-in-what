const getPrimaryOrSecondary = (food, index) => {
  const primSecDivided = food.split('LESS THAN 2%');
  return primSecDivided[index];
};

module.exports = {
  getPrimaryOrSecondary
};
