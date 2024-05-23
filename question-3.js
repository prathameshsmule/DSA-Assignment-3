function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]; 
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i]; 
        }
    }

 
    return secondLargest === -Infinity ? null : secondLargest;
}

const arr = [12,35,1,10,34,1];
console.log(`The second largest element is: ${findSecondLargest(arr)}`); 
