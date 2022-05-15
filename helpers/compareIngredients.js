const compareIngredients = (stringOne, stringTwo) => {
  const foodOne = stringOne.split(', ');
  const foodTwo = stringTwo.split(', ');
  const sharedIngredients = [];
  foodOne.sort();
  foodTwo.sort();

  for (let oneIndex = 0; oneIndex < foodOne.length; oneIndex++) {
    let oneIngredient = foodOne[oneIndex].toUpperCase();
    for (let twoIndex = 0; twoIndex < foodTwo.length; twoIndex++) {
      let twoIngredient = foodTwo[twoIndex].toUpperCase();
      if (oneIngredient === twoIngredient) {
        sharedIngredients.push(foodOne[oneIndex]);
        foodOne.splice(oneIndex, 1);
        oneIndex--;
        foodTwo.splice(twoIndex, 1);
        twoIndex--;
        break;
      }
    }
  }

  const comparisonData = {
    uniqueToFirst: foodOne,
    uniqueToSecond: foodTwo,
    sharedIngredients: sharedIngredients
  };

  return comparisonData;
};

module.exports = {
  compareIngredients
};
