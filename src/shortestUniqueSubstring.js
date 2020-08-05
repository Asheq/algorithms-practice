// https://www.pramp.com/challenge/wqNo9joKG6IJm67B6z34

function getShortestUniqueSubstring(arr, str) {
  let head = 0;
  let smallest;
  let uniqueCounter = 0;
  const countMap = new Map();

  for (const char of arr) {
    countMap.set(char, 0);
  }

  // TODO Try with one while loop
  for (let tail = 0; tail < str.length; tail += 1) {
    const tailChar = str.charAt(tail);

    if (!countMap.has(tailChar)) {
      continue;
    }

    const tailCount = countMap.get(tailChar);
    if (tailCount === 0) {
      uniqueCounter += 1;
    }

    countMap.set(tailChar, tailCount + 1);

    while (uniqueCounter === arr.length && head < str.length) {
      console.log(tail, head)

      const winLen = tail - head + 1;

      if (winLen === arr.length) {
        return str.slice(head, tail + 1);
      }

      if (!smallest || winLen < (smallest[1] - smallest[0])) {
        smallest = [head, tail]
      }

      const headChar = str[head];
      if (countMap.get(headChar)) {
        const headCount = countMap.get(headChar) - 1;
        if (headCount === 0) {
          uniqueCounter -= 1;
        }
        countMap.set(headChar, headCount);
      }
      head += 1;
    }
  }

  if (smallest) {
    return str.slice(smallest[0], smallest[1] + 1)
  } else {
    return ''
  }
}
