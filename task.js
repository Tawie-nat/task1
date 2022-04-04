"use strict";
function solveEquation(a,b,c) {
  
  let result;
  let d;
    d=Math.pow(b,2)-4*a*c;
  
  if(d < 0){
    result=[];
  } 
  
  if(d===0){
    result=[-b/(2*a)];
  } 
  if(d>0){
    let firstRoot = (Math.round((-b + Math.sqrt(d))/(2*a),2));
    let secondRoot = (Math.round((-b - Math.sqrt(d) )/(2*a),2));
    result=[firstRoot,secondRoot];
  }
  return result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let sumDebt= amount - contribution;

    if (isNaN(percent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
      }
    if (isNaN(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
      }
    if (isNaN(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
      }
      

    
    
    let P = (Number(percent)/1200);
    let date1 = new Date();
    let date2 = new Date(date);
    let n = Math.floor(Math.abs(date2.getTime() - date1.getTime())/(1000*3600*24*30));
    
    totalAmount = Number(((sumDebt * (P / ((1-(1 + P)**-n))))*n).toFixed(2));
  
    
    return totalAmount;
  }