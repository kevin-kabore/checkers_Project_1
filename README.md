#[Checkers](https://kevin-kabore.github.io/checkers_Project_1)
----------------

#### About the Game
Checkers is a two player game in which players compete against each other by trying to capture all of their opponent's pawns.
Players move their pawns by advancing them diagonally. They can capture their opponents pawns by "jumping" over them to an open position.
A player wins when he/she captures all of his opponent's pawns.

#####[Check out the game here](https://kevin-kabore.github.io/checkers_Project_1/)

##### rules
- Player 1 (black) starts the game
- Select pawn you wish to move on 1st click
- Move your pawn to a valid location of the board on second click
- Player may only move pawns diagonally
- Turns alternate after every complete move
- Capture opponent's pawns by jumping one position over them
- To win the game, capture all of your opponent's pieces!

##### Technologies used include:
- HTML & CSS
- Javascript & jQuery

To run the project locally, you may clone the repo, download it and open the index.html file in a browser.

##### Approach
The board was set using a javascript functions that creates an 8x8 table by appending table cells to rows. The same function indexes
each cell by row and column number. On every click, a function is called to check the validity of the move by
crosschecking the initial properties of the initial and second clicked elements.

Unsolved Problems include dynamically displaying who's turn it is, turning a pawn into a kind, and double skipping - all of which are
are next steps.

###Trello board: https://trello.com/b/q5g6nd3V/project-1-checkers

### Wireframe
[Breakout Wireframe](assets/IMG_3266.JPG)
