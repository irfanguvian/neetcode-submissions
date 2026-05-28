class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left =0
        let right = nums.length - 1
        while(left < right) {
            let m = Math.floor((right + left) / 2)
            if(nums[m] < nums[right]) {
                right = m
            } else {
                left = m + 1
            }
        }

        return nums[left]
    }
}
