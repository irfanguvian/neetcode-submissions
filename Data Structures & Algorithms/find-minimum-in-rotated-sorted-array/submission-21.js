class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // [3,4,5,6,1,2]
        // 5 3 2
        // 6 1 2
        // 1 1 2
        // 1 2 2

        let left = 0
        let right = nums.length - 1

        while(left < right) {
            const middle = Math.floor((left + right)/2)
            if(nums[middle] > nums[right]) {
                left = middle + 1
            } else {
                right = middle
            }
        }

        return nums[left]
    }
}
