

const dice = document.getElementById("button1")
const RPS = document.getElementById("button2")
const GuessNumber = document.getElementById("button3")
const GuessWord = document.getElementById("button4")
const exit = document.getElementById("button5")
const togloh = document.getElementById("RunBtn")
const result = document.getElementById("result")



//dice






 const runBtn = () => {


const shoo1 = Math.floor(Math.random() * 6) + 1
const shoo2 = Math.floor(Math.random() * 6) + 1

const sum = shoo1 + shoo2

if(sum === 7 || sum === 11 ){
  console.log("win",sum)





}else{

   console.log("lose",sum)
}



 
}


 const rpsfunction = () => {

  

  console.log("click rpsfunction ")

}

dice.addEventListener("click", runBtn)

RPS.addEventListener("click", rpsfunction)