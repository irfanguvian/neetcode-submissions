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
     * @return {number}
     */
    maxDepth(root) {
        if(!root) {
            return 0
        }
        const dfsstack = [root]
        let currentDepth = 0
        while(dfsstack.length > 0) {
            const currentLength = dfsstack.length
            for(let i = 0 ; i < currentLength; i++) {
                const getTop = dfsstack.shift()
                if(getTop) {
                    if(getTop.left) {
                        dfsstack.push(getTop.left)
                    }

                    if(getTop.right) {
                        dfsstack.push(getTop.right)
                    }
                }
               
            }
            currentDepth++
        }

        return currentDepth
    }
}
