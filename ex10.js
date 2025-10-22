let n = 50;

let oddLine  = "Số lẻ: ";
let evenLine = "Số chẵn: ";

let firstNumber = true;
for (let i = 1; i < n; i += 2) {
  oddLine += (firstNumber ? "" : ", ") + i;
  firstNumber = false;
}

firstNumber = true;
for (let i = 0; i <= n; i += 2) {
  evenLine += (firstNumber ? "" : ", ") + i;
  firstNumber = false;
}

console.log(oddLine);
console.log(evenLine);

