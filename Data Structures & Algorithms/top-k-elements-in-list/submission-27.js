class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mapNum = new Map()

        for(let i = 0 ; i < nums.length ;i++) {
            if(mapNum.has(nums[i])) {
                mapNum.set(nums[i], mapNum.get(nums[i]) + 1)
            } else {
                mapNum.set(nums[i], 1)
            }
        }

        const arrayNumKey = []

        mapNum.keys().forEach((key) => {
            arrayNumKey.push([key, mapNum.get(key)])
        })

        arrayNumKey.sort((a,b) => b[1] - a[1])
        const response = []

        for(let i = 0 ; i < k;i++) {
            response.push(arrayNumKey[i][0])
        }

        return response
    }
}
