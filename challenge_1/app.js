// grab all divs individually

// var topLeft = document.getElementById('div1');
// var topMid = document.getElementById('div2');
// var topRight = document.getElementById('div3');
// var midLeft = document.getElementById('div4');
// var midMid = document.getElementById('div5');
// var midRight = document.getElementById('div6');
// var botLeft = document.getElementById('div7');
// var botMid = document.getElementById('div8');
// var botRight = document.getElementById('div9');

var turnLog = {};
var turnArray = [];


var clicker = function (section) {
  // section.innerHTML = `<img src=${'./assets/o-transparent.png'} width='12%' height='25%'></img>`
  // console.log(section.getElementById('div1'))

  var currentSquare = section.id;
  if (!turnLog.hasOwnProperty(currentSquare)) {
    turnLog[currentSquare] = currentSquare;
    var lastTurn = turnArray.pop()
    if (lastTurn === 'O' || lastTurn === undefined) {
      section.innerHTML = '<p>X</p>';
      turnArray.push('X');
    } else {
      section.innerHTML = '<p>O</p>';
      turnArray.push('O');
    }
  } else {
    alert('choose another spot!')
  }
  // section.setAttribute('id', `${section.getAttribute('id')} inactive`);
  // // section.innerHTML = `<img src=${'./assets/o-transparent.png'} width='12%' height='25%'></img>`

}

