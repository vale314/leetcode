/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

    

    Example 1:

    Input: nums = [1,1,2]
    Output:
    [[1,1,2],
    [1,2,1],
    [2,1,1]]
    Example 2:

    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    

    Constraints:

    1 <= nums.length <= 8
    -10 <= nums[i] <= 10
*/

const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

var permuteUnique = function (nums, set = [], answers = []) {
  if (nums.length == 0) {
    let answers1 = answers.some((n) => equals(n, set));
    if (!answers1) answers.push([...set]);
  }

  for (let i = 0; i < nums.length; i++) {
    let newN = nums.filter((number, index) => index != i);
    set.push(nums[i]);
    permuteUnique(newN, set, answers);
    set.pop();
  }
  return answers;
};
