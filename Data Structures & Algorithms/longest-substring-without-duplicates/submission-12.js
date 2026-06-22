class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let substr = ""
        const mapping = new Map()

        let i = 0
        let result = 0
        let start = 0
        while(i < s.length) {
            if(mapping.has(s[i])) {
                start++
                i = start
                result = Math.max(result, substr.length)
                substr = ""
                mapping.clear()
            }
            mapping.set(s[i], 1)
            substr += s[i]
            i++
        }

        result = Math.max(result, substr.length)

        return result
    }
}
