/* Unit: Ruby vs JS

COOL STRINGS
Morning Challenge 1
--------------------
1. Create a new variable called coolstrings which cannot be reassigned
2. Set its value to 'coolstrings'
3. Create a second variable called numbers which can be reassigned
4. Set its value to 7

Questions
--------------------
Instead of using:
  def()
  //
  end
1. What is the main way to write methods in JavaScript? function functionName() {}
2. Instead of puts, what does JavaScript use instead? console.log()

*/

const coolstrings = 'coolstrings' // cannot be reassigned
var numbers = 7 // can be reassigned

function setNumbers(num) {
  numbers = num;  
}
var assert = require('assert');
  
describe('coolstrings', () => {
    it('checks that coolstrings cannot be changed', function() {
      try {
        coolstrings = 'abc';
      } catch (err) {
        //do nothing
      }
      assert.equal(coolstrings,"coolstrings");
    });
});

describe('numbers function', () => {
  it('checks that numbers can be changed', function() {
    setNumbers(9);
    assert.equal(numbers, 9);
  });
});