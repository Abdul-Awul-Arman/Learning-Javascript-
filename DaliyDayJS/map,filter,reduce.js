let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = array.map((element, index, array) => {
    return [element * element, index, ...array];
});

// console.log(result);

let result2 = array.filter((element, index, array) => {
    return element % 2 === 0 ? true : false;
})

// console.log(result2);

let result3 = array.reduce((sum, element, index, array) => {
    return sum += element;
}, 20);

console.log(result3);