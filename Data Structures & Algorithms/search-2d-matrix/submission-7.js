class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length
        const columns = matrix[0].length
        // const flattened = matrix.flat()
        let left = 0
        let right = rows * columns-1
        while(left<=right){
            let mid = Math.floor((left + right)/2)
            let row = Math.floor(mid / columns)
            let col = mid % columns

            let value = matrix[row][col]
            if(value === target){return true}
            else if(target>value)left = mid+1
            else right = mid-1
        }
        return false
    }
}
