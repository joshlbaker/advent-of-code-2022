const {readFileSync} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  return contents.split(/\r?\n/);;
}

const input = syncReadFile('input.txt');

const baseScores = {
  'A': 1,
  'X': 1,
  'B': 2,
  'Y': 2,
  'C': 3,
  'Z': 3,
}

const winningBonus = 6
const drawBonus = 3
const p1WinningCombos = ['A Z', 'B X', 'C Y'];
const p2WinningCombos = ['A Y', 'B Z', 'C X'];
const drawCombos = ['A X', 'B Y', 'C Z'];

const displayResults = (p1Points, p2Points) => {
  let winner = `Player ${p1Points > p2Points ? '1' : '2'}`;

  if (p1Points === p2Points) winner === 'Tie';

  return `${p1Points === p2Points ? 'Tie game!' : `The winner is ${winner}!`} Final score: ${p1Points} - ${p2Points}`
}

const runRPSGame = (rounds) => {
  let totalP1Points = 0;
  let totalP2Points = 0;

  rounds.forEach((round) => {
    const player1 = round.charAt(0);
    const player2 = round.charAt(round.length - 1);
  
    let p1Points = baseScores[player1]
    let p2Points = baseScores[player2]
  
    if (drawCombos.includes(round)) {
      // draw 
      p1Points+= drawBonus;
      p2Points+= drawBonus;
    } else if (p1WinningCombos.includes(round)) {
      // player 1 wins 
      p1Points+= winningBonus;
    } else if (p2WinningCombos.includes(round)) {
      // player 2 wins 
      p2Points+= winningBonus;
    }
  
    totalP1Points+= p1Points;
    totalP2Points+= p2Points;
  })

  // console.log(displayResults(totalP1Points, totalP2Points))

  return displayResults(totalP1Points, totalP2Points);
}

runRPSGame(input);

module.exports = { displayResults, runRPSGame };
