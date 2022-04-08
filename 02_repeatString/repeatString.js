const number = Math.floor(Math.random() * 1000);

function repeatString(string, times) {
    let repeatedString = "";
    while (times > 0) {
        repeatedString += string;
        times--;
    }
    if (times < 0) {
        repeatedString = "ERROR";
    }
    return repeatedString;
};

repeatString("", 3);

// Do not edit below this line
module.exports = repeatString;
