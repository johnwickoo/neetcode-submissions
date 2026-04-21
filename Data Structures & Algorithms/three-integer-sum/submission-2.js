class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a,b)=>a-b)
        const output = []
        for(let i = 0;i<sorted.length;i++){
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            const frozenNumber =sorted[i]
            let left = i+1
            let right = sorted.length-1
            while(left<right){
                let sum = sorted[left]+sorted[right]
                
                if(sum > -frozenNumber){
                    right--
                }else if (sum < -frozenNumber){
                    left++
                }else {output.push([frozenNumber, sorted[left], sorted[right]]);
                    left++
                    right--
                    while (left < right && sorted[left] === sorted[left - 1]) left++;
                    while (left < right && sorted[right] === sorted[right + 1]) right--;
                }
                
            }

           

        }
        return output
    }
}
