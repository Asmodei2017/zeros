module.exports = function zeros(expression) {
				
  function factorial(n) {
      return (n != 1) ? n * factorial(n - 1) : 1;
  }
    
  function factorial2(n) {
    return (n != 1) ? n * factorial(n - 2) : 1;
  }   
    
  let arr = expression.split('*');
  let result = 1;
  let num = [];
  let strNum;   
    
  for(let i = 0; i < arr.length; i++){
    strNum = arr[i].split('');
    if(strNum[strNum.length - 1] === '!' && strNum[strNum.length - 2] === '!'){
        
      for(let x = 0; x < strNum.length - 2; x++){
        num.push(strNum[x]);
      }
      result *= factorial2(Number(num.join('')));	
      num = [];        
    }
    for(let y = 0; y < strNum.length - 1; y++){
      num.push(strNum[y]);
    }
    result *= factorial(Number(num.join('')));
    num = [];
  }
  let count;
  for (let q = 0; q < result.length; q++){
    if(result[q] === 0){
      count++;
    }
  }
    
  return count;
}
