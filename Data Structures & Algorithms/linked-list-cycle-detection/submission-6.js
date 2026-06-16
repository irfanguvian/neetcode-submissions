/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const newMap = new Map()

        let curr = head

        while(curr) {
            if(newMap.has(curr)){
                return true
            }
            newMap.set(curr, curr)
            curr = curr.next
        }

        return false
    }
}
