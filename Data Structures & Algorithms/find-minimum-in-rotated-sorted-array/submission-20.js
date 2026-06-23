class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // pivot, left, right
        // pivot bisa jadi ngikutin portion left, atau right
        // sebaliknya
        // 3, 4, 5, 6, 1, 2
        // left: 3, mid: 5, left: 2. 3 < 5 -> ada di kanan
        
        let left = 0
        let right = nums.length - 1

        while(left < right) {
            let mid = left + Math.floor((right - left) / 2)
            if(nums[mid] >  nums[right]) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return nums[left]

    }
}
