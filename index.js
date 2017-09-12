var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {}
   var newObj = Object.assign(obj, key, value);
  return obj;
}
