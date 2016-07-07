// console.log("Javascript connected");


var $board = []
var whiteCounter = 1;
var blackCounter = 1;
var turn = 0;
var startingRow;
var startingCol;
var validDiagonalsW = [];
var validDiagonalsB = [];

//Function creates table rows and cells
//using a for loop and pushing to the "board" array
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
//Calls createTable function
createTable();

//This function sets the boards alternating color properties
//Simulatneously sets the pieces on the first three and last three rows of the board
//Also simulatneously gives each table cell an id of rows and columns
function setBoard(){
  for (var i = 0; i < $board.length; i++) {
    for (var j = 0; j < $board.length; j++) {
      if ((i+j)%2) {
        //Sets board cell to color black & sets id on iteration
        $board[i][j].addClass('black');
        var newId = i+""+j;
        $board[i][j].attr("id",newId);

      } else {
        //Sets board cell to color red  & sets id on iteration
        $redSquare = $board[i][j].addClass('red');
        //addsId to cell
        var newId = i+""+j
        $board[i][j].attr("id",newId);

        $board[i][j].click(function(){
          //Saves id (index) on click to check for valid diagonal moves
          //on each click
          //split function turns to string, must parseInt on push
          if (blackCounter%2 && whiteCounter%2){
            var clickedRow = this.id.split("")[0]
            var clickedColumn = this.id.split("")[1]
            console.log(this.id.split(""));
            //Clears array on every move
            validDiagonalsW = [];
            validDiagonalsB = [];
            console.log('diagonal arrays cleared');
            //parseInt to add integer and store valid diagonal moves
            validDiagonalsW.push((parseInt(clickedRow)+1)+""+(parseInt(clickedColumn)+1), (parseInt(clickedRow)+1)+""+(parseInt(clickedColumn)-1));
            validDiagonalsB.push((parseInt(clickedRow)-1)+""+(parseInt(clickedColumn)+1), (parseInt(clickedRow)-1)+""+(parseInt(clickedColumn)-1));
            console.log('diagonal arrays set!');
            console.log(validDiagonalsB);
          }
          // console.log(validDiagonalsW);
          // console.log("Hello");
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


//Still need a way to keep one single variable to keep track of turns
function makeMove(elem){

  var click = elem;

  var thisId = click.id.split("");

  if (turn % 2) {
    //on White's turn store index values of first click if white piece present
    if ($(click).hasClass("whitePieces") && (whiteCounter%2 !== 0)) {
        startingRow = thisId[0]
        startingCol = thisId[1]
      //add logic to check  for bad moves
      //remove the white piece from spot update counter to keep track of move
        $(click).removeClass("whitePieces");
        whiteCounter = whiteCounter +1;

        //on second click for white
      } else if(!$(click).hasClass('whitePieces') && whiteCounter%2 == 0) {

        //if red space, not on black piece, and move is diagonal, add white piece
          console.log(validDiagonalsW);
          if ($(click).hasClass("red") && !$(click).hasClass("blackPieces") && (validDiagonalsW.indexOf($(click)[0].id) !== -1)) {

            $(click).addClass("whitePieces")
            whiteCounter = whiteCounter + 1;
            turn++;
         } else if ($(click).hasClass("red") && !$(click).hasClass("blackPieces")) {
            //check if there is a blackPiece in the middle
            var attemptRow = thisId[0]
            var attemptCol = thisId[1]

            var avgCol = ((parseInt(startingCol) + parseInt(attemptCol)) / 2)
            var avgRow = ((parseInt(startingRow)+parseInt(attemptRow))/2);

            var jump = "" + avgRow+''+avgCol

            if ($('#'+jump).hasClass('blackPieces')) {
              console.log("Win move valid");
              $('#'+jump).removeClass('blackPieces');

              $(click).addClass("whitePieces");
              whiteCounter = whiteCounter + 1;
              turn++;
            }

        } else {
          alert("Invalid");
        }
      }
      // else on black's turn
  } else {
    // on 1st click if on black piece, remove piece, store starting spot
    if ($(click).hasClass("blackPieces") && (blackCounter%2 !== 0)) {

      startingRow = thisId[0]
      startingCol = thisId[1]

      $(click).removeClass("blackPieces");
      blackCounter= blackCounter + 1;

      //on second click for black
      // if does not have black piece and is the second move for black
    } else if(!$(click).hasClass('blackPieces') && blackCounter%2 == 0) {

        //if red space, not on white piece, and move is diagonal, add black piece
        if ($(click).hasClass("red") && !($(click).hasClass("whitePieces")) && (validDiagonalsB.indexOf($(click)[0].id) !== -1)) {
          $(click).addClass("blackPieces")
          blackCounter = blackCounter +1;
          turn++;

        } else if ($(click).hasClass("red") && !($(click).hasClass("whitePieces"))) {

          //check if there is a white piece in the middle and remove it
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

            $(click).addClass("blackPieces")
            blackCounter = blackCounter +1
            turn++;
          }

        } else{
          alert("Invalid")
        }
      }
    }
  }
