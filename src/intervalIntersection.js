function intervalIntersection(A, B) {
  let a = 0;
  let b = 0;

  let intersections = [];

  while (a < A.length && b < B.length) {
    const intersection = getIntersection(A[a], B[b]);
    if (intersection) {
      intersections.push(intersection);
    }

    if (A[a][1] < B[b][1]) {
      a += 1;
    } else {
      b += 1;
    }
  }

  return intersections;
}

function getIntersection(intA, intB) {
  const start = intA[0] > intB[0] ? intA[0] : intB[0];
  const end = intA[1] < intB[1] ? intA[1] : intB[1];

  if (end < start) {
    return undefined;
  }

  return [start, end];
}
