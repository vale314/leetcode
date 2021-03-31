/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
 78. Subsets
Medium

5109

109

Add to List

Share
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

 */

var subsets = function (nums) {
  var array = [];

  var searchSubsets = (index, current = []) => {
    array.push([...current]);

    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);
      searchSubsets(i + 1, current);
      current.pop();
    }
  };
  searchSubsets(0);
  return array;
};
