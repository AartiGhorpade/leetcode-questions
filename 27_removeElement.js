var removeElement = function (nums, val) {
    let start = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums[start] = nums[i]
            start++
        }
    }
    return nums.slice(0, start)
};

console.log(removeElement([3, 2, 2, 3], 3))

module.exports = removeElement;
