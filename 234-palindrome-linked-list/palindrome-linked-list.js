/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }

    let l = 0;
    let r = list.length - 1;

    while (l < r && list[l] === list[r]) {
        l++;
        r--;
    }
    return l >= r;

};