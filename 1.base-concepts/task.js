"use strict"
function solveEquation(a, b, c) {
  let discriminant = [];
  discriminant = b ** 2 - 4 * a * c;
  

  if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
  } else if (discriminant > 0) {
      const root1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
      const root2 = ((-b - Math.sqrt(discriminant)) / (2 * a));
      return [root1, root2];
  } else {
      return [];
  }
}

const roots1 = solveEquation(1, 5, 4);
const roots2 = solveEquation(1, 2, 1);
const roots3 = solveEquation(1, 2, 10);

console.log("Должно вернуться 2 корня уравнения: ", roots1);
console.log("Должен вернуться 1 корень уравнения: ", roots2);
console.log("Корней нет: ", roots3);


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = percent / 100 / 12;
  let loanBody = amount - contribution;
  let payment = loanBody * (monthlyRate + (monthlyRate / ((Math.pow((1 + monthlyRate), countMonths)) - 1)));
  let totalAmount = payment * countMonths;
  totalAmount = totalAmount.toFixed(2);
  let currentTotalAmount = parseFloat(totalAmount);
  return currentTotalAmount;
}

const results = calculateTotalMortgage(10, 20000, 20000, 24);
console.log("Общая сумма платежа: ", results);