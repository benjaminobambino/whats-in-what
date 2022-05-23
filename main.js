const {
  gerberGoodStartGentlePro,
  enfamilReguline,
  enfamilNutramigen,
  parentsChoiceSensitivity,
  gerberGoodStartGentleSoy,
  comfortsSoyBased
} = require('./data');

const { compareIngredients, getPrimaryOrSecondary } = require('./helpers');

const allCompared = compareIngredients(
  comfortsSoyBased,
  gerberGoodStartGentleSoy
);

const primaryCompared = compareIngredients(
  getPrimaryOrSecondary(comfortsSoyBased, 0),
  getPrimaryOrSecondary(gerberGoodStartGentleSoy, 0)
);

const secondaryCompared = compareIngredients(
  getPrimaryOrSecondary(comfortsSoyBased, 1),
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
