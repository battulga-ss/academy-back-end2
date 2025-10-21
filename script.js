const getRandomNumber = () => {
  return Math.floor(Math.random() * 3) + 1;
};

const userValue = Number(
  window.prompt("Ymr durs gargah haich bol 1, chuluu bol2, daawubol 3")
);

console.log(getRandomNumber(), userValue);


if(userValue > getRandomNumber){
    console.log(window.alert("user yallaa"))
}else(console.log(window.alert("pc yallaa")))
if(userValue = getRandomNumber){
console.log(window.alert(window.alert("draw")))
} 