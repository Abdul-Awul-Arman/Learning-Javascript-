//   old way
// function arguments5() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// arguments5(1, 2, 3, 4, 5, 6, 8, 9, 10);

// old way make arguments to array but with trick
// function anotherArguments5() {
//     let argsArray = Array.prototype.slice.call(arguments);
//     argsArray.map(function (oneArg) {
//         console.log(`Arguments received ${oneArg}`);
//     });
// };

// anotherArguments5(1, 3, 4, 4, 3);

// Taking unlimited arguments

let argumentsEs6 = (...argumentsEs6) => {

    for (let i = 0; i < argumentsEs6.length; i++) {
        console.log(argumentsEs6[i]);
    }
}

// argumentsEs6(1, 2, 3, 4, 5, 5, 7);














