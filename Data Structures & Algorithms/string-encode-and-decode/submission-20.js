class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    construct() {
        this.makeKey = ""
    }

    setKey(key) {
        this.makeKey = key
    }

    getKey() {
        return this.makeKey
    }

    encode(strs) {
        const keyMapped = strs.length
        const makeKey = `#${keyMapped}#`

        this.setKey(makeKey)

        return strs.join(makeKey)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const getKey = this.getKey()
        const getLength = getKey.split("#")[1]
        if(getLength == 0) {
            return []
        } 
        return str.split(getKey)
    }
}
