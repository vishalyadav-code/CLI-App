var readlineSync = require ('readline-sync');
var chalk = require('chalk');
var score=0;

var name=chalk.bold("WHat is your name ? ");
var username = readlineSync.question(name);
var upper = username.toUpperCase();
console.log("Welcome ",chalk.cyanBright(upper),"to 'General Question Quiz'");
console.log("\n")
console.log("You can type option as your answer as well as you can also type the answer, Quiz starts from here: \n");





function play(answer,anotherAnswer)
 {
   console.log();
   var userAnswer = readlineSync.question("Answer?: ");
   var res = userAnswer.toLowerCase();
   

   if((res == answer)||(res == anotherAnswer))
   {
     console.log(chalk.bold('Yeah !!'),'You are right man!!')
     score= score+1;
     console.log(chalk.magentaBright.bold("Current score:"),chalk.cyanBright(score));
     console.log(" ")
   }
   else
   {
     console.log(chalk.bold("OOPS!!!,You are wrong bhidu!!!"));
     console.log(" The Right answer is:",chalk.bold(anotherAnswer));
     score= score-1;
     console.log(chalk.magentaBright.bold("Current score:"),chalk.cyanBright(score));
     console.log(" ")
    }
 }


var array =[
  {
  question:" In the JavaScript, which one of the following is not considered as an error:\na = Syntax error\nb = Missing of semicolons\nc = Division by zero\nd = Missing of Bracket",
  answer:"c",
  answerTwo:"Division by zero"
},
{
  question:"What does the command prompt uses?\na = GUI\nb = CLI\nc = TUI\nd = None of the above",
  answer:"b",
  answerTwo:"cli"
},
{
  question:"Which of the following number object function returns the value of the number?\na = toString()\nb = valueOf()\nc = toLocaleString()\nd = toPrecision()",
  answer:"b",
  answerTwo:"valueOf()"
},
{
  question:"In which Year did Java developed?\na = 1992\nb = 1993\nc = 1994\nd = 1995",
  answer:"d",
  answerTwo:"1995"
},
{
question: "Which one of the following is an ternary operator:\na = ?\nb = :\nc = -\nd = +",
answer: "a",
answerTwo:"?"

},
{ question:"Which one of the following operator returns false if both values are equal?\na = !\nb = !==\nc = !=\nd = All of the above",
answer:"c",
answerTwo:"!="
},
{
 question:"In a case, where the value of the operator is NULL , the typeof returned by the unary operator is\na = undefined\nb = string\nc = boolean\nd = object" ,
 answer:"d",
 answerTwo:"object"
},
{ question: "Which one of the following is not a keyword:\na = if\nb = with\nc = debugger\nd = Use strict",
answer:"d",
answerTwo:"Use strict"

},

{
  question:"Which is more older Python or Java?\na = Python\nb = Java ",
  answer:"a",
  answerTwo:"python"
},
{
  question: "In JavaScript, what will be used for calling the function definition expression:\na = Function prototype\nb = Function literal\nc = Function calling\nd = Function declaration",
  answer:"b",
  answerTwo:"Function literal"
}
];
for(var i=0;i<array.length;i++)
{
  console.log("Ques",(i+1),':', chalk.bold(array[i].question));
  play(array[i].answer, array[i].answerTwo);
} 
console.log(chalk.bold("\n\t Your Final score is:"),chalk.cyanBright(score));

if(score==10)
{
  console.log(chalk.bold("\nCongrats you got Full Score, You have very high Knowledge Share it!!!"));
}
else {
  if((score==8)||(score==9))
  {
    console.log("\tYou score good!!,Congrats");
  }
  else{
    if((score>=5)&&(score<8))
    {
    console.log("You score is average, Keep it Up!!");
   }
   else
   {
     console.log("You are below average,Blown up Hard!!");
   }

  }
}