const repeatString = function(string, number) {
    newNumber = Math.floor(number)
    if(number < 0){
        return "ERROR"
    }else {
        let newString = ""
        for(let i = 0; i < newNumber; i ++){
            newString += string
        }
        return newString
    }
    
};



// Do not edit below this line
module.exports = repeatString;
