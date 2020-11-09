/**
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order in a new array.
 */


function maxMin(numbers: number[]) {
    let sorted = numbers.sort((a, b) => a - b)
    return [sorted[0], sorted[sorted.length - 1]]
}

export { maxMin };