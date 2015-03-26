//tictactoe board array.
var board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

//wins on row x 3, wins on columns x 3, wins on diagonal x 3.
var checkWin = function() {
    
    if ("X" === board[0][0] && "X" === board[0][1] && "X" === board[0][2]) {
        result = 'wins';
        alert("Winner is X");
    } else if ("X" === board[1][0] && "X" === board[1][1] && "X" === board[1][2]) {
        result = 'wins';
        alert("Winner is X");
    } else if ("X" === board[2][0] && "X" === board[2][1] && "X" === board[2][2]) {
        result = 'wins';
        alert("Winner is X");
    } else if ("X" === board[0][0] && "X" === board[1][0] && "X" === board[2][0]) {
        result = 'wins';
        alert("Winner is X");
    } else if ("X" === board[0][1] && "X" === board[1][1] && "X" === board[2][1]) {
        result = 'wins';
        alert("Winner is X");
    } else if ("X" === board[0][2] && "X" === board[1][2] && "X" === board[2][2]) {
        result = 'wins';
        alert("Winner is X");
    } else if ("X" === board[0][0] && "X" === board[1][1] && "X" === board[2][2]) {
        result = 'wins';
        alert("Winner is X");
    } else if ("X" === board[0][2] && "X" === board[1][1] && "X" === board[0][2]) {
        result = 'wins';
        alert("Winner is X");
    } else if ("O" === board[0][0] && "O" === board[0][1] && "O" === board[0][2]) {
        result = 'wins';
        alert("Winner is O");
    } else if ("O" === board[1][0] && "O" === board[1][1] && "O" === board[1][2]) {
        result = 'wins';
        alert("Winner is O");
    } else if ("O" === board[2][0] && "O" === board[2][1] && "O" === board[2][2]) {
        result = 'wins';
        alert("Winner is O");
    } else if ("O" === board[0][0] && "O" === board[1][0] && "O" === board[2][0]) {
        result = 'wins'
        alert("Winner is O");
    } else if ("O" === board[0][1] && "O" === board[1][1] && "O" === board[2][1]) {
        result = 'wins';
        alert("Winner is O");
    } else if ("O" === board[0][2] && "O" === board[1][2] && "O" === board[2][2]) {
        result = 'wins';
        alert("Winner is O");
    } else if ("O" === board[0][0] && "O" === board[1][1] && "O" === board[2][2]) {
        result = 'wins';
        alert("Winner is O");
    } else if ("O" === board[0][2] && "O" === board[1][1] && "O" === board[0][2]) {
        result = 'wins';
        alert("Winner is O");
    } else {
        result = 'draw';
    }
}

//this points out the html-board-input, the ".on" jquery command, click for noise then function. "this" indicates simply what button I pushed. ".val" changes the value of the current label with the new "    X    ".
var counter = 0;

$(".board input").on('click', function() {
    counter += 1;
//    console.log(this.id);
    $(this).val("   X    "); //input can be made in place of X.
    console.log(counter);

//this converts id in html back into an array to be converted to readable code.
var idArray = this.id.split('-')
var xPos = parseInt(idArray[1])
var yPos = parseInt(idArray[2])
board[xPos][yPos] = 'X';

//the following code represents odds/evens which changes the above "X" to a "O" and back again after each click...... also posts result to the html & the array in .js ..........YAY!

    if (counter % 2 == 1) {
        $(this).val("    X    ").addClass('xclass');
        board[xPos][yPos] = 'X'
    } else {
        $(this).val("    O    ").addClass('oclass');
        board[xPos][yPos] = 'O'
    }
    checkWin()

});

//once game completed, reset the game for a new start.
document.getElementById("resetGame").onclick = function() {
   document.getElementById("resetGame").value = "";
};

//$('#counter').html(function(i, val) { return +val+1 });//counter triggered by key press, appears on console only.