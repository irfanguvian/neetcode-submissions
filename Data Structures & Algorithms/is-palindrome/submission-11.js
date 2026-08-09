class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumberic(char) {
        if((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || (char >= "0" && char<="9")) {
            return true
        }

        return false
    }

    isPalindrome(s) {
        const arrayChar = s.split("")
        let left = 0
        let right = arrayChar.length
        
        while(left < right) {
            if(this.isAlphaNumberic(arrayChar[left]) && this.isAlphaNumberic(arrayChar[right])) {
                if(arrayChar[left].toLowerCase() != arrayChar[right].toLowerCase()) {
                    return false
                }
                left++
                right--
            } else {
                if(!this.isAlphaNumberic(arrayChar[left])) {
                    left++
                }

                if(!this.isAlphaNumberic(arrayChar[right])) {
                    right--
                }
            }
        }

        return true
    }
}
