   // below are my formulas for this challenge
// Gross salary = Basic salary + Benefits
// Net salary = Gross salary - Deductions
// Deductions = PAYE + NHIFDeductions + NSSFDeductions
// Taxable pay = Gross salary - Personal relief




//    CALCULATING PAYE

function calculatePAYE(grossSalary) {
  // Personal relief = 2400, so we subtract 2400 from gross salary to get the taxable pay
  let taxablePay = grossSalary - 2400;
  let tax = 0;

  if (taxablePay <= 24000) {
    tax = 0.1 * taxablePay;
  } else if ((taxablePay) => 24001 && taxablePay <= 32333) {
    tax = 0.25 * taxablePay;
  } else if (taxablePay >= 32334 && taxablePay <= 500000) {
    tax = 0.3 * taxablePay;
  } else if (taxablePay >= 500001 && taxablePay <= 800000) {
    tax = 0.325 * taxablePay;
  } else if (taxablePay > 800000) {
    tax = 0.35 * taxablePay;
  }
  return tax;
}
// the output below shows an example of PAYE deduction if the grossSalary is 75000
console.log(calculatePAYE(75000));



//    CALCULATING NHIF DEDUCTIONS

function calculateNHIF(grossSalary) {
  let NHIF = 0;
  if (grossSalary <= 5999) {
    NHIF = 150;
  } else if ((grossSalary) => 6000 && grossSalary <= 7999) {
    NHIF = 300;
  } else if ((grossSalary) => 8000 && grossSalary <= 11999) {
    NHIF = 400;
  } else if ((grossSalary) => 12000 && grossSalary <= 14999) {
    NHIF = 500;
  } else if ((grossSalary) => 15000 && grossSalary <= 19999) {
    NHIF = 600;
  } else if ((grossSalary) => 20000 && grossSalary <= 24999) {
    NHIF = 750;
  } else if ((grossSalary) => 25000 && grossSalary <= 29999) {
    NHIF = 850;
  } else if ((grossSalary) => 30000 && grossSalary <= 34999) {
    NHIF = 900;
  } else if ((grossSalary) => 35000 && grossSalary <= 39999) {
    NHIF = 950;
  } else if ((grossSalary) => 40000 && grossSalary <= 44999) {
    NHIF = 1000;
  } else if ((grossSalary) => 45000 && grossSalary <= 49999) {
    NHIF = 1100;
  } else if ((grossSalary) => 50000 && grossSalary <= 59999) {
    NHIF = 1200;
  } else if ((grossSalary) => 60000 && grossSalary <= 69999) {
    NHIF = 1300;
  } else if ((grossSalary) => 70000 && grossSalary <= 79999) {
    NHIF = 1400;
  } else if ((grossSalary) => 80000 && grossSalary <= 89999) {
    NHIF = 1500;
  } else if ((grossSalary) => 90000 && grossSalary <= 99999) {
    NHIF = 1600;
  } else {
    NHIF = 1700;
  }
  return NHIF;
}
// the output below shows the NHIF deduction amount if the grossSalary is 75000
console.log(calculateNHIF(75000));




// CALCULATE NSSF DEDUCTIONS

function calculateNSSF(grossSalary) {
    // NSSF rate is 6% of the pensionable pay
  const nssfRate = 0.06;
  return nssfRate * grossSalary;
}
// the output below shows the NSSF deduction amount if the grossSalary is 70000
console.log(calculateNSSF(70000));




//FINAL CALCULATION FOR THE NET SALARY
function calculatenetSalary(basicsalary, benefits) {
  let grossSalary = basicsalary + benefits;
//   Net salary = gross salary - deductions(payee + nhif + nssf)

  const Payee = calculatePAYE(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const nssf = calculateNSSF(grossSalary);

  const netsalary = grossSalary - (Payee + nhif + nssf);

  return netsalary;
}
// the output below shows the total net salary if the basic salary is 50000 and benefits is 6000
console.log(calculatenetSalary(50000, 6000));
