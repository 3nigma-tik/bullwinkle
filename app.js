let hoursWorked;
let payRate;
let overTimeMultiplier = 1.5;
let standardWeek = 40;
//overtimeisworked
//overtimepayrate
hoursWorked = prompt("how many hours did you work?");
payRate = prompt("what is your rate of pay?");

if(hoursWorked > standardWeek){
    let overtimehoursworked = hoursWorked - standardWeek;
    let overtimepayrate = payRate * overTimeMultiplier;
    let standardpay = standardWeek * payRate;
    let overtimepay = overtimehoursworked * overtimepayrate;
    payCheck = standardpay + overtimepay;
}
else{
    payCheck = hoursWorked * payRate;
}

console.log("your weekly paycheck is " + payCheck);





function areYouMarried(){
    let currentSpouse = promptFor("what is your person's name", autoValid);
  
    let hasASpouse = people.filter(function(spouseFinder){
      if(spouseFinder.currentSpouse === currentSpouse){
        return true;
      }
      else{
        return false;
      }
    })
    
    return hasASpouse;
  
  }
