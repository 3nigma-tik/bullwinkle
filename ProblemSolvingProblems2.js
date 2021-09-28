function perfectNumberFinder(thisNumber){
    let magicNumber = (thisNumber + '').split('').map((i) => { return Number(i); });
    let numberArray = [magicNumber[0], magicNumber[1]];
    let perfNum = Math.pow(numberArray[0], 2) + Math.pow(numberArray[1], 2);
    for(i = 0; i < magicNumber.length; i++){
        numberArray[0] + numberArray[1]
    };
    return perfNum;
}


let happyNumber = perfectNumberFinder(13);
console.log(happyNumber);







function optimusPrimeNumber(findPrime){
    if(findPrime < 2) {
        return false;
    }
    for (let i = 2; i < findPrime; i++){
        if (findPrime % i == 0){
            return false;
        }
    }
    return true;
}
    optimusPrimeNumber(100);

    for( let i = 0; i < 100; i++){
        if(optimusPrimeNumber(i)){
            console.log(i);
        }
    }



// figure out how to return current number to function and 
// add it together with new number(next number)
function fibonacci(addUp){
    if(addUp <= 2) return 1;

    let fibSum = 1, fibAnswer = 1;
    for(let i = 3; i <= addUp; i++){ 
        let thatsIt = fibSum + fibAnswer     
        fibSum = fibAnswer;
        fibAnswer = thatsIt;
        console.log(fibAnswer);
    }
    return fibAnswer;
}

 console.log(fibonacci(40));