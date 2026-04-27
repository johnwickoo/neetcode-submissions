class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // let output = []
        // for(let i = 0; i < temperatures.length; i++){
        //     let found = false
        //         for(let j=i+1; j < temperatures.length; j++){
        //             if(temperatures[j] > temperatures[i]){
        //                 output.push(j-i) 
        //                 found = true
        //                 break 
        //             }
        //         }
        //         if(!found){
        //             output.push(0)
        //         }
            

        // }return output

        let stack=[]
        let output = new Array(temperatures.length).fill(0)
        for(let i = 0; i < temperatures.length; i++){
            
            while(stack.length>0 && temperatures[stack[stack.length-1]] <temperatures[i]){
                let stackTop = stack.pop()
                output[stackTop]=i-stackTop
            }stack.push(i)


           
        }
        return output
    }
}
