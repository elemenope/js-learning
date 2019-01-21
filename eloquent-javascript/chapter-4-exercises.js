/* 

ELOQUENT JAVASCRIPT CHAPTER 4: Solutions

Please note, I did not save the solutions to previous problems but wanted to for these because they were most helpful in learning. 

The following list is enumerated for reference to the solutions:

1. Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

2. Also write a listToArray function that produces an array from a list. 

3. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

4. If you haven’t already, also write a recursive version of nth. */

//DEMO: https://jsbin.com/yuxuparami/edit?js,console,output

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

function listToArray(obj){ 
  let arr = [];
  let i, objSearched;
  if (typeof obj !== "object"){
    return console.log("Please enter a valid object.");
  }
  for (i in obj){
    if (obj[i] == "[object Object]"){
    objSearched = obj[i];
    let keyVal = Object.keys(objSearched);
    let objVal = (keyVal[keyVal.length-1]);
     arr.push(objVal);
     while (objSearched.hasOwnProperty(objVal)){
        arr.push(Object.keys(objSearched)[0]);
        arr.push(Object.values(objSearched)[0]);
        arr.push(objVal);
        objSearched = objSearched[objVal];
     }
     arr.push(Object.keys(objSearched)[0]);
      arr.push(Object.values(objSearched)[0]);
    }
    else {
      arr.push(i);
      arr.push(obj[i]);
    }
  }
  return arr;
}

//BONUS: I made an additional function that turns it in to a list while looking for the property and list link.

function listToArrayWithKey(obj, prop, link){ 
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

//The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

//Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

//To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

//The Object.keys function will be useful when you need to go over the properties of objects to compare them.

//DEMO: https://jsbin.com/jazikuj/edit?js,console

function deepComparison(firstObject, secondObject){
  let i, j;
  firstObject = listToArray(firstObject).toString();
  secondObject = listToArray(secondObject).toString();
  console.log(firstObject);
  console.log(secondObject);
  if (firstObject == secondObject){
    return console.log("they're equal")
  }
  else {
    return console.log("they're not equal")
  }
}
