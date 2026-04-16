class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const store = new Map()
        const bucket = new Array(nums.length + 1).fill(null).map(() => [])
        for(let num of nums){
                store.set(num, (store.get(num) || 0) + 1)
            
            
        }
        for(let [num, freq] of store.entries()){
            bucket[freq].push(num)
        }
        const output=[]
        for(let i = bucket.length - 1; i >= 0; i--){
            for (let num of bucket[i]){
                output.push(num)
                if(output.length===k){
                    return output
                }
            }

        }
    }
}
