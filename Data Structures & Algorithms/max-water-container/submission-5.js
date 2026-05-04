class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVal = 0

        let left = 0
        let right = heights.length - 1

        while(left < right) {
            if(heights[left] > heights[right]) {
                maxVal = Math.max(maxVal, heights[right] * (right - left))
                right--
            } else {
                maxVal = Math.max(maxVal, heights[left] * (right - left))
                left++
            }
        }

        return maxVal
    }
}
