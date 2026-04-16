class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedCharacter = s
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase()
        .split('');
        let left=0;
        let right=cleanedCharacter.length - 1

        while(left<right){
            if(cleanedCharacter[left]!==cleanedCharacter[right]) return false;
            left++;
            right--;
        }
        return true
    }
}
