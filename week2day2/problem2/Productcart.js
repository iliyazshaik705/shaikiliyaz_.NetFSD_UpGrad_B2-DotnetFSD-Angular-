// Cart data (array of objects)
const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 }
];

// Arrow function using map + reduce
const calculateTotal = (items) => {
  return items
    .map(item => item.price * item.quantity)   // subtotal
    .reduce((total, value) => total + value, 0); // sum
};

const total = calculateTotal(cart);

// Invoice printing using template literals
cart.forEach(item => {
  console.log(`${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`);
});

console.log(`Total Cart Value: ₹${total}`);