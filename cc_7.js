//Task 1: Function Declaration
function calculateInvoice (subtotal, taxRate, discount){ //Define a function that calculates tax
    let total = (subtotal + (subtotal * taxRate)) - discount; // Apply formula
    return `Total Invoice: $${total.toFixed(2)}`; // Format and return
}

console.log (calculateInvoice(100, 0.08, 5)); //Expected output: "Total Invoice: $103.00"
console.log (calculateInvoice(500, 0.1, 20)); //Expected output: "Total Invoice: $530.00"
