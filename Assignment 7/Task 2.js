// Task 2: Print Odd Multiplication Tables (1 to 20)

for (let num = 1; num <= 20; num += 2) {  // Odd numbers from 1 to 20
    console.log(`\nMultiplication Table for ${num}:`);
    for (let i = 1; i <= 10; i++) {  // Multiples from 1 to 10
        console.log(`${num} x ${i} = ${num * i}`);
    }
}