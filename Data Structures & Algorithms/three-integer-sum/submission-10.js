class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // - 4 , -1, -1, 0, 1, 2
        nums.sort((a,b) => a - b)
        const arrayResponse = []
        for(let i = 0 ; i< nums.length; i++) {
            if(i > 0 && nums[i] == nums[i - 1] || nums[i] > 0) {
                continue
            }
            const A = nums[i]
            let left = i + 1
            let right = nums.length - 1
            while(left < right) {
                const B = nums[left]
                const C = nums[right]
                
                const finalResult = A + B + C
                if(finalResult === 0) {
                    arrayResponse.push([A,B,C]) 
                    left++
                    right--
                    while (left < right && nums[left] === nums[left - 1]) left++
                    while (left < right && nums[right] === nums[right + 1]) right++
                } else if(finalResult > 0) {
                    right--
                } else if(finalResult < 0) {
                    left++
                }
            }
        }
        return arrayResponse
    }
}
