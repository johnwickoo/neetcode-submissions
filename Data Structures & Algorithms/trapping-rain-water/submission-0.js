class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length
        const maxLeft = new Array(n).fill(0) 
        const maxRight = new Array(n).fill(0)

        for (let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i-1], height[i-1])
        }
        for (let i = n-2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i+1], height[i+1])
        }
    
        let total = 0
        for (let i = 0; i < n; i++) {
            const water = Math.min(maxLeft[i], maxRight[i]) - height[i]
            if (water > 0) total += water
        }
        return total
    }
}
