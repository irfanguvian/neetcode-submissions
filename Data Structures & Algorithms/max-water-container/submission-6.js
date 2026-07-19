class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let totalMax = 0
        while(left < right) {
            const smallest = Math.min(heights[left], heights[right])
            const steps = right - left

            totalMax = Math.max(totalMax, smallest * steps)

            if(heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        return totalMax
    }
}
