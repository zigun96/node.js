const fs = require('fs');
let [a, b] = fs.readFileSync('/index.txt').toString().split(' ');
a = parseInt(a);
b = parseInt(b);
