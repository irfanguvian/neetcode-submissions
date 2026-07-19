class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0
        let containerLargest = new Set()
        let maxSubs = 0
        let pointer = start + 1
        containerLargest.add(s[start])
        while(start < s.length) {
            if(pointer == s.length) {
                maxSubs = Math.max(maxSubs,containerLargest.size)
                break
            }
            if(containerLargest.has(s[pointer])) {
                maxSubs = Math.max(maxSubs,containerLargest.size)
                containerLargest = new Set()
                start++
                pointer = start + 1
                containerLargest.add(s[start])
            } else {
                containerLargest.add(s[pointer])
                pointer++
            }
        }

        return maxSubs
    }
}
