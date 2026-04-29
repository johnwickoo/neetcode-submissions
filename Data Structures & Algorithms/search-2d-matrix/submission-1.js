class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const flattened = matrix.flat()
        let left = 0
        let right = flattened.length-1
        while(left<=right){
            let mid = Math.floor((left + right)/2)
            if(flattened[mid] === target){return true}
            else if(target>flattened[mid])left = mid+1
            else right = mid-1
        }
        return false
    }
}
