/**
 * You just returned home to find your mansion has been robbed! 
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

function burglary(input: any) {
    let sum = Object
        .keys(input)
        .reduce((sum, key) => sum + input[key], 0)

    if (sum > 0) {
        return sum;
    };
    return `Lucky you!`

}

export { burglary };