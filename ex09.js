let electricityNumber = 100;
let totalCost = 0;
const KWH_1 = 1.678;
const KWH_2 = 1.734;
const KWH_3 = 2.014;
const KWH_4 = 2.536;
const KWH_5 = 2.834;
const KWH_6 = 2.927;
const MAX_ELECTRICTYNUMBER_1 = 50;
const MAX_ELECTRICTYNUMBER_2 = 100;
const MAX_ELECTRICTYNUMBER_3 = 200;
const MAX_ELECTRICTYNUMBER_4 = 300;
const MAX_ELECTRICTYNUMBER_5 = 400;

if (
  typeof electricityNumber === "number" &&
  electricityNumber !== NaN &&
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
  console.log(`Số tiền điện phải đóng trong tháng là: ${totalCost}`);
} else {
  console.log("Số điện không đúng");
}
