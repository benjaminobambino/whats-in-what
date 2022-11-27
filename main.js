const {
  gerberGoodStartGentlePro,
  enfamilReguline,
  enfamilNutramigen,
  parentsChoiceSensitivity,
  gerberGoodStartGentleSoy,
  comfortsSoyBased,
  mamaBearSoy
} = require('./data');

const { compareIngredients, getPrimaryOrSecondary } = require('./helpers');

const allCompared = compareIngredients(mamaBearSoy, gerberGoodStartGentleSoy);

const primaryCompared = compareIngredients(
  getPrimaryOrSecondary(mamaBearSoy, 0),
  getPrimaryOrSecondary(gerberGoodStartGentleSoy, 0)
);

const secondaryCompared = compareIngredients(
  getPrimaryOrSecondary(mamaBearSoy, 1),
  getPrimaryOrSecondary(gerberGoodStartGentleSoy, 1)
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
