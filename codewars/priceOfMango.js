/* Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
But! Every third mango is free!*/
const mango=(quantity, price)=>quantity>2?(quantity-Math.floor(quantity/3))*price:quantity*price;