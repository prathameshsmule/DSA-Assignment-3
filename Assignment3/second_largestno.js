function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is greater than the largest found so far
        if (arr[i] > largest) {
            secondLargest = largest; // Update second largest to be the old largest
            largest = arr[i]; // Update largest to be the current element
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i]; // Update second largest if current element is between largest and second largest
        }
    }

    // If no second largest element is found, return null
    return secondLargest === -Infinity ? null : secondLargest;
}

// Example usage
const arr = [12,35,1,10,34,1];
console.log(`The second largest element is: ${findSecondLargest(arr)}`); // Output: The second largest element is: 4
