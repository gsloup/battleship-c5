# Battleship

# About
This application was the final group project for Midland Code Acadmeny

Link to the hosted project: http://midland-battleship.herokuapp.com/ 

This project was built with Angular 10, using Google Firebase for the authentication and database, and is hosted through Heroku

# Rules
* Each player has 2 10x10 boards in front of them, one for their ships and one for the enemies space.
* Starting off they have to place 4 ships of different sizes vertically or horizontally on your board
    * Destroyer - 2x1 ship
    * Submarine - 3x1 ship
    * Battleship - 4x1
    * Carrier - 5x1 ship
 * Players then take turns trying to guess where the enemy ship is. They either hit or miss
 * When one player's ships have been hit on all of their spaces, the opposing player wins

# Features
* Google user authentication to allow for multiple games / invites
* Chat functionality for users to communicate in real time using sockets
* Feedback for hits/misses and when a ship is sunk
* Status box lets users know if the game is ready and whose turn it is
* Upon winning game, players get a pop-up that declares winner, and lets them quit the game

# My (Garrett Sloup) Contribution to the Project
* I was the tech lead in the 5-person project, handling the pull requests with our teacher, making the big picture decisions, and handling the more difficult tasks.
* Directed and helped other students find branches to work on, while taking on a lot of difficult aspects of the game for my branches.
* Coded the game board UI and logic to determine ship placement, valid/invalid hits, game flow, checking if game is over, determining who won, etc.
* Standardized and fixed the styling UI/UX among the different pages for a consistent styling pattern among the different pages.
* Added form validation to the "join game" feature to only allow valid game codes to be entered before trying to join a game.
* Managed merge conflicts and responsible for keeping the code base to a certain standard, while also not micromanaging the other developers letting them express their own creativity.
