const repeatString = function(stringInput, numberInput) { 
    let string = "";
    for (let i = 0; i < numberInput; i++)
    {
        string = string + stringInput;
    }
    if (numberInput < 0)
    {
        return "ERROR";
    }
    else
    {
        return string;  
    }
    

};

// Do not edit below this line
module.exports = repeatString;
