function mergeSort(arr){
    let left;
    let right;
    if(arr.length > 1){
        left = arr.slice(0, arr.length / 2);
        right = arr.slice(arr.length / 2, arr.length);
        return funky(mergeSort(left), mergeSort(right));
    }
    return arr;
}


function funky(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++;
        }
        else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    if(leftIndex < left.length){
        result.push(left[leftIndex]);
    }
    if(rightIndex < right.length){
        result.push(right[rightIndex]);
    }
    console.log(left, right, result);
    return result; 
}

console.log(mergeSort([2,3,1,8,7,6,5,0]));
