//Task 1: Function Declaration
function calculateInvoice (subtotal, taxRate, discount){ //Define a function that calculates tax
    let total = (subtotal + (subtotal * taxRate)) - discount; // Apply formula
    console.log (`Total Invoice: $${total.toFixed(2)}`); // Format and return
}

//Test cases 
calculateInvoice(100, 0.08, 5); //Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); //Expected output: "Total Invoice: $530.00"

//Task 2: Function Expression
let calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    console.log (`Hourly Wage: $${hourlyWage.toFixed(2)}`);
};

//Test cases 
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"

//Task 3: Arrow Function
let calculateLoyaltyDiscount = (amount, years) => { 
    let discountRate = 0; //Define a function
    if (years >=5) discountRate = 0.15; //Discount rate based on years of loyalty
    else if (years >=3) discountRate = 0.10; // 10% discount for 3 or more years
    else discountRate = 0.05; //5% discount for less than 3 years


    let discountedPrice = amount * (1- discountRate);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`); //Format and return the discounted price
};

//Test cases 
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

//Task 4: Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) { //Function calculateShippingCost
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight); //Calculate shipping fees
    let totalCost = expedited ? baseCost + 10 : baseCost;
    console.log(`Shipping Cost: $${totalCost.toFixed(2)}`); // Shipping cost is logged
}

//Test cases
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

//Task 5: 
function calculateLoanInterest(principal, rate, years) { //Function calculateLoanInterest
    let interest = principal * rate * years; //Interest formula
    console.log(`Total Interest: $${interest.toFixed(2)}`); //Total interest amount is logger
}

//Text cases
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"