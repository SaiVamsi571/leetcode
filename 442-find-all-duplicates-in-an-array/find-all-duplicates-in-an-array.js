/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let arr = [];
    nums.forEach(i => {
        const x = Math.abs(i);
        if (nums[x - 1] < 0) {
            arr.push(x);
        }
        nums[x - 1] *= -1;
    })
    return arr;
};