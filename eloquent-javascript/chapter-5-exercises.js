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
