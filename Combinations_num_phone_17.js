/**
 * @param {string} digits
 * @return {string[]}
 */

/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
  */
var phone = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  //var x = digits.split("");

  var arrayOutput = [""];

  /*if(x.length == 1){
        arrayOutput = phone[x[0]];
    }else{
    
    for(let i = 0; i<x.length-1; i++){
      
        for(let j = 1; j<x.length; j++){

            phone[x[i]].map((i1)=>{
                phone[x[j]].map((i2)=>{
                    arrayOutput.push(i1+i2);
                })
            })
        }
    }
    }*/
  for (let i = 0; i < digits.length; i++) {
    var digit = digits[i];

    arrayOutput.push(null);
    for (
      let head = arrayOutput.shift();
      head !== null;
      head = arrayOutput.shift()
    ) {
      for (let char of phone[digit]) {
        arrayOutput.push(head + char);
      }
    }
  }

  return arrayOutput;
};
