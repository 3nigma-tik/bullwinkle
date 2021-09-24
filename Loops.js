for(i = 0; i < 5; i++){
	console.log("hello");
}

for(let i = 0; i < 11; i++){
	console.log(i);
}


for(let i = 10; i > 0; i--){
	console.log(i);
}


let enterText = prompt("Want to know where you should go to school?");
let answerQuestion = 0 + 1;

for(i = 0; i < answerQuestion; i++){
	console.log("devCodeCamp");
}


let teamName = "Packers";

for( i = 0; i < teamName.length; i++){
    console.log(teamName[i]);
}


let numberOfGreetings = 1

while(numberOfGreetings < 6){
	console.log("hello");
	numberOfGreetings++;
}


let password;

while (true) {
	password =  prompt("please enter your password:");
	if (password === "Badpassword1"){
		console.log("User Validated");
		break;
	}else if (password != "Badpassword1"){
		console.log("That is incorrect");
	}
}


for(i = 0; i < 100; i++){
	console.log(i);
} if(i % 3){
	console.log("fizz")
}


