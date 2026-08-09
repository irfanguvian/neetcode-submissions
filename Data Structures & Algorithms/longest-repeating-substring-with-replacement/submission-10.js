class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const getListCharSet = new Set(s)
        const entrySetChar = [...getListCharSet]
        let res = 0

        for(let i = 0 ; i < entrySetChar.length ; i++) {
            let counter = 0
            let l = 0

            for(let r = 0 ; r < s.length ; r++) {
                if(s[r] == entrySetChar[i]) {
                    counter++
                }

                while(r - l + 1 - counter > k) {
                    if(s[l] == entrySetChar[i]) {
                        counter--;
                    }
                    l++
                }

                res = Math.max(res, r - l + 1)
            }
        }

        return res
    }
}
