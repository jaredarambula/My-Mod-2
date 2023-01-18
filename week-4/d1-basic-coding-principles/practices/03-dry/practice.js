function bigNum(num1, num2) {
  if (num1 > num2) {
    return num1; 
  }
  return num2
}

function multiplyBiggerNumByTwo(num1, num2) {
  return bigNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
 return bigNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${bigNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let bigNum1 = bigNum(weight1, weight2); 
  let smallNum = bigNum1 === weight1 ? weight2 : weight1; 
  return `I adopted a dog that weighs ${smallNum} pounds.`;
}



/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
