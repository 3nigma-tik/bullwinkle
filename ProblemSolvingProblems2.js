function perfectNumberFinder(thisNumber){
    let magicNumber = thisNumber.split(" ");
    let numberArray = []
    for(i = 0; i < magicNumber.length; i++){
        (Math.sqrt(numberArray[1])) + Math.sqrt(numberArray[2])
    };
    return numberArray;
}

let sum = perfectNumberFinder(parseInt(19));
console.log(sum);






function splitToDigit(n){
    return (n + '').split('').map((i) => { return Number(i); })
  }
  
  console.log(splitToDigit(100))