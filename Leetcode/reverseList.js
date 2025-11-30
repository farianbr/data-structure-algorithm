/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let len = head.length
    let i = 0
    const res = []
    while(len--){
        res[i] = head[len]
        i++
    }
    return res
};

console.log(reverseList([1,2,3,4,5]));