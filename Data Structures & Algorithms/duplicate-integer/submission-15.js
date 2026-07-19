class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setNum = new Set(nums)
        return setNum.size != nums.length
    }
}
