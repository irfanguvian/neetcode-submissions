class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        nums.sort((a,b) => a - b)
        // -4, -1 , -1.  0 1 2    
        for(let i = 0 ; i < nums.length ; i++) {
            while(i < nums.length && nums[i] == nums[i - 1]) {
                i++
            } 
            const currentPointer = nums[i]
            if(currentPointer > 0) {
                break
            }

            let left = i + 1
            let right = nums.length - 1

            while(left < right) {
                const value = currentPointer + nums[left] + nums[right]
                if(value === 0) {
                    res.push([currentPointer, nums[left], nums[right]])
                    while(left < right && nums[left] == nums[left + 1]) left++
                    left++
                    right--
                } else if (value > 0) {
                    right--
                } else {
                    left++
                }
            }
        }

        return res
    }
}
