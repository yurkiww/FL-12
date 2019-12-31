function getMin(a) {
    let min = a[0]

    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i]
        }
    }
    return min;
}

console.log(getMin([1, 2, -18, 4, -2]));