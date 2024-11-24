var obj = {
    Bangladesh: "Dhaka",
    India: "Delhi",
    Nepal: "Kathmandu",
    Afganistan: 'Kabul',
    Thailand: "Bangkok",
};

// for (name in obj) {
//     console.log(`${name} -> ${obj[name]}`);
// };

let value = Object.values(obj);
let keys = Object.keys(obj);

console.log(keys);

keys.map((element) => {
    console.log(`${element}->${obj[element]}`);
})
