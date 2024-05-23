function findMissingNumber(arr, n) {
  
    let totalSum = n * (n + 1) / 2;

   
    let arraySum = 0;
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }

    return totalSum - arraySum;
}


const arr = [1, 2, 4, 3, 8, 7, 6];
const n = 8; 
console.log(findMissingNumber(arr, n));  // Output: 5