let a = [2, 4, "2", 28]
let actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];


function convert(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            array[i] = array[i] + ''
            newArray.push(array[i])

        } else {
            array[i] = +array[i]
            newArray.push(array[i])
        }
    }
    return newArray;
}



function executeForEach(array, callback) {
    for (let i of array) {
        callback(i);
    }
}

executeForEach([1, 2, 3], function (i) {
    console.log(i * 2)
});




function mapArray(array, myMap) {

    let newArray = [];

    executeForEach(array, function (i) {
        newArray.push(myMap(parseInt(i)));
    });

    return newArray;
}
mapArray(a, function (i) {
    return i + 3;
});


function filterArray(array, myFilter) {
    let newArray = [];

    executeForEach(array, function (i) {
        if (myFilter(i)) {
            newArray.push(i);
        }
    });

    return newArray;
}

filterArray(a, function (el) {
    return el % 2 === 0;
});

function flipOver(array) {
    let newString = '';

    for (let i of array) {
        newString = i + newString;
    }

    return newString;
}




function makeListFromRange(array) {
    let newArray = [];

    for (let i = array[0]; i <= array[1]; i++) {
        newArray.push(i);
    }

    return newArray;
}


function getArrayOfKeys(array, key) {
    let result = [];

    executeForEach(array, function (i) {
        result.push(i[key])
    })

    return result;
}



function substitute(array) {
    return mapArray(array, function (i) {
        if (i < 30) {
            return '*';
        } else {
            return i;
        }
    });
}