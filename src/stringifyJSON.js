// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';

  if (typeof obj === 'string') {
    result = '"' + obj + '"';
  } else if (typeof obj === 'number') {
    result = obj.toString();
  } else if (typeof obj === 'boolean') {
    result += obj;
  } else if (obj === null) {
    result = 'null';
  } else if (Array.isArray(obj)) {
    result = '[';
    obj.forEach(function(element, index) {
      result += stringifyJSON(element);
      if (index < obj.length - 1) {
        result += ','; 
      }
    });
    result += ']';
  } else if (typeof obj === 'object') {
    result = '{';
    let keys = Object.keys(obj);
    let val = Object.values(obj);

    let noUnstringifiables = true;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === undefined || typeof val[i] === 'function') {
        noUnstringifiables = false;
      }
    }
    
    if (noUnstringifiables) {
      for (let i = 0; i < keys.length; i++) {
        result += '"' + keys[i] + '"' + ':' + stringifyJSON(val[i]);
        if (i < keys.length - 1) {
          result += ',';
        }
      }
    }
    result += '}';
  }
  return result;
};

/*
input: 
  string
  number (negative, decimals)
  booleans
  null
  arrays
  objects
output:
  all the values in string form
special cases rejected:
  undefined
  functions

strategy: check all the values using recursion against 
all the inputs possibilities


psuedocode:
  set if cases
    if obj is string
      add " " to string value
    if obj is number
      toString the number
    if obj is boolean
      use typeof to determine boolean
      return quoted? bool as string
    if obj is null
      using deep equality, return "null"
    if obj is arrays
      initialize string variable to '['
      use forEach method
        insert elements into var and join with comma
      end by joining ']'
    if obj is objects
      initialize string variable to '{'
      for var key in object
        join with key + ":" + stringifyJSON(value)
      finalize with '}'.  ***.join(', ')***
*/
