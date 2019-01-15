/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth. */

//https://jsbin.com/lalegizeya/edit?js,console,output


function arrayToList(){ 
  let arr = [4, 5, 3]; 
  let obj = null; 
  for (i = arr.length-1; i >= 0; i--){ 
  obj = { 
    list: arr[i], 
    rest: obj 
    }; 
  } 
return console.log(obj); 
} 
arrayToList();

var oak = { 
  num: 1,
    rest: {
      num: 4,
      rest: {
        num: 5,
          rest: {
            num: 7,
              rest: {
                num: 9,
                  rest: {
                    num: 1
                  }
              }
          }
      }
  }
}


function listToArray(){ 
  let obj = oak.rest;
  let arr = [];
  arr.push(oak.num);
  while (obj.hasOwnProperty('rest')){
    obj = obj.rest;
    arr.push(obj.num);
    }
  return console.log(arr + " this is the array");
}

listToArray();
