/**
 * Write a function that takes a two-digit number and determines, if it's the largest of two possible digit swaps.
 */

function largestSwap(number: number) {
    let sortedNum = number
        .toString()
        .split(``)
        .map(item => item)
        .sort((a: any, b: any) => a - b)
        .join(``);

    if (number.toString() === sortedNum) {
        return false
    }
    return true
}

export { largestSwap };