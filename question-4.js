function moveZerosToEnd(arr) {
    let index = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }

    for (let i = index; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}


const arr = [0,1,9,8,4,0,0,2,7,0,6,0,9];
console.log(moveZerosToEnd(arr)); 
