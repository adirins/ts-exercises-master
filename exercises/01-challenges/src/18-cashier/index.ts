/**
 * Today you work at a store as the cashier, but 10 minutes before your lunch break, the cash register stops working.
 * Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
 * A grocery object has a product, a quantity and a price.
 */

import { parseConfigFileTextToJson } from "typescript";

function cashier(groceries: Grocery[]) {
  return groceries
        .reduce((total, Grocery) => (total + (Grocery.price*Grocery.quantity)), 0);
}

export { cashier };

interface Grocery {
    product: string;
    quantity: number;
    price: number;
}