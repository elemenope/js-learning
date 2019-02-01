//My solution to this challenge was to utilize closures to create a function that would log the user's name and profession in response to arguments given.
//DEMO:https://jsbin.com/zojalosobi/edit?js,console

function interviewQuestion(job){
    return function(name){
      if (job === "designer"){
        console.log(name + ', can you please explain what UX design is?')
      }
      else if (job === "teacher"){
      console.log("What subject do you teach, " + name + '?');
      }
      else {
      console.log("Hello " + name + ", what do you do?")
    }
  }
}

interviewQuestion('designer')('hannah');
