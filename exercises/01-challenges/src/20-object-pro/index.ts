/**
 * You are on your way to becoming a professional, time to master objects.
 * Create a function that takes an object and returns the keys and values as separate arrays. 
 * Return the keys sorted alphabetically, and their corresponding values in the same order.
 */

function objectPro(input: any) {
  // return [Object.keys(input), Object.values(input)];

  let key = Object.keys(input);
  let value = Object.values(input);
  return [key, value]
}

export { objectPro };

