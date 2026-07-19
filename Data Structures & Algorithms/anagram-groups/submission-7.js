class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupAna = {}
        for(let i = 0; i<strs.length ; i++) {
            const makeKeys = strs[i].split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join()
            if(groupAna[makeKeys]) {
                groupAna[makeKeys].push(strs[i])
            } else {
                groupAna[makeKeys] = [strs[i]]
            }
        }
        const response = []
        Object.keys(groupAna).forEach((key) => {
            response.push(groupAna[key])
        })
        return response
    }
}
