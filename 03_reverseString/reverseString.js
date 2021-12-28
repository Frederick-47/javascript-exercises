const reverseString = function(str) {

    const array = [];
    let counter = 0;
    const reverseArray = [];
    let newWord = ""

    for (i in str ){
        array[i] = str[i];
        counter++
    }
    console.log(counter)

    for (let i = 0; i <= counter-1; i++){
        let newNumber = counter - i

        reverseArray[i] = array[newNumber - 1 ]
        newWord = newWord.concat(reverseArray[i])
    }
    return newWord

};

// Do not edit below this line
module.exports = reverseString;

