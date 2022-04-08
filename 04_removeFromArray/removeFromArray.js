const array = [1, 2, 3];

function removeFromArray(array, ...args) {
    return array.filter(x => !args.includes(x));
};

removeFromArray(array, "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
