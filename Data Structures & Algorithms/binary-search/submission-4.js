class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // for(let i = 0; i<nums.length;i++){
        //     if(!(nums[i]-target==0)){
        //         continue
        //     }else if(nums[i]-target==0) return i
           
        // }
        // return -1
        let left = 0
        let right = nums.length-1
        while(left<=right){
            let mid = Math.floor((left + right)/2)
            if(nums[mid] === target){return mid}
            else if(target>nums[mid])left = mid+1
            else right = mid-1
        }
        return -1
        
    }
}
