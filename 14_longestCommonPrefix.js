var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return

    strs.sort();
    let commonPref = ""
    let first = strs[0].split('')
    let last = strs[strs.length - 1].split('')

    for (let i = 0; i <= first.length; i++) {
        if (last[i] == first[i]) {
            commonPref += first[i]
        }
    }
    return commonPref

};

console.log(longestCommonPrefix(["floower", "flog", "floor"]));
