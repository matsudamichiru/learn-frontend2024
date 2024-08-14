for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } elese if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 7 === 0) {
        console.log("EvenSeven");
    } else if (i % 2 === 0) {
        console.log("Even");
    } else if (i % 7 === 0) {
        console.log("Seven");
    } else {
        console.log(i);
    }
}
