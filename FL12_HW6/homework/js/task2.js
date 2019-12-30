let a = prompt('Please enter side A:');
let b = prompt('Please enter side B:');
let c = prompt('Please enter side C:');



a = Number(a);
b = Number(b);
c = Number(c);

if (a + b <= c | a + c <= b | b + c <= a | a === 0 | b === 0 | c === 0) {
    alert("Triangle doesn't exist.")
} else if (a === b & b === c & a === c) {
    alert('Equilateral triangle.')
} else if (a === b | b === c | a === c) {
    alert('Isosceles triangle.')
} else {
    alert('Scalene triangle.')
}