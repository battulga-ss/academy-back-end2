

const rockpaper = () => {
  console.log("Haich chuluu daawuu togloh gj bn");
};

const games = {
  rockpaper,
  word: () => {
    console.log("Word guess tgloh gej bna ");
  },
  dice: () => {
    console.log("Dice guess tgloh gej bna ");
  },
  number: () => {
    console.log("Number guess tgloh gej bna ");
  }
};

window,alert("togloomoo songonuu");


const game = window.prompt("dice , word , haich chuuu daawuu, number ");

games[game]();

const shoo1 = Math.floor(Math.random() * 6) + 1;
const shoo2 = Math.floor(Math.random() * 6) + 1;
const resultShoo = shoo1 + shoo2















if(resultShoo >= 8 ){window.alert ("hojloo")}
  else(window.alert("hojigdloo"));

