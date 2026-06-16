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
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        const queue = [root]

        while(queue.length > 0) {
            const popQueue = queue.pop()
            if(popQueue) {            
                let temp = popQueue.left
                popQueue.left = popQueue.right
                popQueue.right = temp
                queue.push(...[popQueue.left, popQueue.right])
            }
        }
        
        return root
    }
}
