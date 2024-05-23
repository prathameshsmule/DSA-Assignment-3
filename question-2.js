function countFrequency(arr) {
 
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
      
        if (frequency[arr[i]] !== undefined) {
            frequency[arr[i]]++;
        } else {
         
            frequency[arr[i]] = 1;
        }
    }
    return frequency;
}
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const result = countFrequency(arr);
console.log(result); 
