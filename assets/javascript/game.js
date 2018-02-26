$(document).ready (function(){
var wins=0;
var losses=0;
//generate a random number between 19-120

var randomNumber= Math.floor(Math.random()*101+19);

// function randomNumber(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() *(max - min)) + min;
    $("random-number").html(randomNumber);

console.log(randomNumber);

//each crystal (4) needs a random hidden value between 1-12

function crystalNumber() {
    return Math.floor(Math.random() * 12 + 1);
}
console.log(crystalNumber());
 
//player clicks crystals to add value to user's number
function userNumber(){
    $(".crystal").on("click", crystalNumber);
    $(".userScore").html(score);

    alert(userNumber);
}


//if the number reaches exactly the random number, the user wins

if(userNumber === randomNumber){
    wins++;
}

//if the number goes over the random number, the user losses
if(userNumber > randomNumber){
    losses++;
}
});