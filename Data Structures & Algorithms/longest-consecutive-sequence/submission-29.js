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

        const mapNumber = new Map()

        nums.forEach((num) => {
            if(!mapNumber.has(num)) {
                mapNumber.set(num, num)
            }
        })

        const startPoint = []

        nums.forEach((num) => {
            if(!mapNumber.has(+num - 1)) {
                startPoint.push(num)
            }
        })

        let response = 0
        while(startPoint.length > 0) {
            let temp = 1
            let getStartNum = startPoint.pop()
            while(mapNumber.has(getStartNum + 1)) {
                getStartNum++
                temp++
            }

            response = Math.max(response, temp)
        }

        return response
    }
}
