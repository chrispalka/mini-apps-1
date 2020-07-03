var turnLog = {};
var turnArray = [];
var xWins = 0;
var oWins = 0;
var winner = '';
var solutionArray = [
  [
    'square1',
    'square2',
    'square3'
  ],
  [
    'square4',
    'square5',
    'square6'
  ],
  [
    'square7',
    'square8',
    'square9'
  ],
  [
    'square1',
    'square4',
    'square7'
  ],
  [
    'square2',
    'square5',
    'square8'
  ],
  [
    'square3',
    'square6',
    'square9'
  ],
  [
    'square1',
    'square5',
    'square9'
  ],
  [
    'square3',
    'square5',
    'square7'
  ]
];

var clicker = function (section) {

  // section.innerHTML = `<img src=${'./assets/o-transparent.png'} width='12%' height='25%'></img>`
  // console.log(section.getElementById('div1'))
  /* <img src=${'./assets/o-transparent.png'} width='7%' height='25%'></img> */
  var currentSquare = section.id;
  if (!turnLog.hasOwnProperty(currentSquare)) {
    var lastTurn = turnArray.pop()
    if (lastTurn === 'O' || lastTurn === undefined) {
      section.innerHTML = `<p>X</p>`;
      turnLog[currentSquare] = 'X';
      turnArray.push('X');
    } else {
      section.innerHTML = `<p>O</p>`;
      turnLog[currentSquare] = 'O';
      turnArray.push('O');
    }
  } else {
    alert('choose another spot!')
  }
  solutionChecker();
};


function solutionChecker() {
  var solutionCompiler = [];
  var winnerText = document.getElementById('winner-text');
  var newGameButton = document.getElementById('new-game-button');
  var oScoreBox = document.getElementById('o-score-box');
  var xScoreBox = document.getElementById('x-score-box');
    for (var i = 0; i < solutionArray.length; i++) {
      var solutions = solutionArray[i];
      for (var s = 0; s < solutions.length; s++) {
        solutionCompiler.push(turnLog[solutions[s]]);
      }
    }
    var sliced = solutionSlicer(solutionCompiler)
    for (var x = 0; x < sliced.length; x++) {
      if (sliced[x].join('') === 'XXX') {
        winnerText.innerHTML = `<h1>Player X Wins!</h1>`;
        newGameButton.style.display = 'inline'
        xWins++;
        console.log('xWins: ', xWins)
        xScoreBox.innerHTML = `X: ${xWins}`;
        winner = 'X';
        return;
      } else if (sliced[x].join('') === 'OOO') {
        winnerText.innerHTML = `<h1>Player O Wins!</h1>`;
        newGameButton.style.display = 'inline'
        oWins++;
        console.log('oWins: ', oWins)
        oScoreBox.innerHTML = `O: ${oWins}`;
        winner = 'O';
        return;
      }
    }
    if (!solutionCompiler.includes(undefined)) {
      winnerText.innerHTML = `<h1>Tie!</h1>`;
    }
}


function solutionSlicer(array) {
  var result = [];
  for (var i = 0; i < array.length; i = i + 3) {
    var sliceIt = array.slice(i, i + 3)
    result.push(sliceIt)
  }
  return result;
}

function clearGame() {
  var board = document.getElementById('board');
  var nodeList = board.childNodes;
  nodeList.forEach(function(node) {
    node.innerHTML = ''
  });
  turnLog = {}
  turnArray = [];
  document.getElementById('winner-text').innerHTML = ''
  document.getElementById('new-game-button').style.display = 'none';
}