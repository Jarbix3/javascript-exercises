const removeFromArray = function(arr,...remove) {
const newArray = [];
arr.forEach((item) => {
    if(!remove.includes(item)){
        newArray.push(item);
    }
});
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
