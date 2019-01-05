export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

export const binarySearchAlt = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right / 2);
  while (val !== arr[mid] && left !== right) {
    if (val > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = left + Math.floor((right - left) / 2);
  }

  return arr[mid] === val ? mid : -1;
};
