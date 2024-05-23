function findIntersection(arr1, arr2) {
    const intersection = [];
    const arr2Elements = {}; 
    for (let i = 0; i < arr2.length; i++) {
        arr2Elements[arr2[i]] = true;
    }

    for (let i = 0; i < arr1.length; i++) {
        
        if (arr2Elements[arr1[i]] && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]);
        }
    }

    return intersection;
}
const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
console.log(findIntersection(arr1, arr2));
