//togloomin func uudee importljiin

import { rockpaper } from "./games/rockpaper.js";
import { number } from "./games/number.js";
import { word } from "./games/word.js";
import { dice } from "./games/dice.js";

//togloomiin func uudiig aguulsan object zarlaj
const games = {
  rockpaper: rockpaper,
  word: word,
  dice: dice,
  number: number
};
// togloomiin ur dung hadgalah array zarlaj bn
const resulArray = [];
// toglogdoj baigaa tolgoomin neriig hadgalah huwisagch
let currentGame = "";

const playGame = () => {
  //togloomiin ur dung hadgalah object huwisagch zarlaw
  gameResult = {};

  if (currentGame) {
    gameResult = games[gameValue]();
  } else {
    const currentGame = window.prompt("Ymar togloom togloh we");

    gameResult = games[currentGame]();
  }

  resulArray.push(gameResult);

  const playAgain = window.prompt(
    "zogsooh 0, oor togloom togloh bol 1, dahin togloh bol 2"
  );

  if (playAgain === "0") {
    return resulArray;
  } else if (playAgain === "1") {
    currentGame = "";
    return playGame();
  } else if (playAgain === "2") {
    return playGame();
  }
};

playGame();
console.log(resulArray);
