var lengthOfLastWord = function (s) {
    let lastWord = s.trim().split(' ').pop()
    return lastWord.length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
