function sumAll(x, y) {
    let finalSum = 0;
    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";
    if (x > y) {
        for (let j = y; j <= x; j++) {
        finalSum = finalSum + j;
        }
        return finalSum;
    } else if (x < y) {
        for (let i = x; i <= y; i++) {
            finalSum = finalSum + i;
        }
        return finalSum;
    }
};

sumAll(-10, 4);

// Do not edit below this line
module.exports = sumAll;
