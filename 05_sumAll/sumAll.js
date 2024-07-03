const sumAll = function(NumA,NumB) {

    if (!Number.isInteger(NumA) || !Number.isInteger(NumB)) return "ERROR";
  if (NumA < 0 || NumB < 0) return "ERROR";
    let c = 0;
    
    if(NumA > NumB)
       {
            c = NumB;
            NumB = NumA;
            NumA = c;
            c = 0;
               
        }
    
    for(i = NumA; i <= NumB; i++)
        {
            c += i;
        }
    
        return c;


};

// Do not edit below this line
module.exports = sumAll;
