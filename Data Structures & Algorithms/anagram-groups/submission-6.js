class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapWord = new Map()

        for(let i = 0 ; i < strs.length ;i++) {
            const getWord = strs[i].split("").sort().join("")
            if(mapWord.has(getWord)) {
                const getArrayWord = mapWord.get(getWord)
                getArrayWord.push(strs[i])
                mapWord.set(getWord, getArrayWord)
            } else {
                mapWord.set(getWord, [strs[i]])
            }
        }

        const response = []

        mapWord.keys().forEach((key) => {
            response.push(mapWord.get(key))
        })

        return response
    }
}
