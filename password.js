console.log("Welcome to the password validator tool")

const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.question("Enter your password \n", function(input){
	
    if (input.length >= 10){
        console.log("success")
    } else {
        console.log("fail")
    }
    reader.close()
	
});