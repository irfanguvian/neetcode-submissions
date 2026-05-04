class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumberic(char) {
        if(char >= "A" && char <= "Z") {
            return true
        } else if (char >= "a" && char <= "z") {
            return true
        } else if(char >= "0" && char <= "9") {
            return true
        } else {
            return false
        }
    }

    isPalindrome(s) {
        const stringCompare = s.toLowerCase().split(" ").join("")
        let left = 0
        let right = stringCompare.length - 1
        const arrayOfChar = stringCompare.split("")
        while(left < right) {
            if(!this.isAlphaNumberic(arrayOfChar[left])) {
                left++
                continue
            } else if (!this.isAlphaNumberic(arrayOfChar[right])) {
                right--
                continue
            } else if(arrayOfChar[left] == arrayOfChar[right]) {
                left++
                right--
            } else {
                return false
            }
        }

        return true
    }
}
