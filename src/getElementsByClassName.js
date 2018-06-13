// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result;
  var node;
  //define result
  if (arguments[1] === undefined) {
    result = [];
  } else {
    result = arguments[1];
  }
  //define node
  //assumption: we are working with the correct node when using document.body
  if (arguments[2] === undefined) {
    node = document.body;
  } else {
    node = arguments[2];
  }
  // console.log('node: ', node.className);
  for (let i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes && node.className === className) {
      getElementsByClassName(className, result, node.childNodes[i]);
    
      }
    } 

  if(node.className === className) {
    result.push(node);  
  }

  return result.reverse();
};

/*
  input:
    array of html strings
  output:
    array with with element.(matching class name)

  strategy: 
    recurse through each level of html and return the 
      element.(class) when matching class name is found
*/