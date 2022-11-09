function fibonacchi(n){
    let arr = [0, 1]
    for(i = 1; i < n - 1; i++){
        sum = arr[i] + arr[i - 1]
        arr.push(sum);
    }
    return arr;
}

console.log(fibonacchi(8));

function fibonacchiRec(n){
    if(!isNaN(n)){
        arr = Array.from('x'.repeat(n));
        arr[0] = 0;
        arr[1] = 1;
        return fibonacchiRec(arr);
    } else{
        if(n.indexOf('x') !== -1){
            i = n.indexOf('x');
            n[i] = n[i - 1] + n[i - 2];
            return fibonacchiRec(n);
        }
        return n;
    }
}

console.log(fibonacchiRec(8));

