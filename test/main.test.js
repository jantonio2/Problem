// waldo.mendoza@mojix.com
// 1.
// Input: abc
// Output: abc

const { invertNumbers } = require('../main');

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

describe('interviewQuestion', () => {
  it('should be the same ouput if the input is abc', () => {
    const result = invertNumbers('abc');

    expect(result).toBe('abc');
  });

  it('should be a3bc2d1 if the input is a1bc2d3', () => {
    const result = invertNumbers('a1bc2d3');

    expect(result).toBe('a3bc2d1');
  });

  it('should be ab0cde2 if the input is ab2cde0', () => {
    const result = invertNumbers('ab2cde0');

    expect(result).toBe('ab0cde2');
  });

  it('should be 5x4y if the input is 4x5y', () => {
    const result = invertNumbers('4x5y');

    expect(result).toBe('5x4y');
  });
});
