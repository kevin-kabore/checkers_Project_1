var $board = []
var whiteCounter = 1;
var blackCounter = 1;
var turn = 0;
var startingRow;
var startingCol;
var validDiagonalsW = [];
var validDiagonalsB = [];
var whitePiecesTaken = 0;
var blackPiecesTaken = 0;

//Creates table cells
function createTable() {
  var $table = $("table")
  for (var i = 0; i < 8; i++) {
    var $newTr = $("<tr>")
    $board.push([])
    for (var j = 0; j < 8; j++) {
      var $newTD = $("<td>")
      $newTD.addClass("tile")
      $newTr.append($newTD);
      $board[i].push($newTD) //Add to board array
    }
    $table.append($newTr)
  }
}
createTable();


function setBoard(){
  for (var i = 0; i < $board.length; i++) {
    for (var j = 0; j < $board.length; j++) {
      if ((i+j)%2) {
        $board[i][j].addClass('black'); //sets colors and indexes board by row is and column js
        var newId = i+""+j;
        $board[i][j].attr("id",newId); //adds index by id
        $board[i][j].click(function(){
        })

      } else { //red squares
        $redSquare = $board[i][j].addClass('red');
        var newId = i+""+j
        $board[i][j].attr("id",newId);

        $board[i][j].click(function(){
          if (blackCounter%2 && whiteCounter%2){
            var row = this.id.split("")[0]
            var col = this.id.split("")[1]
            var clickedRow = parseInt(row)
            var clickedCol = parseInt(col)
            validDiagonalsW = [];
            validDiagonalsB = [];
            validDiagonalsW.push((clickedRow+1)+""+(clickedCol+1), (clickedRow+1)+""+(clickedCol-1));
            validDiagonalsB.push((clickedRow-1)+""+(clickedCol+1), (clickedRow-1)+""+(clickedCol-1));
          }
          //Make a move on click
          makeMove(this)})
        // sets board pieces
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

function makeMove(elem){

  var click = elem;
  var thisId = click.id.split("");

  //Functions to take pieces
        function takeBlackPiece(){
          var attemptRow = thisId[0]
          var attemptCol = thisId[1]
          var avgCol = ((parseInt(startingCol) + parseInt(attemptCol)) / 2)
          var avgRow = ((parseInt(startingRow)+parseInt(attemptRow))/2);
          var jump = "" + avgRow+''+avgCol
          if ($('#'+jump).hasClass("blackPieces")) { //win move valid
            $('#'+jump).removeClass("blackPieces"); //remove
            blackPiecesTaken = blackPiecesTaken + 1;
            $("#blackPiecesTaken").html(blackPiecesTaken)
            if (blackPiecesTaken == 12) {
              alert("Player 2 wins!")
            }
            $(click).addClass("whitePieces");
            whiteCounter = whiteCounter + 1;
            turn++;
        }
      }
        function takeWhitePiece (){
          var attemptRow = thisId[0]
          var attemptCol = thisId[1]
          var avgCol = ((parseInt(startingCol) + parseInt(attemptCol)) / 2)
          var avgRow = ((parseInt(startingRow)+parseInt(attemptRow))/2);
          var jump = "" + avgRow+''+avgCol

          if ($('#'+jump).hasClass('whitePieces')) {
            console.log("Win move valid");
            $('#'+jump).removeClass('whitePieces');
            whitePiecesTaken = whitePiecesTaken + 1;
            $("#whitePiecesTaken").html(whitePiecesTaken)
            if (whitePiecesTaken == 12) {
              alert("Player 1 wins!")
            }
            $(click).addClass("blackPieces")
            blackCounter = blackCounter +1
            turn++;
            console.log("It's Player 2's turn");
        }
        }
  if (turn % 2) {
    //Player 2 first click
    if ($(click).hasClass("whitePieces") && (whiteCounter%2 !== 0)) {
        startingRow = thisId[0] //store row
        startingCol = thisId[1] //store col
        $(click).removeClass("whitePieces"); //remove
        whiteCounter = whiteCounter +1; // increment click count
        //on Player 2 second click
      } else if(!$(click).hasClass('whitePieces') && whiteCounter%2 == 0) {
        //if red space, not on black piece, and move is diagonal, add white piece
          if ($(click).hasClass("red") && !$(click).hasClass("blackPieces") && (validDiagonalsW.indexOf($(click)[0].id) !== -1)) {
            $(click).addClass("whitePieces")
            whiteCounter = whiteCounter + 1;
            turn++;
         } else if ($(click).hasClass("red") && !$(click).hasClass("blackPieces")) {
            takeBlackPiece() //run function to check for capture
            }
        } else if ($(click).hasClass("blackPieces")) {
          alert("Sorry, it's not your turn.");
        }

  } else { // else on black's turn
    // on Player 1's 1st click
    if ($(click).hasClass("blackPieces") && (blackCounter%2 !== 0)) {
      startingRow = thisId[0]
      startingCol = thisId[1]
      $(click).removeClass("blackPieces");
      blackCounter= blackCounter + 1;
    //on Player 2's seconf click
    } else if(!$(click).hasClass('blackPieces') && blackCounter%2 == 0) {
        //if red space, not on white piece, and move is diagonal, add black piece
        if ($(click).hasClass("red") && !($(click).hasClass("whitePieces")) && (validDiagonalsB.indexOf($(click)[0].id) !== -1)){
          $(click).addClass("blackPieces")
          blackCounter = blackCounter +1;
          turn++;
        } else if ($(click).hasClass("red") && !($(click).hasClass("whitePieces"))) {
          takeWhitePiece()
          }
        } else if ($(click).hasClass("whitePieces")) {
          alert("Sorry, it's not your turn.")
        }
      }


    }
