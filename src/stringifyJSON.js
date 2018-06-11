// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  let result = '';

  if (obj === undefined) {
  //do nothing
  }
  if (typeof obj === 'function') {
  //do nothing
  }


  if (typeof obj === 'string') {
    result =  '"' + obj + '"';
  }
  if (typeof obj === 'number') {
    result = obj.toString();
  }
  if (typeof obj === 'boolean') {
    result = '"' + obj + '"';
  }
  if (obj === null) {
    result = 'null';
  }
  if (Array.isArray(obj)) {
    result = '[';
    obj.forEach(function(element) {
      result = result + stringifyJSON(element); 
    }
    // + ']' //join with comma
  }

  if (typeof obj === 'object') {
  }

return result;
//input: 
  //string
  //number (negative, decimals)
  //booleans
  //null
  //arrays
  //objects
//output:
  //all the values in string form
//special cases rejected:
  //undefined
  //functions

/*strategy: check all the values using recursion against 
all the inputs possibilities
*/

//psuedocode:
  //set if cases
    //if obj is string
      //add " " to string value
    //if obj is number
      //toString the number
    //if obj is boolean
      //use typeof to determine boolean
      //return quoted? bool as string
    //if obj is null
      //using deep equality, return "null"
    //if obj is arrays
      //initialize string variable to '['
      //use forEach method
        //insert elements into var and join with comma
      //end by joining ']'
    //if obj is objects
      //initialize string variable to '{'
      //for var key in object
        //join with key + ":" + stringifyJSON(value)
      //finalize with '}'.  ***.join(', ')***
};
