/* LARGEST NUMBER

Morning Challenge 2
--------------------
1. Write a method that will take an array of numbers
2. Return whichever is the largest.
*/

let largestNumber = 0

function largestNumber(arr) {
    let arr = [] // set empty array for numbers
    for(let num of arr) {// iterate through array
        largestNumber += num
    }
    return largestNumber
}

var assert = require('assert');

describe('largestNumber', function () {
    it('should return the largest number', function () {
        assert.equal(10, largestNumber([5, -2, 10]));
    })
    it('should ignore invalid array entries', function () {
        assert.equal(10, largestNumber([10, 10, 's']));
    })
    it('should return null if the array is empty', function () {
        assert.equal(null, largestNumber([]))
    })

})