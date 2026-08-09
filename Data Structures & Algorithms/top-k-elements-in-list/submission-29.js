class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const arrayGroupCount = []
        const mappedKey = new Map()
        let index = 0
        for(let i = 0 ; i <nums.length ; i++) {
            if(mappedKey.has(nums[i])) {
                const getKeyPointer =  mappedKey.get(nums[i])
                arrayGroupCount[getKeyPointer][1]++
            } else {
                mappedKey.set(nums[i], index)
                arrayGroupCount.push([nums[i], 1])
                index++
            }
        }

        arrayGroupCount.sort((a,b) => b[1] - a[1])

        const topK = arrayGroupCount.slice(0, k)

        return topK.map((k) => k[0])

    }
}
