// Task 5: Write Code for Electricity Bill Calculation
// The electricity bill is calculated based on units consumed.

function calculateBill(units) {
    let rate;
    if (units <= 100) {
        rate = 3;
    } else if (units <= 200) {
        rate = 5;
    } else {
        rate = 7;
    }
    return units * rate;
}

// Example usage
let unitsConsumed = 150;
console.log("Electricity Bill:", calculateBill(unitsConsumed) + " INR");
