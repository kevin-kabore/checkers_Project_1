// console.log("Javascript connected");


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
var counter = 0;
function setBoard(){

  for (var i = 0; i < $board.length; i++) {
    for (var j = 0; j < $board.length; j++) {
      if ((i+j)%2) {
        $board[i][j].addClass('black');
        $board[i][j].click(selectContent)

      } else {
        $board[i][j].addClass('red');
        $board[i][j].click(selectContent)
        if ( i >= 5 && i <=  7) {
          $board[i][j].addClass('blackPieces');

        } else if (i <= 2 ) {
          $board[i][j].addClass('whitePieces');

        }
      }
    }
  }
}
setBoard()




//
// $('.myClass').click(function() {
//   var clicks = $(this).data('clicks');
//   if (clicks) {
//      // odd clicks
//   } else {
//      // even clicks
//   }
//   $(this).data("clicks", !clicks);
// });

var secondClick;
var content;
var whiteCounter = 1;
var blackCounter = 1;

//Still need a way to keep one single variable to keep track of turns
function selectContent(){

  if ($(this).hasClass("whitePieces") && (whiteCounter%2 !== 0)) {
    //add logic to check  for bad moves
      $(this).removeClass("whitePieces");
      whiteCounter= whiteCounter + 1;
    } else if(!$(this).hasClass('whitePieces') && whiteCounter%2 == 0) {
      $(this).addClass("whitePieces")
      whiteCounter = whiteCounter +1;
    }


  if ($(this).hasClass("blackPieces") && (blackCounter%2 !== 0)) {
    //Add logic to check for bad moves
      $(this).removeClass("blackPieces");
      blackCounter= blackCounter + 1;
    } else if(!$(this).hasClass('blackPieces') && blackCounter%2 == 0) {
      $(this).addClass("blackPieces")
      blackCounter = blackCounter +1;
    }
  }
