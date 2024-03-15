/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length;

    const p = new Array(n).fill(1);
    const s = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        p[i] = p[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        s[i] = s[i + 1] * nums[i + 1];
    }

    const a = [];
    for (let i = 0; i < n; i++) {
        a[i] = p[i] * s[i];
    }
    return a;
};