console.log("Welcome to the password validator tool")

const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.question("Enter your password", function(input){
	const tokens = input;
	
	const num0 = tokens[0];
	const num1 = tokens[1];
	const num2 = tokens[2];
	const num3 = tokens[3];
    const num4 = tokens[4];
	const num5 = tokens[5];
	const num6 = tokens[6];
	const num7 = tokens[7];
    const num8 = tokens[8];
    const num9 = tokens[9];
    const num10 = tokens[10];

    if (input.length >= 10){
        console.log("success")
    } else {
        console.log("fail")
    }
    reader.close()
	
});