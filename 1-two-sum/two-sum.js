/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    let fin;
    nums.forEach((i, v) => {
        const diff = target - i;
        if (map[diff] > -1) {
            fin = [map[diff], v]
        } else {
            map[i] = v;
        }
    });
    return fin
};