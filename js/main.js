// console.log("Javascript connected");

var $blackPiece = "url('assets/black_piece.png')"
var $whitePiece = "url('assets/white_piece.png')"
var $board = []

function createTable() {
  var $table = $('table')
  for (var i = 0; i < 8; i++) {
    var $newTr = $('<tr>')
    $board.push([])
    for (var j = 0; j < 8; j++) {
      var $newTD = $('<td>')
      $newTD.addClass("tile")
      $newTr.append($newTD);
      $board[i].push($newTD)
    }
    $table.append($newTr)
  }
}
createTable();

function setBoard(){
  for (var i = 0; i < $board.length; i++) {
    for (var j = 0; j < $board.length; j++) {
      if ((i+j)%2) {
        $board[i][j].addClass('black');
      } else {
        $board[i][j].addClass('red');
        if ( i >= 5 && i <=  7) {
          $board[i][j].css('background-image', $blackPiece);
        } else if (i <= 2 ) {
          $board[i][j].css('background-image', $whitePiece);
        }
      }
    }
  }
}
setBoard()

function makeMove(){
  for (var i = 0; i < $board.length; i++) {
    for (var j = 0; j < $board.length; j++) {
      $board[i][j].click(function(){
        alert('You clicked')
      })
    }
  }
 }
makeMove();
