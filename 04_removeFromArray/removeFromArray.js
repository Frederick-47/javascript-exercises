
const removeFromArray = function(list, val1, val2, val3, val4  ) {
    const length = list.length;
    const list2 = [val1, val2, val3, val4];

    for(let i = 0; i <= length; i++){
        let item2 = list.filter(item => item == list2[i])
        if(item2 == list2[i]){
            list.splice(list.indexOf(list2[i]),1)
        }
    }

    return list
    

    
};

console.log(removeFromArray([1, 2, 3, 4], 2, "coco"))




// Do not edit below this line
module.exports = removeFromArray;



