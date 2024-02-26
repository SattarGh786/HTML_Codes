// Define a custom map function
function customMap(array, callback) {
    var newArray = []; // Create a new array to store the mapped values
    for (var i = 0; i < array.length; i++) {
        // Call the callback function for each element and push the result to the new array
        newArray.push(callback(array[i], i, array));
    }
    return newArray; // Return the new array
}

// Define a custom filter function
function customFilter(array, callback) {
    var newArray = []; // Create a new array to store the filtered values
    for (var i = 0; i < array.length; i++) {
        // Call the callback function for each element
        // If the callback returns true, push the element to the new array
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray; // Return the new array
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];

// Using the custom map function
var doubledNumbers = customMap(numbers, function(num) {
    return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using the custom filter function
var evenNumbers = customFilter(numbers, function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
