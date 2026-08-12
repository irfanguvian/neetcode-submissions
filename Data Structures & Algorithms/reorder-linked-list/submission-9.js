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
        let listOfNodes = []
        let current = head
        while(current) {
            listOfNodes.push(current)
            current = current.next
        }

        let left = 0
        let right = listOfNodes.length - 1
        while(left < right) {      
            listOfNodes[left].next = listOfNodes[right]
            left++
            if (left >= right) break;
            listOfNodes[right].next = listOfNodes[left]
            right--
        }
        listOfNodes[left].next = null
    }
}
