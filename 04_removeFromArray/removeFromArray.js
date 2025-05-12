


const removeFromArray = function(array, ...otherArgs) {
    
    for(let i = 0; i < otherArgs.length; i++)
    {
        array = array.filter(item => item !== otherArgs[i]);
    }

    console.log(array)
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
