var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = object;
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = object;
  obj[key] = value;
  return obj;
}