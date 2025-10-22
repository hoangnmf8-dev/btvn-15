//Bài 1
let age = 25;
if(Number.isFinite(age) && age > 0) {
  console.log(`Tôi năm nay ${age} tuổi`);
} else {
  console.log("Số tuổi không đúng");
}

//Bài 2
const PI = 3.14159;
let r = 5;
if(Number.isFinite(r) && r > 0) {
  let circularArea = PI * r * r;
  console.log(`Diện tích hình tròn là: ${circularArea}`);
} else {
  console.log("Số đo bán kính không đúng");
}

//Bài 3
let a = 7;
let b = 2;
if(Number.isFinite(a) && Number.isFinite(b)) {
  let sum = a + b;
  console.log(`Tổng của a và b là ${sum}`);
  
  let difference = a - b;
  console.log(`Hiệu của a và b là ${difference}`);
  
  let accumulation = a * b;
  console.log(`Tích của a và b là ${accumulation}`);
  
  if(b !== 0) {
    let quotient = a / b;
    console.log(`Thương của a và b là ${quotient}`);
  } else {
    console.log("Phép chia không hợp lệ");
  }
  
  if(b !== 0) {
    let remainder = a % b;
    console.log(`Phần dư của phép chia a cho b là ${remainder}`);
  } else {
    console.log("Phép lấy dư không hợp lệ");
  }
} else {
  console.log("Số a và b không hợp lệ");  
}

//Bài 4
let name = "";
let defaultName = "Khách";
let displayName;
if (name) {
  displayName = name;
} else {
  displayName = defaultName;
}
console.log("🚀 ~ displayName:", displayName);

//Bài 5
let driverAge = 18;
let hasLicense = true;

if (Number.isFinite(driverAge) && driverAge >= 18 && hasLicense) {
  console.log("Đủ điều kiện");
} else {
  console.log("Không đủ điều kiện");
}

//Bài 6
let username = "";
let password = "";
console.log(username === "");
console.log(password === "");

//Bài 7
let salePrice = 50000;
let regularPrice = 80000;
let isValidSalePrice = Number.isFinite(salePrice) && salePrice > 0 && salePrice <= regularPrice;
let isValidRegularPrice = Number.isFinite(regularPrice) && regularPrice > 0;
if( isValidSalePrice && isValidRegularPrice) {
  let saleRate = 100 * (1 - salePrice / regularPrice);
  console.log("🚀 ~ saleRate:", saleRate);
} else {
  console.log("Giá sau giảm và giá gốc không hợp lệ");
}

//Bài 8
let c = 0;
let d = 10;
c += d;
d = c - d;
c -= d;
console.log(c, d);

//Bài 9
let electricityNumber = 100;
let totalCost = 0;
const KWH_1 = 1678;
const KWH_2 = 1734;
const KWH_3 = 2014;
const KWH_4 = 2536;
const KWH_5 = 2834;
const KWH_6 = 2927;
const MAX_ELECTRICTYNUMBER_1 = 50;
const MAX_ELECTRICTYNUMBER_2 = 100;
const MAX_ELECTRICTYNUMBER_3 = 200;
const MAX_ELECTRICTYNUMBER_4 = 300;
const MAX_ELECTRICTYNUMBER_5 = 400;

if (
  
  Number.isFinite(electricityNumber) &&
  electricityNumber > 0
) {
  if (electricityNumber <= MAX_ELECTRICTYNUMBER_1) {
    totalCost = KWH_1 * electricityNumber;
  } else if (electricityNumber <= MAX_ELECTRICTYNUMBER_2) {
    totalCost =
      KWH_1 * MAX_ELECTRICTYNUMBER_1 +
      KWH_2 * (electricityNumber - MAX_ELECTRICTYNUMBER_1);
  } else if (electricityNumber <= MAX_ELECTRICTYNUMBER_3) {
    totalCost =
      KWH_1 * MAX_ELECTRICTYNUMBER_1 +
      KWH_2 * (MAX_ELECTRICTYNUMBER_2 - MAX_ELECTRICTYNUMBER_1) +
      KWH_3 * (electricityNumber - MAX_ELECTRICTYNUMBER_2);
  } else if (electricityNumber <= MAX_ELECTRICTYNUMBER_4) {
    totalCost =
      KWH_1 * MAX_ELECTRICTYNUMBER_1 +
      KWH_2 * (MAX_ELECTRICTYNUMBER_2 - MAX_ELECTRICTYNUMBER_1) +
      KWH_3 * (MAX_ELECTRICTYNUMBER_3 - MAX_ELECTRICTYNUMBER_2) +
      KWH_4 * (electricityNumber - MAX_ELECTRICTYNUMBER_3);
  } else if (electricityNumber <= MAX_ELECTRICTYNUMBER_5) {
    totalCost =
      KWH_1 * MAX_ELECTRICTYNUMBER_1 +
      KWH_2 * (MAX_ELECTRICTYNUMBER_2 - MAX_ELECTRICTYNUMBER_1) +
      KWH_3 * (MAX_ELECTRICTYNUMBER_3 - MAX_ELECTRICTYNUMBER_2) +
      KWH_4 * (MAX_ELECTRICTYNUMBER_4 - MAX_ELECTRICTYNUMBER_3) +
      KWH_5 * (electricityNumber - MAX_ELECTRICTYNUMBER_4);
  } else {
    totalCost =
      KWH_1 * MAX_ELECTRICTYNUMBER_1 +
      KWH_2 * (MAX_ELECTRICTYNUMBER_2 - MAX_ELECTRICTYNUMBER_1) +
      KWH_3 * (MAX_ELECTRICTYNUMBER_3 - MAX_ELECTRICTYNUMBER_2) +
      KWH_4 * (MAX_ELECTRICTYNUMBER_4 - MAX_ELECTRICTYNUMBER_3) +
      KWH_5 * (MAX_ELECTRICTYNUMBER_5 - MAX_ELECTRICTYNUMBER_4) +
      KWH_6 * (electricityNumber - MAX_ELECTRICTYNUMBER_5);
  }
  console.log(`Số tiền điện phải đóng trong tháng là: ${totalCost} đồng`);
} else {
  console.log("Số điện không đúng");
}

//Bài 10
let n = 10;

let oddLine  = "Số lẻ: ";
let evenLine = "Số chẵn: ";

if(Number.isFinite(n)) {
  let firstNumber = true;
  for (let i = 1; i <= n; i += 2) {
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
} else {
  console.log("Đầu vào không hợp lệ");
}



