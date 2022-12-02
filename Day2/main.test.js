const {describe, expect, test} = require('@jest/globals');
const {displayResults, runRPSGame} = require('./main');

describe('main', () => {
  describe('displayResults()', () => {
    const expectedTieGameText = 'Tie game! Final score: 1 - 1';
    const expectedP1WinsText = 'The winner is Player 1! Final score: 2 - 1';
    const expectedP2WinsText = 'The winner is Player 2! Final score: 1 - 2';

    test('when player 1 wins', () => {
      expect(displayResults(2, 1)).toBe(expectedP1WinsText);
    });

    test('when player 2 wins', () => {
      expect(displayResults(1, 2)).toBe(expectedP2WinsText);
    });

    test('when draw', () => {
      expect(displayResults(1, 1)).toBe(expectedTieGameText);
    });
  });

  describe('runRPSGame()', () => {
    const drawInput = ['A X']
    const p1WinsInput = ['A Z']
    const p2WinsInput = ['A Y']

    test('runs the RPS game when input favors a draw', () => {
      expect(runRPSGame(drawInput)).toBe("Tie game! Final score: 4 - 4");
    });

    test('runs the RPS game when input favors p1 winning', () => {
      expect(runRPSGame(p1WinsInput)).toBe("The winner is Player 1! Final score: 7 - 3");
    });

    test('runs the RPS game when input favors p2 winning', () => {
      expect(runRPSGame(p2WinsInput)).toBe("The winner is Player 2! Final score: 1 - 8");
    });
  });
});