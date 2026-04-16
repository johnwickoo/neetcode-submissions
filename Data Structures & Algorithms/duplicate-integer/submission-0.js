class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hasSeen = new Set()
        for(const num of nums) {
            if(hasSeen.has(num)){
                return true
            }else{
                hasSeen.add(num)
            }
        
        }
        return false
        
    }
}
