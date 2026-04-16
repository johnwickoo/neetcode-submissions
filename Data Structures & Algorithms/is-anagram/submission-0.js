class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArray = [...s];
        const tArray = [...t]
        const totalCountS= sArray.reduce((acc, value) => {
            acc[value] = (acc[value] || 0) + 1;
            return acc},{});
        const totalCountT= tArray.reduce((acc, value) => {
            acc[value] = (acc[value] || 0) + 1;
            return acc},{});

        console.log(totalCountS, totalCountT);

        
        if(Object.keys(totalCountS).length !== Object.keys(totalCountT).length) return false

        for(const char in totalCountS) {
            if(totalCountS[char] !== totalCountT[char]) return false
        }
        return true
    }
}
