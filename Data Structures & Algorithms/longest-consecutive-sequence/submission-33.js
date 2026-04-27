class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // the trick of this question is to get start.
        // to get start we need to think to get start point
        // start point is if there is left side of the number. ex: 2 -> no 1. 3 -> yes 2.
        // so get all the start point, and return the max one
        let response = 0
        nums.sort((a,b) => a - b) // asc
        let temp = 0
        for(let i = 1; i < nums.length ; i++) {
            const diff = +nums[i] - +nums[i - 1]
            if(+nums[i] - +nums[i - 1] == 1) {
                temp++
            } else if (diff == 0) {
                continue
            } else {
                temp++
                response = Math.max(response, temp)
                temp = 0
            }
        }
        if(nums.length > 0) {
            temp++
        }
        
        response = Math.max(response, temp)

        return response
    }
}
