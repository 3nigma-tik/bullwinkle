let destinations = [" seattle", " portland", " vancouver"];
let randomCity = Math.floor(Math.random() * destinations.length);
let diningSeattle = [" Altura ", " Dick's Burgers", " The Metropolitan Grill"];
let diningPortland = [" Bamboo Sushi", " BJ's Smokehouse", " Voodoo Doughnuts"];
let diningVancouver = [" Red Tuna ", "Forage ", "Blue Water Diner "];
let foodInSeattle = Math.floor(Math.random() * diningSeattle.length);
let foodInPortland = Math.floor(Math.random() * diningPortland.length);
let foodInVancouver = Math.floor(Math.random() * diningVancouver.length);
let wheels = [" honda", " cadillac,", " ferrari", "tesla"];
let carsForTrip = Math.floor(Math.random() * wheels.length);
let afterParty = [" Going to the movies", " Bowling", " Ice Skating", " going for a Walk"]
let endOfNight = Math.floor(Math.random() * afterParty.length);




while (true) {
    let userInput = prompt("Are you ready for our day trip? Enter 'yes' or 'no':");
	if (userInput === "yes"){
		console.log("great, we're going to " + destinations[randomCity]);
		break;
	}else if (userInput != "yes"){
		console.log("Then let me know when you are");
	}
}


while (true) {
    let cityInput = prompt("which city did you get?")
	if (cityInput === "seattle"){
		console.log("sounds good, looks like we are eating at " + diningSeattle[foodInSeattle]);
		break;
	}else if (cityInput === "portland"){
		console.log("sounds good, looks like we are eating at " + diningPortland[foodInPortland]);
        break;
	}else if (cityInput === "vancouver"){
        console.log("sounds good, looks like we are eating at " + diningVancouver[foodInVancouver])
        break;
    }
}




while (true) {
    let timeToDrive = prompt("do we need a car? 'yes' or 'no':")
	if (timeToDrive === "yes"){
		console.log("Well, hop in. We got a " + wheels[carsForTrip]);
		break;
    }else if (timeToDrive === "no"){
        console.log("Well, I guess we can just walk.");
        break;
    }    
}




while (true) {
    let entertainMe = prompt("Will there be after dinner plans? 'yes' or 'no':")
	if (entertainMe === "yes"){
		console.log("Cool let's try " + afterParty[endOfNight]);
		break;
	}else if (entertainMe === "no"){
        console.log("Let's call it a day!");
        break;
    }
}