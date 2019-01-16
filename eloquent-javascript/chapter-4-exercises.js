/* 

ELOQUENT JAVASCRIPT CHAPTER 4: Solutions

Please note, I did not save the solutions to previous problems but wanted to for these because they were most helpful in learning. 

The following list is enumerated for reference to the solutions:

1. Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

2. Also write a listToArray function that produces an array from a list. 

3. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

4. If you haven’t already, also write a recursive version of nth. */

//https://jsbin.com/yuxuparami/edit?js,console,output

//SOLUTION 1

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

//SOLUTION 2

function listToArray(obj, prop, link){ 
  if (typeof obj !== "object"){
    return console.log("Please enter a valid object.")
  }
  let objSearched = obj[link];
  let arr = [];
  arr.push(obj[prop]);
  while (objSearched.hasOwnProperty(link)){
    arr.push(objSearched[prop]);
    objSearched = objSearched[link];
    }
  arr.push(objSearched[prop]);
  return console.log(arr);
}

//SOLUTION 3

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

//SOLUTION 4

function nth(listOrArray, input){
  
  let i = 0;
  let x;
  
  if(Array.isArray(listOrArray)){
    while (i < listOrArray.length){
      if (input == listOrArray[i]){
        x = i;
        return console.log(input + " is at position " + x);
      }
      i++;
    }
    return console.log(x);
  }
  
  else if(listOrArray.toString() == "[object Object]"){
    listOrArray = listToArray(listOrArray);
    return nth(listOrArray, input);
  }
  
  else {
    console.log("Please submit an array or an object.")
  }
  
  return console.log(x + " is x")
  
}

//Note to self: I should probably make a universal function that validates function parameter types before trying to run them and lets the user know they aren't gonna work!

//Bonus: I found this baby helpful, it checks for the existence of a nested object within an object:

function objHasNested(obj){
  let key;
  for (key in obj){
    if (obj[key] == "[object Object]"){
      console.log(key);
    }
  }
}
