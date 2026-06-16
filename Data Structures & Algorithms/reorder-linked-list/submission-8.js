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
     * @return {void}
     */
    reorderList(head) {
        if (!head) return;

        const nodeArr = []
        let curr = head

        while(curr) {
            nodeArr.push(curr)
            curr = curr.next
        }

         let i = 0
        let j = nodeArr.length - 1;
        while (i < j) {
            nodeArr[i].next = nodeArr[j];
            i++;
            if (i >= j) break;
            nodeArr[j].next = nodeArr[i];
            j--;
        }

        nodeArr[i].next = null
    }
}
