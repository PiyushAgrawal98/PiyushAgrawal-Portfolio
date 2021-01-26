var readlineSync=require("readline-sync");
var score=0;
var userInput= readlineSync.question('What is your name? ')
console.log("Welcome"+userInput+"to the game")

function game(question,answer){
  var userInput=readlineSync(question);
  if(userInput===answer){
    console.log("Correct!");
    score+=1;
  }else{
    console.log("Ooops! Wrong");
  }
}
var obj1={
  question:"What do Piyush Do? ",
  answer: "Student",
}
var obj2={
  question:"Where do piyush live ?",
  answer:"kailaras"
}

var arr=[obj1,obj2];
for(var i=0;i<arr,length;i++){
  var currentLine=arr[i];
  game(currentLine.question,currentLine.answer);
}

