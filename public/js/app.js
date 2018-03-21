var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

function createGame(){
  for (var i = 0; board.length > i; i ++){
  console.log('ivariable', i)


  let square = document.createElement('div');
  console.log('sqaure div' , square)


  document.getElementsByClassName('gameboard')
  gameboard.appendChild(square)
  square.id = i
  addClickListener(square)

  if (i === 0 || i === 1 || i === 3 || i === 4 ){
    square.setAttribute('class', 'square b-border r-border')
  }
  else if (i === 2 || i === 5){
    square.setAttribute('class', 'square b-border')
  }
  else if (i < 8){
    square.setAttribute('class', 'square r-border')
  }
  else {
    square.setAttribute('class', 'square')
  }
}
}

  function displayMessage(message){
    var messageElement = document.getElementsByClassName('message')[0]
    if (message){messageElement.innerHTML = message
    }

    else {
      messageElement.innerHTML = 'Current Player: ' + currentPlayer
    }
  }

    function makeMove(square , index){
      var messageElement = document.getElementsByClassName('message')[0]
      board[index] = currentPlayer
      square.innerHTML = currentPlayer

  }

  function changeMessage(){
    var messageElement = document.getElementsByClassName('message')[0]
    messageElement.setAttribute('class' , 'end-message message' )
  }


 createGame();
