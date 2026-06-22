class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSum = {
            "0" : 1 // base case
        }
        let counter = 0
        let currentSum = 0
        for(let i = 0 ; i < nums.length ; i++) {
            currentSum += +nums[i]
            let diff = currentSum - k
           if(prefixSum[diff]) {
                counter += prefixSum[diff]
            }

            prefixSum[currentSum] = (prefixSum[currentSum] || 0) + 1
        }

        return counter
    }
}
