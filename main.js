
// 2. 
// Input: a1bc2d3
// Output: a3bc2d1

// 3
// Input: ab2cde0
// Output: ab0cde2
// Waldo Mendoza10:40
// 4
// Input: 4x5y
// Output: 5x4y

const invertNumbers = (str = '') => {

  let result = ''

  let numbers= []

  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) >= 0 && str.charAt(i) <= 9){
      numbers.push(str.charAt(i))
    }
  }

  numbers = numbers.reverse()
  let indexNumbers = 0;
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) >= 0 && str.charAt(i) <= 9){
      result = result + numbers[indexNumbers];
      indexNumbers ++;
    } else {
      result += str.charAt(i);
    }
  }

  return result;

};

module.exports = {
  invertNumbers
};