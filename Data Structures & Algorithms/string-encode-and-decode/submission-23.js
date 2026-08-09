class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let i = 0 ; i < strs.length ; i++) {
            const length = strs[i].length
            res = `${res}${length}#${strs[i]}`
        }

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        console.log(str)
        let left = 0
        
        while(left < str.length) {
            let right = left

            while(str[right] != "#") {
                right++
            }
            const lengthWord = Number(str.substring(left, right))
            left = right + 1
            right = left + lengthWord
            const getWord = str.substring(left, right)
            res.push(getWord)
            left = right
        }
        return res
    }
}
