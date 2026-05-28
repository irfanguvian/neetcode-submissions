class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length <=1) {
            return nums[0]
        }
       let left = 0
       let right = nums.length - 1
       let response = nums[0]

       while(left <= right) {
            if(nums[left] <= nums[right]) {
                response = Math.min(response, nums[left])
                break
            }

            let middle = Math.floor((right + left) / 2)
            response = Math.min(response, nums[middle])
            if(nums[middle] >= nums[left]) {
                left = middle + 1
            } else {
                right = middle - 1
            }
       }

       return response
    }

    // [3, 4, 5, 6, 1, 2]
    /**
     * left : 0, right: 5
     * left: 3, right: 5
     * left: 3, right: 3
     */

    // [4,5,6,7,0,1,2]
    /**
     * left:0, right: 6
     * left: 3, right: 6
     */

    // [0,1]
}
