const json = `[1, 2, 3, 4]`;

let array = JSON.parse(json);
console.log(array.reduce((a, b) => a + b));
