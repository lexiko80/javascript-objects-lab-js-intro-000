function updateObjectsWithKeyAndValue(object, key, value){
  newObj = Object.assign({}, object, {[key]:value})

  return newObj
}
