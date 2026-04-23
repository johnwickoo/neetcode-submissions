class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack =[]
        for(let token of tokens){
            if(token === "+" || token === "-" || token === "*" || token === "/" ){
               const right=stack.pop()
               const left =stack.pop()
               let result
                switch (token) {
                case "+":
                    result = left + right;
                    break;
                case "-":
                    result = left - right;
                    break;
                case "*":
                    result = left * right;
                    break;
                case "/":
                    result = Math.trunc(left / right); 
                    break;
            }
            stack.push(result)
        }else stack.push(Number(token))
        
    } return stack[0]
}
}