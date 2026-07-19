class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false
        }
        const object = {}

        for(let i = 0; i < s.length ;i++) {
            if(object[s[i]]) {
                object[s[i]] += 1
            } else {
                object[s[i]] = 1
            }
        }

        for(let i = 0; i < t.length ;i++) {
            if(!object[t[i]]) {
                return false
            } else if(object[t[i]] == 0) {
                return false
            } else {
                object[t[i]] -= 1
            }
        }

        return true
    }
}
