// JS script to reverse an array.

// Define an array.
var array = [1, 2, 3, 4, 5];

// Define a function to reverse the array.
function reverseArray(array) {
    var reversedArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

// Print the array and the reversed array.
console.log(array);
console.log(reverseArray(array));
