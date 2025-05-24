const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

const palindromes = function (str) {
    let filteredString = str.toLowerCase().split("").filter(char => validCharacters.includes(char)).join("");
    let reversedString = filteredString.split("").reverse().join("");
    return (filteredString === reversedString);
};

// Do not edit below this line
module.exports = palindromes;
