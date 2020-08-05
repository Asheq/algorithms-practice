function firstMissingPositive(nums) {
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val <= 0 || val > nums.length + 1) {
      nums[i] = false;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];

    if (typeof val === "boolean") {
      continue;
    }

    if (val < 0) {
      val = -val;
    }

    const valAtVal = nums[val - 1];

    if (typeof valAtVal === "boolean" && valAtVal === false) {
      nums[val - 1] = true;
    }

    if (typeof valAtVal === "number" && valAtVal > 0) {
      nums[val - 1] = -valAtVal;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (typeof val === "boolean" && val === false) {
      return i + 1;
    }

    if (typeof val === "number" && val > 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
}
