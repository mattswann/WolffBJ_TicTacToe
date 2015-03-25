//tictactoe board array.
var board = [[" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]];

//wins on row x 3, wins on columns x 3, wins on diagonal x 3.
var checkWin = function() {
	var row = board[[0][0], [0][1], [0][2],
					[1][0], [1][1], [1][2],
					[2][0], [2],[1], [2][2]];

	var column = board[[0][0], [1][0], [2][0],
					[0][1], [1][1], [2][1],
					[0][2], [1],[2], [2][2]];

	var diagonal = board[[0][0], [1][1], [2][2],
					[0][2], [1][1], [2][0]];

if (board[0][0] === board[0][1] === board[0][2])	{
	result = 'wins';
}	else if (board[1][0] === board[1][1] === board[1][2]) {
	result = 'wins';
}	else if (board[2][0] === board[2][1] === board[2][2]) {
	result = 'wins';
}	else if (board[0][0] === board[1][0] === board[2][0]) {
	result = 'wins';
}	else if (board[0][1] === board[1][1] === board[2][1]) {
	result = 'wins';
}	else if (board[0][2] === board[1][2] === board[2][2]) {
	result = 'wins';
}	else if (board[0][0] === board[1][1] === board[2][2]) {
	result = 'wins';	
}	else if (board[0][2] === board[1][1] === board[0][2]) {
	result = 'wins';
}	else	{
	result = 'draw';
}
}

//this points out the html-board-input, the ".on" jquery command, click for noise then function. "this" indicates simply what button I pushed. ".val" changes the value of the current label with the new "    X    ".
var counter = 0;

$(".board input").on('click', function() { 
	counter += 1;
  console.log(this);
  $(this).val("   X    ");//input can be made in place of X.
  console.log(counter);

//the following code represents odds/evens which changes the above "X" to a "O" and back again after each click...... YAY!
  if (counter%2 == 1) {
	$(this).val("    X    ");
	console.log("isOdd")
	}	else {
	$(this).val("    O    ")
	console.log("isEven")
	}
});

if (checkWin.row || coloumn || diagonal === X)	{
	result ("X wins");
}	else	(checkWin.row || column || diagonal === O) {
	result ("O wins");
	console.log(winner)
}






//once game completed, reset the game for a new start.



//$('#counter').html(function(i, val) { return +val+1 });//counter triggered by key press, appears on console only.
