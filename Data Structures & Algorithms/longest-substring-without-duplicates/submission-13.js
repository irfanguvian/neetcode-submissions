class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const newset = new Set()
        let left = 0
        let res = 0
        for(let i = 0 ; i < s.length ; i++) {
            while(newset.has(s[i])) {
                newset.delete(s[left])
                left++
            }
            newset.add(s[i])
            res = Math.max(res, (i - left + 1))
        }

        return res
    }
}
