
function turnAround(wordInput){
    let backWords = wordInput;
for(i = wordInput.length - 1; i >= 0; i--) {
    backWords += wordInput[i];
}
return backWords - wordInput;
}

turnAround("flipword");



// take in a string and capitalize the first letters of each word



function correctCapitals(upperCase){
    let bothWords = upperCase.split(" ");
    let capitalizedWords = [];

    for(let i = 0; i  < bothWords.length; i++){
        capitalizedWords.push(bothWords[i].charAt(0).toUpperCase() + bothWords[i].slice(1))
    };
    return capitalizedWords.join("");
}

correctCapitals("cole blackwood");



function compressMessage(gibberish){
    let letterCount = "";
    let gibberishWord = gibberish.split("");
    for (let i = 0; i < gibberishWord.length; i++){
        let counter = 1
        let currentLetter = gibberishWord[i]
        while (i < gibberishWord.length - 1 && gibberishWord[i] === gibberishWord[i + 1]){
            counter++
            i++
        }
        if(counter === 1){
            letterCount += currentLetter
        }else{
            letterCount += currentLetter + counter
        }
    }
    return letterCount;
}

compressMessage("nsdjunhfpsdnifpijsndpindsf");
