// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// mocha 05_sum_numbers.js

/* 
    Try Kieran's reduce method!

    x = [1, 2, 3, 4]

    function add (a, b) {
        return a + b
    }

    y = x.reduce(add, 0) // 0 is default if you don't set the current
    y = 10

*/

function findWinner(players) {
    // iterate through players array to find highest score (number)
    // return player name with highest score
    let highestScore = 0
    let name = ''
    for (let player of players) {
        let totalScore = 0
        for (let score of player.scores) {
            totalScore += score
        }
        if (totalScore > highestScore) {
           highestScore = totalScore
           name = player.name 
        }
    }
    return name
}

var assert = require('assert');

class Player {
    constructor(name, scores) {
        this.name = name
        this.scores = scores
    }
}

let players = []

// Test
describe('findWinner', function () {
    it('Should return the winner when winner is first in array', function () {
        players = [new Player('James', [50, 100, 85], new Player('Nathan', [55, 90, 86]))]
        assert.equal('James', findWinner(players))
    })
    it('Should return the winner when winner is second in array', function () {
        players = [new Player('Nathan', [50, 100, 85], new Player('James', [55, 90, 86]))]
        assert.equal('Nathan', findWinner(players))
    })
    it('Should return the first player when both players are tied', function () {
        players = [new Player('Nathan', [50, 100, 85], new Player('James', [50, 100, 85]))]
        assert.equal('Nathan', findWinner(players))
    })
})