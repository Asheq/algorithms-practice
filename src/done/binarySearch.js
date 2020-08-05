// https://leetcode.com/problems/binary-search/

// Boundaries (left and right pointers) are considered to be included in array
// to be searched within
export const search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(right + left / 2);
    const valAtMid = arr[mid];
    if (valAtMid === target) {
      return mid;
    } else if (valAtMid < target) {
      left = mid + 1;
    } else { // valAtMid > target
      right = mid - 1;
    }
  }

  return -1;
}

// Boundaries (left and right pointers) are considered to be excluded from array
// to be searched within
export const search = (arr, target) => {
  let left = -1;
  let right = arr.length;

  while (left + 1 < right) {
    const mid = Math.floor(right + left / 2);
    const valAtMid = arr[mid];
    if (valAtMid === target) {
      return mid;
    } else if (valAtMid < target) {
      left = mid;
    } else { // valAtMid > target
      right = mid;
    }
  }

  return -1;
}

// Use while true
export const search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (true) {
    let mid = Math.floor((right + left) / 2);
    if (target === arr[mid]) {
      return mid;
    else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    if (left > right) {
      return false;
    }
  }
};

// The "bad" version
export const search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right / 2);
  while (target !== arr[mid] && left < right) {
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = left + Math.floor((right - left) / 2);
  }

  return arr[mid] === target ? mid : -1;
};

