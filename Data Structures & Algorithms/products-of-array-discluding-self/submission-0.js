class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];
        for(let i=0; i<nums.length; i++){
            const reset = [...nums]
            nums.splice(i,1);
            const product = nums.reduce((acc, current)=>acc*current,1)
            output.push(product)
            nums = reset
        }
        return output
    }
}
