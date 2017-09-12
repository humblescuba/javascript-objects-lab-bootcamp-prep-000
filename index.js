var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipesPlus = Object.assign({}, key, value);
  return recipesPlus;
}
