class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const validOpenMap = {
            "{": "}",
            "[": "]",
            "(": ")"
        }

        const stackOpen = []

        for(let i = 0 ; i < s.length ; i++) {
            if(s[i] == "(" || s[i] == "{" || s[i] == "[") {
                stackOpen.push(s[i])
            } else {
                if(stackOpen.length == 0) {
                    return false
                }
                const popTop = stackOpen.pop()
                if(validOpenMap[popTop] != s[i]) {
                    return false
                }
            }
        }

        if(stackOpen.length > 0) {
            return false
        }

        return true


    }
}
