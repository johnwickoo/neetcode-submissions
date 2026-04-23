class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const entry = s.split("")
        let isDivisibleBy2 = entry.length % 2 === 0;
        const stack = [];
        const pairs = {
                ')': '(',
                ']': '[',
                '}': '{'
            };
        if(!isDivisibleBy2) return false
        else{
            for(let ent of entry){
                if(ent==="[" || ent==="{" || ent==="("){
                    stack.push(ent)
                }else{
                    if(stack.pop() !== pairs[ent]) return false
                }
            }
             return stack.length===0
            }
           

        }
        
        
    }

