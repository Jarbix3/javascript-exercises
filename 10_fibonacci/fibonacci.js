const fibonacci = function(a) {
let b;

    if(typeof a !== 'number') {
        b = parseInt(a);
    } else {
        b = a;
    }
if(b == 0)return 0;
if(b < 0)return 'OOPS';

let prev= 1;
let secprev= 0;
for(i = 2; i <= b; i++ )
{
    let num = prev + secprev;
    secprev = prev;
    prev = num;
}
return prev;


};

// Do not edit below this line
module.exports = fibonacci;
