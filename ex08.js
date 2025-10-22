let a = 50;
let b = 1;

a = a / b;
b *= a;
a = 1 / (a / b);
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);
