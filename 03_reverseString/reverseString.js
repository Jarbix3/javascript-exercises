const reverseString = function(string) {
    let reverse = '',n = string.length;

    for(let i = 0; i <= n - 1; i++)
        {               
            reverse += string.charAt(n-(1+i));
        }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
