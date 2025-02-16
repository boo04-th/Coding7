//Task 1: Function Declaration
function calculateInvoice (subtotal, taxRate, discount){ //Define a function that calculates tax
    let total = (subtotal + (subtotal * taxRate)) - discount; // Apply formula
    console.log (`Total Invoice: $${total.toFixed(2)}`); // Format and return
};

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
};

//Test cases
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

//Task 5: Returning Values
function calculateLoanInterest(principal, rate, years) { //Function calculateLoanInterest
    let interest = principal * rate * years; //Interest formula
    console.log(`Total Interest: $${interest.toFixed(2)}`); //Total interest amount is logger
};

//Test cases
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

//Task 6: Higher-Order Functions
function filterHighValueTransactions(transactions, filterFunction) {
    let result = transactions.filter(filterFunction); //// Apply filter function to get transactions
    console.log("High Value Transactions:",result); // Print the filtered transaction
};

//Test cases
let transactions = [500, 1200, 3000, 800, 2200];
filterHighValueTransactions(transactions, amount => amount > 1000); // Expected output: [1200, 3000, 2200]

//Task 7: Closures 
function createBudgetTracker() { //A budget tracker to maintains a running balance
    let balance = 0; //Initalize the balance
    return function(expense) { 
        balance -= expense; //Deducting expense from the balance
        console.log(`Current Balance: -$${Math.abs(balance)}`); //Updated negative balance is logged
    };
};

//Creating a budget tracker instance - test cases
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"

//Task 8: Recursion in JavaScript
function calculateGrowth(years, revenue) { //Recursive function 
    if (years >= 10) return `Projected revenue: $${revenue.toFixed(2)}`; //Stopping recursion after 10 years
    return calculateGrowth(years + 1, revenue * 1.05); //Increasing the revenue
};

// Test cases
console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41"
