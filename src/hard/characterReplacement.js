// https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement(s, k) {
    let left = 0;
    const charFreqInWin = {}
    let maxCharFreqInWin = 0

    let longestSubstring = 0
    for (let right = 0; right < s.length; right++) {

        // Update charFreqInWin and maxCharFreqInWin
        const charAtRight = s[right]
        charFreqInWin[charAtRight] = charFreqInWin[charAtRight] ? charFreqInWin[charAtRight] += 1 : 1
        maxCharFreqInWin = Math.max(maxCharFreqInWin, charFreqInWin[charAtRight])

        const winLength = right - left + 1

        // Check if current window can be turned entirely into the same characters with k operations
        if (winLength - maxCharFreqInWin <= k) {
            // Replace longestSubstring with winLength if it is larger
            longestSubstring = Math.max(longestSubstring, winLength)
        } else {
            // Move left edge of window (shrink window)
            const charAtLeft = s[left]
            charFreqInWin[charAtLeft] -= 1
            left += 1
        }
    }

    return longestSubstring
}
