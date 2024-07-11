const findTheOldest = function(arr) {
    
    
    
    const oldest = arr.sort(function(a,b){
        if(typeof a.yearOfDeath !== 'number')
        {
            a.yearOfDeath = new Date().getFullYear();
                }
        else if(typeof b.yearOfDeath !== 'number')
        {
            b.yearOfDeath = new Date().getFullYear();
        }
        const personA = a.yearOfDeath - a.yearOfBirth;
        const personB = b.yearOfDeath - b.yearOfBirth;
        return personA > personB ? -1 : 1;

    });
return oldest[0];

}

// Do not edit below this line
module.exports = findTheOldest;
