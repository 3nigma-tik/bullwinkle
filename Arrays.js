// let favoriteFoods = ["Pizza", "Pasta", "Enchiladas", "Burritos"];

// function foodFinder(findFood){
//     let value = findFood[0];
  
//     return value;
// }

// let result = foodFinder(favoriteFoods);
// console.log(result);





// function colorFinder(arrayOfColors){
//     let findColor = prompt("Guess my favorite color");

//     for(let i = 0; i < arrayOfColors.length; i++){
//         if(findColor === arrayOfColors[i]){
//             console.log("We found it! ")
//         }
//     }
// }
// let theColors = ["blue", "red", "white", "green", "yellow"];
// colorFinder(theColors);




let theNumbers = [10,3,4,90,34,56,23,100,200];
let total = 0;


function evenOrOdd(someArray){
for(let i = 0; i < someArray.length ; i++){
   total = total + someArray[i];
}
console.log(total);
if(total % 2){
    console.log("Even");
}
else{
    console.log("Odd");
}
}

evenOrOdd(theNumbers);



let thisArray = [10,3,4,90,34,56,23,100,200];


function bigNumbers(isItHigher){
    let magicNumber = 13;
    for(let i = 0; i < isItHigher.length; i++){
        if(isItHigher[i] < magicNumber){
            console.log(thisArray - isItHigher[i]);
        }
    }
}

bigNumbers(thisArray);