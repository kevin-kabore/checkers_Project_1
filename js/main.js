// console.log("Javascript connected");
// <img src="' + src + '" />'

var $blackPiece = "url('assets/black_piece.png')"

var board = []
function createTable() {
  var $table = $('table')
  for (var i = 0; i < 8; i++) {
    var $newTr = $('<tr>')
    board.push([])
    for (var j = 0; j < 8; j++) {
      var $newTD = $('<td>')
      $newTD.addClass("tile")
      $newTr.append($newTD);
      board[i].push($newTD)
    }
    $table.append($newTr)
  }
}
createTable();

function colorBoard(){
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if ((i+j)%2) {
        board[i][j].addClass('black');

        if (i < 2 ) {

        }
      } else {
        board[i][j].addClass('red');
        //if 5 & 7 add a piece
        if ( i >= 5 && i <=  7) {
          board[i][j].css('background-image', $blackPiece);
        }
      }
    }
  }
}
colorBoard()

function addPieces(){

}
addPieces();
