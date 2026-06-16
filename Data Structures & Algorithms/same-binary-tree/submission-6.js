/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(p == q) {
            return true
        }

        const queue1 = [p]
        const queue2 = [q]

        while(queue1.length) {
            const getItem1 = queue1.pop()
            const getItem2 = queue2.pop()

            if(getItem1 != null && getItem2 != null) {
                if(getItem1.val != getItem2.val) {
                    return false
                }

                queue1.push(...[getItem1.left, getItem1.right])
                queue2.push(...[getItem2.left, getItem2.right])
            } else if (getItem1 == null && getItem2 == null) {
                continue
            } else if (getItem1 == null || getItem2 == null) {
                return false
            }
        }

        return true
    }
}
