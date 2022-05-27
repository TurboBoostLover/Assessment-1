console.log("Welcome to the password validator tool")

const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.question("Enter your password \n", function(input){
	
    if (input.length >= 10 && /\d/.test(input)){
        console.log("success")
    } else if (input.length < 10){
        console.log("fail")
    } else if (!/\d/.test(input)){
        console.log("bad password, need a number")
    }
    reader.close()
	
});