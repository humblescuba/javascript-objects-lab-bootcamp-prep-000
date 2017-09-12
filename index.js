var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
  var newObj = Object.assign(obj, key, value);
  return obj;
}
