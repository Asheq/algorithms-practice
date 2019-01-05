import { describe, Try } from 'riteway';
import { binarySearch, binarySearchAlt } from './binary-search';

describe('binarySearch()', async assert => {
  const given = 'an array and target'
  const should = 'return the index of target'
  assert({
    given,
    should,
    actual: binarySearch([5, 10, 55, 100], 55),
    expected: 2
  });

  assert({
    given,
    should,
    actual: binarySearch([5, 10, 55, 100], 100),
    expected: 3
  });

  assert({
    given: 'a target that does not exist in the array',
    should: 'return -1',
    actual: binarySearch([5, 10, 55, 100], 3),
    expected: -1
  });

});

describe('binarySearchAlt()', async assert => {
  const given = 'an array and target'
  const should = 'return the index of target'
  assert({
    given,
    should,
    actual: binarySearchAlt([5, 10, 55, 100], 55),
    expected: 2
  });

  assert({
    given,
    should,
    actual: binarySearchAlt([5, 10, 55, 100], 100),
    expected: 3
  });

  assert({
    given: 'a target that does not exist in the array',
    should: 'return -1',
    actual: binarySearchAlt([5, 10, 55, 100], 3),
    expected: -1
  });

});
