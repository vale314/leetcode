/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var y = x.toString();
  var y1 = y.split("");
  y1 = y1.reverse();
  y1 = y1.join("");

  var x1 = y1.localeCompare(y);

  console.log(x1);
  return !x1;
};
