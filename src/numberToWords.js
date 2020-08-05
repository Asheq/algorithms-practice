// https://leetcode.com/problems/integer-to-english-words/
const GROUP_SUFFIXES = ['', 'Thousand', 'Million', 'Billion']
const DIGIT_TO_ENGLISH = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const TENS_TO_ENGLISH = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const TEENS_TO_ENGLISH = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

var numberToWords = function(num) {
    if (num === 0) {
        return 'Zero';
    }
    const outputStrArray = [];
    const groups = []; // ['', thousands, millions, billions]
    let temp = num;
    while (temp !== 0) {
        const bottomThreeDigits = temp % 1000;
        groups.push(bottomThreeDigits);
        temp = Math.floor(temp / 1000);
    }

    for (let i = groups.length - 1; i >= 0; i -= 1) {
        const group = groups[i];
        const groupInEnglish = processGroup(group)
        const groupSuffix = GROUP_SUFFIXES[i];
        if (groupInEnglish) {
            outputStrArray.push(groupInEnglish);
            groupSuffix && outputStrArray.push(groupSuffix);
        }
    }

    return outputStrArray.join(' ');
}

var processGroup = function(group) {
    const outArr = [];
    const digits = []; // [ones, tens, hundreds]
    let temp = group;
    while (temp !== 0) {
        const lastDigit = temp % 10;
        digits.push(lastDigit);
        temp = Math.floor(temp / 10);
    }

    const [ones, tens, hundreds] = digits;

    if (hundreds) {
        outArr.push(DIGIT_TO_ENGLISH[hundreds]);
        outArr.push('Hundred');
    }

    if (tens === 1) {
        outArr.push(TEENS_TO_ENGLISH[ones]);
    } else {
        tens && outArr.push(TENS_TO_ENGLISH[tens]);
        ones && outArr.push(DIGIT_TO_ENGLISH[ones]);
    }

    return outArr.join(' ');
}
