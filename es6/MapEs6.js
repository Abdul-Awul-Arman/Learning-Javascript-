// Initialize a new Map
let map = new Map();

// Adding key-value pairs
map.set('name', 'Alice');
map.set('age', 25);
map.set('city', 'Wonderland');
console.log('Initial Map:', map);

// Retrieving a value by key
console.log('Name:', map.get('name')); // 'Alice'

// Checking if a key exists
console.log('Has age?', map.has('age')); // true
console.log('Has country?', map.has('country')); // false

// Deleting a key-value pair
map.delete('city');
console.log('After deleting city:', map);

// Getting the size of the map
console.log('Map size:', map.size); // 2

// Iterating through keys
console.log('Keys:');
for (let key of map.keys()) {
    console.log(key);
}

// Iterating through values
console.log('Values:');
for (let value of map.values()) {
    console.log(value);
}

// Iterating through entries
console.log('Entries:');
for (let [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
}

// Using forEach to iterate
console.log('Using forEach:');
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Clearing the map
map.clear();
console.log('After clearing the map:', map);
