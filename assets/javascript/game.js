
// Variables 
//======================
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


let choice = Math.floor(Math.random() * 26);  // total letters in var game
let answer = letters[choice];
console.log("computer" + answer)
let wrongGuess = []; 
let wins = 0;
let losses = 0;
let guessCount = 10;






//compare user input to computer choice
    //get users input

document.onkeyup = function(event) {
      
        var userGuess = event.key;

        console.log("user guess is : " + userGuess)

        console.log(guessCount);

        wrongGuess.push(userGuess);


     guessCount--;

var reset = function (){
    guessCount = 10;
    wrongGuess = [];
    choice = Math.floor(Math.random() * 26);
    answer = letters[choice];
    console.log(answer);
}
//compare userGuess to computer guess

if(userGuess === answer){
    alert("way to go your "+ userGuess +" matched the computer guess of :" + answer);

    wins++;
    
    reset();
} if(guessCount === 0) {
 
    alert("You FAIL AT LIFE-GAME OVER");
      losses++;
    reset();

}






// Set the inner HTML contents of the #game div to our html string
document.querySelector("#wrongInput").innerHTML = wrongGuess;
document.querySelector("#losses").innerHTML = losses;
document.querySelector("#wins").innerHTML =  wins;

document.querySelector("#guess-Count").innerHTML = guessCount;







};






// figure out computer choice
//user choice and display on screen 
// figure out way to display user guess on screen
 

//Functions
//========================================


//if (win< 1)
//{











//}



     







//Render Questions========






// Score Updater============










//MAIN PROCESS

//=============================================


//Key pressed======



//Correct guess=====




//incorrect guess======



//reset question and score=========