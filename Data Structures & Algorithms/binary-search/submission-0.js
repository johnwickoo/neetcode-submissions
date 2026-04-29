class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        for(let i = 0; i<nums.length;i++){
            if(!(nums[i]-target==0)){
                continue
            }else if(nums[i]-target==0) return i
           
        }
        return -1
    }
}
