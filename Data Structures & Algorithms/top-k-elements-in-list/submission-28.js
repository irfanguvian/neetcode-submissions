class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const groupedArr = []
        const mapKeys = new Map()
        let locationStart = 0
        for(let i = 0 ; i < nums.length ;i++) {
            if(mapKeys.has(nums[i])) {
                const getLocation = mapKeys.get(nums[i])
                groupedArr[getLocation][1] += 1
            } else {
                mapKeys.set(nums[i], locationStart)
                groupedArr[locationStart] = [nums[i], 1]
                locationStart++
            }
        }
        groupedArr.sort((a,b) => b[1] - a[1])
        const response = []
        for(let i = 0;i < k;i++) {
            response.push(groupedArr[i][0])
        }

        return response
    }
}
