const {
  gerberGoodStartGentlePro,
  enfamilReguline,
  enfamilNutramigen,
  parentsChoiceSensitivity
} = require('./data');

const {
  compareIngredients,
  getPrimaryOrSecondary
} = require('./helpers/compareIngredients');

const allCompared = compareIngredients(
  gerberGoodStartGentlePro,
  enfamilNutramigen
);

const primaryCompared = compareIngredients(
  getPrimaryOrSecondary(gerberGoodStartGentlePro, 0),
  getPrimaryOrSecondary(enfamilNutramigen, 0)
);

const secondaryCompared = compareIngredients(
  getPrimaryOrSecondary(gerberGoodStartGentlePro, 1),
  getPrimaryOrSecondary(enfamilNutramigen, 1)
);

console.log(
  'ALL INGREDIENTS:',
  allCompared,
  '\n\n',
  'PRIMARY INGREDIENTS:',
  primaryCompared,
  '\n\n',
  'SECONDARY INGREDIENTS:',
  secondaryCompared
);
