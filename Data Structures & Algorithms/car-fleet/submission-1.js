class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = []
        for (let i = 0; i < position.length; i++) {
        cars.push([position[i], (target - position[i]) / speed[i]])
        }

        cars.sort((a, b) => b[0] - a[0])
        console.log(cars)

        let fleets = 0
        let currentMaxTime = 0

        
        
        for(let i = 0; i<cars.length; i++){
            let time = cars[i][1]
            if (time > currentMaxTime) {
            fleets++
            currentMaxTime = time
        }

        }
        
        
        return fleets
    }
}
