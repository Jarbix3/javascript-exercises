const repeatString = function(string,n) {
    
        let word = string;
    if(n > 0)  
       {
         for(let i = 0; i < n-1;i++)
            {
                word += string;
            }
        }
    else if(n == 0)
        {
            word = '';
            return word;
        }
    else return 'ERROR';
        
   
    return word;

};

// Do not edit below this line
module.exports = repeatString;
