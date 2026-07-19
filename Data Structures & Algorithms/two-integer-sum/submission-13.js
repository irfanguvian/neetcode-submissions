class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const object = {}
        for(let i = 0 ; i < nums.length ;i++) {
            object[nums[i]] = i
        }

        for(let i = 0; i < nums.length ;i++) {
            const diff = +target - +nums[i]
            if(object[diff] && object[diff] != i) {
                return [i, object[diff]]
            }
        }

        return []
    }
}
