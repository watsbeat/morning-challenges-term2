/* LARGEST NUMBER

Morning Challenge 2
--------------------
1. Write a method that will take an array of numbers
2. Return whichever is the largest.
*/

function largestNumber(arr) {
    let largest
    for(let num in arr) { // for in or for of?
        if (largest) {
            if (arr[num] != NaN && arr[num] > largest) {
                largest = arr[num]
            }
        } else {
            if (arr[num] != NaN) {
                largest = arr[num] // ignores invalid array entries
            }
        }
    }
    if (largest) {
        return largest // returns the largest number
    } else {
        return null // returns null if the array is empty
    }
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