class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numContainer = new Map()
        for( let i = 0; i < nums.length ; i++) {
            let checkNumber = target - nums[i]
            if(numContainer.has(checkNumber)) {
                return [i, numContainer.get(checkNumber)]
            }
            numContainer.set(nums[i], i)
        }
    }
}
