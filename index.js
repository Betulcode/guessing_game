hideMe("rabbit");
const y = Math.floor(Math.random() * 100 + 1);
guessCounter=1;
// document.getElementById("gueesingTimes").innerHTML = y;
document.getElementById("check").addEventListener("click",

function guessNumber() {
  const x=document.getElementById("guess").value;
  if  (x>y){
    document.getElementById("message").innerHTML = "I am thinking about lower number";
    guessCounter+=1;
    document.getElementById("gueesingTimes").innerHTML = guessCounter;

    }
    else if(x<y)
    {
      document.getElementById("message").innerHTML = "I am thinking about higher number";
      guessCounter+=1;
      document.getElementById("gueesingTimes").innerHTML = guessCounter;
    }
    else {
      document.getElementById("message").innerHTML = "  **  You are the winner  ** ";
      document.getElementById("gueesingTimes").innerHTML = guessCounter +" times";
      showMe("rabbit");
      beep();

  }
});
function showMe(ID) {
          document.getElementById("rabbit").style.display = ''; }

function hideMe(ID) {
document.getElementById("rabbit").style.display = 'none'; }

function beep() {
    var snd = new Audio("alkis.mp3");
    snd.play();
}
/*
document.getElementById("message").innerHTML = x;
document.getElementById("random").innerHTML = y;
document.getElementById("btn_1").addEventListener("click", sumNumbers)

function sumNumbers() {
    const num_1 = document.getElementById("inp_1").value;
    const num_2 = document.getElementById("inp_2").value;

    if (isNaN(num_1) || isNaN(num_2))
        return alert("Not a number!")

    const result = parseInt(num_1) + parseInt(num_2);

    document.getElementById("res").innerHTML = result;
}*/
