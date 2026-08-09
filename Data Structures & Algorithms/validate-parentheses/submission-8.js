class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const bracket = {
            '(': ')',
            '{': '}',
            '[': ']',
        }

        const splitS = s.split("")

        for(let i = 0 ; i < splitS.length ; i++) {
            if(bracket[splitS[i]]) {
                stack.push(splitS[i])
            } else {
                if(stack.length == 0) {
                    return false
                }
                const getLatestOpenBracket = stack.pop()

                if(!bracket[getLatestOpenBracket]) {
                    return false
                }

                if(bracket[getLatestOpenBracket] != splitS[i]) {
                    return false
                }
            }
        }

        if(stack.length > 0 ) {
            return false
        }
        return true
    }
}
