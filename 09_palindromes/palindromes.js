const palindromes = function (str) {
    const valid = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const arr = str 
    
    .toLowerCase()
    .split('')
    .filter((char) => valid.includes(char))
    .join('');

    const reverse = arr.split('').reverse().join('');

    return reverse == arr;
    
};

// Do not edit below this line
module.exports = palindromes;
