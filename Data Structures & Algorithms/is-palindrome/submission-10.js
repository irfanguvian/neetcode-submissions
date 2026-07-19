class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char) {
        return (char >= "A" && char <= "Z") || (char >="a" && char <= "z") || (char >= "0" && char <= "9")
    }

    isPalindrome(s) {
        const validChar = []
        s.split("")
        .map((char) => {
            if(this.isAlphanumeric(char)){
                validChar.push(char.toLowerCase())
            }
            return null 
        })

        let left = 0
        let right = validChar.length - 1

        while(left < right) {
            if(validChar[left] != validChar[right]) {
                return false
            }
            left++
            right--
        }

        return true
    }
}
