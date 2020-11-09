/**
 * Write a function that removes all values from the given array that do not equal the word "apple".
 * 
 * Example
 * 
 * Input: ["STARWARS", "apple", "potato", "apple"]
 * Output: ["apple", "apple"]
 */

function filterApples(input: string[]) { 
    return input.filter(input => input === "apple");
    
 }

export { filterApples };