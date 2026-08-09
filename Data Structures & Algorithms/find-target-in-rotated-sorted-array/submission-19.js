class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while(left < right) {
            const getIndexMid = Math.floor((left + right) / 2)
            if(nums[getIndexMid] > nums[right]) {
                left = getIndexMid + 1
            } else {
                right = getIndexMid
            }
        }

        let pivot = left

        function searchByPivot(left, right) {
            while(left <= right) {
                const getMid = Math.floor((left + right) / 2)
                if(nums[getMid] == target) {
                    return getMid
                }

                if(nums[getMid] < target) {
                    left = getMid + 1
                } else {
                    right = getMid - 1
                }
            }

            return -1
        }

        let searchLeft = searchByPivot(0, pivot - 1)
        if(searchLeft != -1) {
            return searchLeft
        }

        return searchByPivot(pivot, nums.length - 1)

    }

}
