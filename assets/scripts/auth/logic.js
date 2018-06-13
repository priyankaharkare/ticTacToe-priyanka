// const getFormFields = require('../../../lib/get-form-fields')
// // const authApi = require('./api1')
//
// let gameBoard = ['', '', '', '', '', '', '', '', '']
// // const playerX = 'X' // assign each player a string
// // const playerY = 'O'
// // // let currentPlayer = playerX
//
// let currentTurn = 0 // need to know whose turn it is
// let movesMade = 0 // how many moves made needed to later calculate the min/max
//
//
//
//
//
// // moves made
// // grab a value of the clicked on cell and push it to the corresponding index in the game board index
// //  create a variable for current player. then do x and Y
// // let onClick = function () {
// //   console.log(this)
// //   $(this).text(currentPlayer)
// //   switchPlayers()
// // }
// // // trying to create a function
// //
// // let switchPlayers = function () {
// //   if (currentPlayer === 'X') {
// //     currentPlayer = playerY // playerY  'o'
// //   } else {
// //     currentPlayer = playerX // player  //X //'X   '
// //   }
// //   console.log('currentPlayer is ' + currentPlayer)
// // }
// // click once
//
// // const playerX = 'X'
// // const playerO = 'O'
// let currentPlayer = 'X'
//
// const switchPlayer = function (event) {
//   if (currentPlayer === 'X') { // playerX
//     console.log(`current player 1 is ` + currentPlayer)
//     // document.getElementById(event.target.id).innerHTML = currentPlayer
//     currentPlayer = 'O'
//     console.log(`current player 2 is ` + currentPlayer)
//   } else if (currentPlayer === 'O') {
//     console.log(`current player 3 is ` + currentPlayer)
//     //  document.getElementById(event.target.id).innerHTML = currentPlayer
//     currentPlayer = 'X'
//     console.log(`current player 4 is  ` + currentPlayer)
//   }
// }
//
// // const switchPlayer = function (value) {
// //    if (currentTurn === 1) {
// //     event.target.innerHTML = playerX
// //     currentTurn++ // we check which player's turn it is.
// //   } else {
// //     event.target.innerHTML = playerY
// //     currentTurn--
// //     movesMade++
// //   }
// //   console.log(movesMade)
// // }
//
// // const onClick = function () {
// //   let symbol = $(this).attr('id')     // Got the ids from the clicked divs
// //   console.log(symbol)               //( Get ids from class selectors)
// // }
// // https://stackoverflow.com/questions/5470729/jquery-get-id-from-class-selector
// module.exports = {
//   // onClick: onClick,
//   switchPlayer: switchPlayer
//   //onClick: onClick

// const didAnyoneWin = function (event) {
//   if (gameBoard[0] === gameBoard[3] === gameBoard[6]) {
//     console.log(currentPlayer + 'wins')
//   } else if
//   (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
//     console.log(currentPlayer + 'wins')
//   } else if
//   (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
//     console.log(currentPlayer + 'wins')
//   } else if
//   (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
//     console.log(currentPlayer + 'wins')
//   } else if
//   (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
//     console.log(currentPlayer + 'wins')
//   } else if
//   (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
//     console.log(currentPlayer + 'wins')
//   }
// }
