class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let response = []
        nums.sort((a,b) => a - b) // asc

        for(let i = 0 ; i < nums.length; i++) {
            if(i > 0 && (nums[i] === nums[i - 1] || nums[i] > 0)) continue
            let left = i + 1
            let right = nums.length - 1

            while(left < right) {
                const checkVal = +nums[i] + +nums[left] + +nums[right]
                if (checkVal > 0) {
                    right--
                } else {
                    if(checkVal == 0) {
                        response.push([nums[i],nums[left],nums[right]])
                    }
                    left++
                    while(nums[left] == nums[left - 1] && left < (nums.length - 1)) {
                        left++
                    }
                }
            }
        }

        return response
    }
}
