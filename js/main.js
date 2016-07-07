// console.log("Javascript connected");


var $board = []
var whiteCounter = 1;
var blackCounter = 1;
var turn = 0;
var startingRow;
var startingCol;
var $validMovesWhite = []
var $validMovesBlack = []

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
        var newId = i+""+j;
        $board[i][j].attr("id",newId);

      } else {
        $redSquare = $board[i][j].addClass('red');
        $board[i][j].click(makeMove)
          // function(){

          // validMovesWhite[((i+1)+""+(j+1)), ((i+1)+""+(j-1))];
          // validMovesBlack[((i-1)+""+(j+1)),((i-1)+""+(j-1))];
          // console.log("Hello");
          // makeMove()})

        var newId = i+""+j
        $board[i][j].attr("id",newId);
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


//Still need a way to keep one single variable to keep track of turns
function makeMove(){

  var click = this;
  var thisId = click.id.split("");


  console.log(thisId)
  if (turn % 2) {

    if ($(click).hasClass("whitePieces") && (whiteCounter%2 !== 0)) {
        startingRow = thisId[0]
        startingCol = thisId[1]

        console.log("startingRow:" + startingRow)
        console.log("startingCol:" +startingCol)
      //add logic to check  for bad moves
        $(click).removeClass("whitePieces");
        whiteCounter = whiteCounter +1;
      } else if(!$(click).hasClass('whitePieces') && whiteCounter%2 == 0) {
          if ($(click).hasClass("red") && !$(click).hasClass("blackPieces")) {
            var attemptRow = thisId[0]
            var attemptCol = thisId[1]
            console.log("attemptRow:"+attemptRow);
            console.log("attemptCol:"+attemptCol);

            var avgCol = ((parseInt(startingCol) + parseInt(attemptCol)) / 2)
            var avgRow = ((parseInt(startingRow)+parseInt(attemptRow))/2);
            console.log("average Col:"+avgCol)
            console.log("average Row:" + avgRow);

            var jump = "" + avgRow+''+avgCol
            console.log("jump:"+jump+"")

            if ($('#'+jump).hasClass('blackPieces')) {
              console.log("Win move valid");
              $('#'+jump).removeClass('blackPieces');
            }
            $(click).addClass("whitePieces")
            whiteCounter = whiteCounter + 1;
            turn++;
        }else {
          alert("Invalid");
        }
      }

  } else {
    if ($(click).hasClass("blackPieces") && (blackCounter%2 !== 0)) {
    //Add logic to check for bad moves

      startingRow = thisId[0]
      startingCol = thisId[1]
      console.log("startingRow:" + startingRow)
      console.log("startingCol:" +startingCol)

      $(click).removeClass("blackPieces");
      blackCounter= blackCounter + 1;
    } else if(!$(click).hasClass('blackPieces') && blackCounter%2 == 0) {
        console.log(click);
        if ($(click).hasClass("red") && !($(click).hasClass("whitePieces"))) {

          var attemptRow = thisId[0]
          var attemptCol = thisId[1]
          console.log("attemptRow:"+attemptRow);
          console.log("attemptCol:"+attemptCol);


          var avgCol = ((parseInt(startingCol) + parseInt(attemptCol)) / 2)
          var avgRow = ((parseInt(startingRow)+parseInt(attemptRow))/2);
          console.log("average Col:"+avgCol)
          console.log("average Row:" + avgRow);

          var jump = "" + avgRow+''+avgCol
          console.log("jump:"+jump+"")

          if ($('#'+jump).hasClass('whitePieces')) {
            console.log("Win move valid");
             $('#'+jump).removeClass('whitePieces');

          }
          $(click).addClass("blackPieces")
          blackCounter = blackCounter +1;
          turn++;
        } else{
          alert("Invalid")
        }

    }
  }

}
