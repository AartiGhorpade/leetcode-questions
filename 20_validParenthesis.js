var isValid = function (s) {
    let arr = [];

    let myObj = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of s) {

        if (char === "(" || char === "{" || char === "[") {
            arr.push(char);
        }

        else {
            if (arr.pop() !== myObj[char]) {
                return false;
            }
        }
    }

    return arr.length == 0;
};

console.log(isValid('()[]{}'));

