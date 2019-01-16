/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth. */

//https://jsbin.com/lalegizeya/edit?js,console,output


function arrayToList(arr){  
  let obj = null; 
  let i = arr.length;
  while (i--){ 
  obj = { 
    list: arr[i], 
    rest: obj 
    }
  } 
return (obj); 
} 


function listToArray(obj){ 
  let objSearched = obj.rest;
  let arr = [];
  arr.push(obj.num);
  while (objSearched.hasOwnProperty('rest')){
    arr.push(objSearched.num);
    objSearched = objSearched.rest;
    }
  arr.push(objSearched.num);
  return (arr);
}


function prepend(listOrArray,input){
 
  let arr = [];
  
  if(Array.isArray(listOrArray)){
    listOrArray.unshift(input);
    return console.log(arrayToList(listOrArray));
  }
  
  else if(listOrArray.toString() == "[object Object]"){
    let arr = listToArray(listOrArray);
    arr.unshift(input);
    return console.log(arrayToList(arr));
  }
  
  else {
    console.log("Please submit an array or an object.")
  }
  
  
}
