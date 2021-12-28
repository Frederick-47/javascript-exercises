const sumAll = function(num1, num2) {
    let list = []
    let result = 0

    if(num1 < 0 | num2 < 0){
        return "ERROR"
    }

    if(typeof(num1) == "string" | typeof(num2)== "string"){
        return "ERROR"
    }

    if(typeof(num1) == "object" | typeof(num2) == "object"){
        return "ERROR"
    }


    if(num1 < num2){
        
        for(let i = num1; i <= num2; i++){
            list.push(i)
        }
        
        for(i in list){
            result += list[i];
        }
        
        return result
    }
    
    if(num1 > num2){
        
        for(let i = num2; i <= num1; i++){
            list.push(i)
        }
        
        for(i in list){
            result += list[i];
        }
        
        return result
    }
    
    
};

console.log(sumAll(10, [90, 1]))

// Do not edit below this line
module.exports = sumAll;
