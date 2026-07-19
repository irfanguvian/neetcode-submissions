class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // -4, -1 , -1, 0, 1, 2
        const response = []
        let pointer = 0
        nums.sort((a,b) => a - b) // asc
        while(pointer < nums.length - 2) {
            while(pointer < nums.length && nums[pointer] == nums[pointer - 1]) pointer++

            const getCurrentPointer = nums[pointer]
            if(getCurrentPointer > 0) {
                break
            }

            let left = pointer + 1
            let right = nums.length - 1

            while(left < right) {
                const totalVal = getCurrentPointer + nums[left] + nums[right]
                if(totalVal == 0) {
                    response.push([getCurrentPointer, nums[left], nums[right]])
                    while(left < right && nums[left] == nums[left + 1]) left++
                    left++
                } else if (totalVal > 0) {
                    right--
                } else {
                    left++
                }
            }
            pointer++
        }

        return response
         
    }
}
