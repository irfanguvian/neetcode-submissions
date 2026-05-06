class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1
        let response = Math.min(nums[left], nums[right])
        while(left < right) {
            if(nums[left] < nums[right]) {
                right--
            } else {
                left++
            }
            response = Math.min(response, nums[left], nums[right])
        }

        return response
    }
}
