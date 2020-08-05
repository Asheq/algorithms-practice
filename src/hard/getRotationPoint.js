// TODO test
function getRotationPoint(words) {
  let left = -1;
  let right = words.length;

  const firstWord = words[0];

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    const wordAtMid = words[mid];
    const wordBeforeMid = words[mid - 1];
    const wordAfterMid = words[mid + 1];

    if (wordAtMid < wordBeforeMid) {
      return mid;
    }

    if (wordAtMid > firstWord) {
       left = mid;
    } else {
      right = mid;
    }

  }
}
