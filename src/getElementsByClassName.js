// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result;
  var node;

  var cheat;
  if (arguments[3] === undefined) {
    cheat = 0;
  } else {
    cheat = arguments[3];
  }



  
  if (arguments[1] === undefined) {
    result = [];
  } else {
    result = arguments[1];
  }

  if (arguments[2] === undefined) {
    node = document.body;
  } else {
    node = arguments[2];
  }

  console.log('node: ', cheat, node);
  
  for (let i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes.length > 1) {
    //somehow get currentNode
      cheat++;
      getElementsByClassName(className, result, node.childNodes[i], cheat);
    } else {
      // console.log($('.class'))

      if ($('.targetClassName') === className) {
        console.log('you have a match*********');
   
      // console.log('1', node.childNodes[i]);
      // console.log('2', node.childNodes);
      // console.log('3', node);
      }
    // if (node.childNodes[i] === className)
    //check if equal to targe. if yes, push into result array
      // result.push()
    }
  }
  return result;
 
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