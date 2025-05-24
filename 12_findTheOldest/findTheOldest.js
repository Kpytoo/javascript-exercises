let getAge = (person) => {
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath;

    if(!death){ // If death is "undefined", then "!undefined" results in "true"
        death = new Date().getFullYear(); // Assign the current year to "death"
    } 

    return death - birth; 
};


const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        let oldestAge = getAge(oldest);
        let currentAge = getAge(current);
        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
