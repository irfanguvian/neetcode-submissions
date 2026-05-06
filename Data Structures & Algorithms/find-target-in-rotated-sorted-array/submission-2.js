class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while(left <= right) {
            if(nums[left] == target) {
                return left
            } else if (nums[right] == target) {
                return right
            } 

            const diffLeft = Math.abs(target - nums[left])
            const diffRight = Math.abs(target - nums[right])

            if(diffLeft < diffRight) {
                left++
            } else {
                right--
            }
        }
        return -1
    }
}
