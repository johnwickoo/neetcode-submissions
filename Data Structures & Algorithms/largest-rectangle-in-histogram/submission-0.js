class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea=0
        for(let i = 0; i< heights.length;i++){
            let height = heights[i]
            let left = i
            let right = i

            while (left - 1 >= 0 && heights[left - 1] >= height) {
                left--
            }
            while (right + 1 < heights.length && heights[right + 1] >= height) {
                right++
            }
            let width = right - left + 1
            let area = height *width
            maxArea= Math.max(maxArea,area)
        }
        return maxArea
    }
}
