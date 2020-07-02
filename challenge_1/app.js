var turnLog = {};
var turnArray = [];
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
  console.log(turnLog)
  // section.setAttribute('id', `${section.getAttribute('id')} inactive`);
  // // section.innerHTML = `<img src=${'./assets/o-transparent.png'} width='12%' height='25%'></img>`
};


function solutionChecker() {
  var solutionCompiler = [];
  // if (!solutionCompiler.includes(undefined)) {
    //   console.log('tie')
    // }
    for (var i = 0; i < solutionArray.length; i++) {
      var solutions = solutionArray[i];
      for (var s = 0; s < solutions.length; s++) {
        solutionCompiler.push(turnLog[solutions[s]]);
      }
    }
    var sliced = solutionSlicer(solutionCompiler)
    for (var x = 0; x < sliced.length; x++) {
      if (sliced[x].join('') === 'XXX') {
        alert('X WINS!!');
        clearGame();
        return;
      } else if (sliced[x].join('') === 'OOO') {
        alert('O WINS!!');
        clearGame();
        return;
      }
    }
    if (!solutionCompiler.includes(undefined)) {
      alert('tie');
      clearGame();
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
}