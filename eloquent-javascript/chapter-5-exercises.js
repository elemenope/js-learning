//1. Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the
//elements of the original arrays.

//SOLUTION:

let newArr = arr.reduce((accumulator, arr) => {
  return accumulator.concat(arr);
},[]);


//2. Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, 
//an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if 
//that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to 
//create a new value and starts from the beginning.

//When defining the function, you can use a regular loop to do the actual looping.

//DEMO: https://jsbin.com/cibokuwosu/edit?js,console


let loop = (inputArray, startingValue, endingValue) => {
    
  //TEST: Make sure the input array is an array, if not, turn it in to one or tell the user to enter an actual array.
  if (inputArray == '[object Object]'){
    inputArray = (Object.entries(inputArray).toString().split(',')); 
    console.log(inputArray);
    //Note to individual reading my code, I have a function in my repertoire that turns nested objects in to arrays in case this comes up. 
    } 
  else if (inputArray == 'string' || 'number'){
    inputArray = inputArray.toString();
    inputArray = inputArray.split('');
    }
  else {
    return console.log("Please enter a valid array, string, number, or object to run your test upon.")
  }
  
  //TEST: Make sure the starting/ending values are actual numbers
  
  if (typeof startingValue !== 'number'){
    return console.log("Please enter a valid number for the starting value.");
  }
  else if (typeof endingValue !== 'number'){
    return console.log("Please enter a valid number for the ending value.");
  }
  else if (typeof endingValue == 'number' && typeof startingValue == 'number'){
    while (startingValue > endingValue || startingValue < endingValue){
      newArr = inputArray.map(index => startingValue || index == startingValue || (startingValue === 0 && startingValue));//the test and body function
      startingValue > endingValue ? startingValue -= 1 : startingValue += 1;
      console.log(startingValue);
      console.log(newArr);
    }
  }
  else {
    console.log("What did you do? I'm impressed! Would you like a new job?")
  }

  newArr = inputArray.map(index => endingValue);
  return newArr;
}


//Analogous to the some method, arrays also have an every method. This one returns true when the given function 
//returns true for every element in the array. In a way, some is a version of the || operator that acts on 
//arrays, and every is like the && operator.

//Implement every as a function that takes an array and a predicate function as parameters. 
//Write two versions, one using a loop and one using the some method.

//DEMO: https://jsbin.com/feqebinigu/edit?js,console

let every = (array, testFunction) => {
  return arr.some(testFunction);
}


let everyLoop = (array, testFunction) => {
  let value = 0;
  for (let value in array){
    return testFunction(array[value]);
  }
}

//Write a function that computes the dominant writing direction in a string of text. Remember that 
//each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), 
//or "ttb" (top to bottom).

//The dominant direction is the direction of a majority of the characters that have a script associated with 
//them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

//DEMO: https://jsbin.com/geqopovupe/edit?js,console


function dominantDirection(text) {
  
  let unicodeCollection = text.split('').map(function(num){
    return num.charCodeAt(0);
  },0);
  
  let directionComparison = [];

  unicodeCollection.forEach((item) => {
    for (let key in SCRIPTS){
      for (let index in SCRIPTS[key].ranges){
        if (item >= (SCRIPTS[key].ranges[index][0]) && item <= (SCRIPTS[key].ranges[index][1])){
          directionComparison.push(SCRIPTS[key].direction);
        }
      }
    }
    return directionComparison;
  });

  let valueOfDirection = directionComparison.reduce((accumulator, currentValue) => { 
        currentValue in accumulator ? 
            accumulator[currentValue]++ : accumulator[currentValue] = 1;
        return accumulator;
    }, {});
  
  
  valueOfDirection = (Object.entries(valueOfDirection));
  
  while(valueOfDirection.length > 1){
    (valueOfDirection[0][1] > valueOfDirection[1][1]) ? valueOfDirection.splice(1, 1) : valueOfDirection.splice(0, 1);
  }
  
  return valueOfDirection[0][0];

}

console.log(dominantDirection("Hello!"));
// → ltr

console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
