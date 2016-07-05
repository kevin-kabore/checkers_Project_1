// console.log("Javascript connected");
var board = []

var $table = $('table')
for (var i = 0; i < 8; i++) {
  var $newTr = $('<tr>')
  for (var j = 0; j < 8; j++) {
    var $newTD = $('<td>')
    $newTr.append($newTD);
  }
  $table.append($newTr)

  // for loop
}

board.push($table);
