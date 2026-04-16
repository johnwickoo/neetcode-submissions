class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const Group = new Map()
        for(let st of strs){
            const sorted = st.split("").sort().join("")
            if(!Group.has(sorted)){
                Group.set(sorted,[])
            }
            Group.get(sorted).push(st)

        }
        return Array.from(Group.values())
    }
}
