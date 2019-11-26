function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]:value})

  return newObj
}

var destructivelyUpdateObjectWithKeyAndValue = ()=>(object, key, value){
  return object[key]=value
}
