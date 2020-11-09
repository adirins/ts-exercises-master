/**
 * There's a great war between the even and odd numbers. 
 * Many numbers already lost their life in this war and it's your task to end this. 
 * You have to determine which group is larger: the even, or the odd. The larger group wins.
 * Create a function that takes an array of integers, sums the even and odd numbers seperately, 
 * then returns "Odd numbers win by X" or "Even numbers win by X", X is survivors.
 * If both groups are equal, return "There are no winners"
 */

function warOfNumbers(numbers: number[]) {
    let odd = numbers.filter(number => number % 2 > 0).reduce((acc, value) => acc + value, 0);
    let even = numbers.filter(number => number % 2 == 0).reduce((acc, value) => acc + value, 0);

    if (odd === even) {
        return `There are no winners`
    } else {
        if (odd > even) {
            return `Odd numbers win by ${odd - even}`
        }
    };
    return `Even numbers win by ${even - odd}`;
};

export { warOfNumbers };