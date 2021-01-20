var readlineSync = require('readline-sync');
const chalk = require('chalk');
var Score = 0 
//taking input form the user and showing some output
var userName = readlineSync.question('Hii!!what is your name?\n ');

console.log(chalk.green.bgBlack.bold('Welcome '+ userName.toUpperCase() + ' to this Quiz called \"HOW WELL DO YOU KNOW VAIBHAV"\!'))
console.log('-----------------------------')
console.log('Rules.\n1. every right answer will award you 1 points\n2. Choose any one correct option out of all the options\n3. there are total 5 questions.')
console.log('-----------------------------')

var Questions = [ 
  {
    question :  chalk.red('1. Where do he live?\n(a) Mumbai\n(b) Banglore\n(c) Ahemdabad\n(d) Srinagar\n'),
     
    answer : 'a'
  },
  {
    question : chalk.red('2. Vaibhav is vegetarian ?\n(a) NO \n(b) Hell no\n'),
    answer : 'b'
  },
  {
    question :  chalk.red('3. DO he  loves going to college? \n (a) NO \n (b) Hell no\n'),
    answer : 'b'
  },
  {
    question : chalk.red('4. What you think he will be most happy with ?\n a. living in woods with his own calisthenic park in front of his house. \n b. living in the the concrete jungle.\n '),
    answer : 'b'
  },
  {
    question :  chalk.red('5. Which would make him more happy\n a. car\n b. Bike\n c. Montra madrock\n d.Aeroplane\n '),
    answer : 'c'
  }
  
]
function solution(question , answer){
  var userQuestion = readlineSync.question(question);
  if (userQuestion ===answer){
    console.log('you are right!!');
    Score = Score + 1;
  }else{
    console.log('oops,you are wrong!!');
  }
  console.log('your score is', Score );
  console.log('-----------------------------') 
}

for(var i=0 ; i<Questions.length; i++){
  var currentQuestion = Questions[i];
  solution(currentQuestion.question , currentQuestion.answer);
}

console.log(chalk.black.bgWhite.bold("your final score is :"+ Score + "" ));

