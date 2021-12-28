const leapYears = function(year) {

    let leapyear = false;

    if(year % 400 == 0){
        leapyear = true;
    }

    if(year % 4 == 0 & year % 100 != 0){
        leapyear = true;
    }
    return leapyear
};

console.log(leapYears(1996))

// Do not edit below this line
module.exports = leapYears;
