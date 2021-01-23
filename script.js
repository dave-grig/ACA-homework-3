// 1
// comment for me: checked
let isOdd = function(num = 0) {
    // for negative numbers
    let absNum = Math.abs(num);

    let lastDigit = absNum % 10;

    //basic case
    if (absNum < 10 && absNum > -10) {
        return (lastDigit % 2 !== 0);

    } else if (lastDigit % 2 !== 0) {
        return isOdd(Math.floor(absNum / 10));

    } else {
        return false;
    }
}


console.log(isOdd(4211133));
console.log(isOdd(7791));
console.log(isOdd(5));



// 2
// comment for me : checked
function minimalPositiveNum(arr, minimalPosNum = Infinity, i = 0) {
    if (i === arr.length) {
        return minimalPosNum === Infinity ? -1 : minimalPosNum;
    } 

    if (arr[i] < minimalPosNum && arr[i] >= 0) {
        minimalPosNum = arr[i];
    }

    return minimalPositiveNum(arr,minimalPosNum, i + 1);
}

console.log(minimalPositiveNum([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(minimalPositiveNum([45, -9, 15, 5, -78]));
console.log(minimalPositiveNum([-5, -9, -111, -1000, -7]));

// 3
// recursion
// comment for me: checked
function indexOfViolatedOrder(arr,i = 1, prevIdx = 0) {
    if (arr.length <= 1) {
        return -1;
    }
    
    else if (i === arr.length - 1 ) {
        return arr[i] < arr[prevIdx] ? i : -1;
    }

    else if (arr[i] < arr[prevIdx]) {
        return i;
    }

    return indexOfViolatedOrder(arr, i + 1, prevIdx + 1);
}

console.log(indexOfViolatedOrder([2, 12, 15, 48, 64]),"order");
console.log(indexOfViolatedOrder([-9, -4, -4, 3, 12, 4, 5]),"order");


// 3
// loop
// comment for me: checked
function indexOfViolatedOrder2(arr) {
    if (arr.length <= 1) {
        return -1;
    } 

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return i + 1;
        }
    }

    return -1;
}

console.log(indexOfViolatedOrder2([2, 12, 15, 48, 64]),"order2");
console.log(indexOfViolatedOrder2([-9, -4, -4, 3, 12, 4, 5]),"order2");

// 3
// lucum@ durs chi galis baic ashxatuma
// comment for me : checked
function indexOfViolatedOrder3(arr) {
    return arr.findIndex((e,i,arr) => arr[i] < arr[i - 1]);
}

console.log(indexOfViolatedOrder([2, 12, 15, 48, 64]),"order3");
console.log(indexOfViolatedOrder([-9, -4, -4, 3, 12, 4, 5]),"order3");

// 4
//comment for me : checked

function fib(n, cache = []) {
    if (n === 1) {
        cache.unshift(0);
        return 1
    }
    // 1 0   1  1    1 
    cache.unshift(fib(n - 1, cache));

    return  cache[0] + cache.pop(); 
     
}

console.log(fib(24), "fib");


// 5
// comment for me : checked
function removeFirstElementOfGivenArr(arr,i = 0) {
    if (arr.length === 0) {
        return arr;
    }

    else if (i  === arr.length - 1 ) {
        arr.length--;
        return arr;
    }

    arr[i] = arr[i + 1];

    return removeFirstElementOfGivenArr(arr, i + 1);
    
}

console.log(removeFirstElementOfGivenArr([6, 78, "n", 0, 1]));
console.log(removeFirstElementOfGivenArr([5]));
console.log(removeFirstElementOfGivenArr([]));