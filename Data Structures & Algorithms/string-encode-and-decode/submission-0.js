class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       const output=[]
        for(let str of strs){
            const strLength = str.length;
            output.push(strLength +"#"+str)
        }
        return output.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0;
        while(i<str.length){
            const j = str.indexOf("#", i)
            // j is # position
            const length = parseInt(str.slice(i, j))
            const word = str.slice(j+1, j+1+length)
            i = j+1 + length
            result.push(word)
        }
        return result
        
    }
}
