//find duplicate elements in Array

// 1. Declare and initialize an array containing numbers
let numbers = [10, 20, 10, 30, 20, 40, 10];

// Create a copy and sort it so duplicate values sit right next to each other
numbers.sort((a, b) => a - b);
console.log("Sorted array:", numbers);

let duplicates = [];
let hasDuplicates = false;

// 2. Traverse the sorted array using a loop (up to length - 1 to check neighbors numbers)
for (let i = 0; i < numbers.length - 1; i++) {
    
    // 3. Compare adjacent elements to identify values that occur more than once
    if (numbers[i] === numbers[i + 1]) {
        let currentVal = numbers[i];
        
        // 4. Ensure each duplicate is recorded only once (prevent repeats for numbers appearing 3+ times)
        let alreadyAdded = false;
        for (let j = 0; j < duplicates.length; j++) {
            if (duplicates[j] === currentVal) {
                alreadyAdded = true;
                break; // Stop checking once found
            }
        }
        
        // If it's not already in our list, add it
        if (!alreadyAdded) {
            duplicates.push(currentVal);
            hasDuplicates = true;
        }
    }
}

// 5. Display the final result or an appropriate message if none are found
if (hasDuplicates) {
    console.log("Duplicate values:", duplicates);
} else {
    console.log("No duplicate values found");
}

console.log('---------------------------------------------------------');


// if no duplicates is found
// 1. Declare and initialize an array containing numbers
let numbers1= [10, 20, 10, 30, 20, 40, 10];

// Create a copy and sort it so duplicate values sit right next to each other
numbers.sort((a, b) => a - b);
console.log("Sorted array:", numbers);

let duplicates1 = [];
let hasDuplicates1 = false;

// 2. Traverse the sorted array using a loop (up to length - 1 to check neighbors numbers)
for (let i = 0; i < numbers1.length - 1; i++) {
    
    // 3. Compare adjacent elements to identify values that occur more than once
    if (numbers1[i] === numbers1[i + 1]) {
        let currentVal = numbers1[i];
        
        // 4. Ensure each duplicate is recorded only once (prevent repeats for numbers appearing 3+ times)
        let alreadyAdded = false;
        for (let j = 0; j < duplicates1.length; j++) {
            if (duplicates1[j] === currentVal) {
                alreadyAdded = true;
                break; // Stop checking once found
            }
        }
        
        // If it's not already in our list, add it
        if (!alreadyAdded) {
            duplicates.push(currentVal);
            hasDuplicates1 = true;
        }
    }
}

// 5. Display the final result or an appropriate message if none are found
if (hasDuplicates1) {
    console.log("Duplicate values:", duplicates1);
} else {
    console.log("No duplicate values found");
}







