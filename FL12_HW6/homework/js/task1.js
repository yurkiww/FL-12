let a = prompt("Please enter A:");
let b = prompt("Please enter B:");
let c = prompt("Please enter C:");



a = Number(a);
b = Number(b);
c = Number(c);


let D = Math.pow(b, 2) - 4 * a * c;
if (!Number.isInteger(D)) {
    console.log("Invalid input data.")
} else {
    if (a === 0) {
        console.log("This is not a quadratic equation.");
    } else {
        if (D < 0) {
            console.log("Discriminator is lower than zero. The equation has no solutions.")
        } else if (D === 0) {
            console.log("Discriminator is: " + D)
            let x0 = -b / 2 * a;
            console.log("x0=" + x0)
        } else {
            console.log("Discriminator is: " + D)
            let x1 = (-b - Math.sqrt(D)) / (2 * a);
            let x2 = (-b + Math.sqrt(D)) / (2 * a);
            console.log("x1=" + x1, "x2=" + x2)

        }


    }

}