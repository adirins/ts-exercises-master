/**
 * You have made a virtual onion and want to peel off the outer layer.
 * Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
 * 
 * Example:
 * 
 * Input:
[
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]

 * Output: 
[
  ["f", "g"],
  ["j", "k"]
]
 */

function peelTheOnion(onion: (string | number)[][]) {
  return onion
  .slice(1, onion.length - 1)
  .map(item => item.slice(1, item.length - 1));
}


export { peelTheOnion };
