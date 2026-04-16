class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       
        const Group = new Map();
        for(let st of strs){
            const count = new Array(26).fill(0);
            for(let char of st){
                count[char.charCodeAt(0) - 97]++
            }
            const key = count.join(",")
          if(!Group.has(key)){
                Group.set(key,[])
            }
            Group.get(key).push(st)
        }
        return Array.from(Group.values())
            
    }}