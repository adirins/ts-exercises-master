/**
 * Write a function that returns the index of the word "treasure" from the given array.
 * 
 * Example
 * 
 * Input: ['sand', treasure', 'boot']
 * Output: 1
 */

function findTreasure(input: string[]) { 
    return input.findIndex((element) => element === 'treasure');
}

export { findTreasure };

