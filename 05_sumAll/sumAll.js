const sumAll = function(intStart, intEnd) {

    if(intStart < 0 || intEnd < 0 || !(Number.isInteger(intStart)) || !(Number.isInteger(intEnd)))
    {
        return "ERROR";
    }

    let sum = 0;
    if(intStart < intEnd)
    {
        for (let i = intStart; i <= intEnd; i++)
        {
            sum += i;
        }
    }
    else
    {
        for (let i = intEnd; i <= intStart; i++)
        {
            sum += i;
        }
    }

    return sum;
    

};

// Do not edit below this line
module.exports = sumAll;
