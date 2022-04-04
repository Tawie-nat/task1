"use strict";
function solveEquation(a,b,c) {
  
  let resalt;
  let d;
    d=Math.pow(b,2)-4*a*c;
  
  if(d<0){
    resalt=[];
    
  } else  if(d=0){
    resalt=[-b/(2*a)];
    
  } else if(d>0){
    let firstRoot = (Math.round((-b + Math.sqrt(d))/(2*a),2));
    let secondRoot = (Math.round((-b - Math.sqrt(d) )/(2*a),2));
    resalt=[firstRoot,secondRoot];
    
  }
  return resalt;
}



