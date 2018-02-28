$(document).ready (function(){
var wins=0;
var losses=0;
var userNumber=0;

//if the number reaches exactly the random number, the user wins
function winner(){   
    wins++;
    $("#wins").html("Wins: " + wins);
};

//if the number goes over the random number, the user losses
function loser(){
    losses++;
    $("#losses").html("Losses: " + losses);
};

//resets
function reset (){
        userNumber=0;
        $("#userScore").text("0");  
        var randomNumber= Math.floor(Math.random()* 101 + 19);
        $("#random-number").html(randomNumber);
        var gem1= Math.floor(Math.random() * 12 + 1);
        var gem2= Math.floor(Math.random() * 12 + 1);
        var gem3= Math.floor(Math.random() * 12 + 1);
        var gem4= Math.floor(Math.random() * 12 + 1);
        fuction();
    };
//start

$("#userScore").text("0");

//generate a random number between 19-120

var randomNumber= Math.floor(Math.random()* 101 + 19);

//displays random number
$("#random-number").html(randomNumber);

// //each crystal (4) needs a random hidden value between 1-12
var gem1= Math.floor(Math.random() * 12 + 1);
var gem2= Math.floor(Math.random() * 12 + 1);
var gem3= Math.floor(Math.random() * 12 + 1);
var gem4= Math.floor(Math.random() * 12 + 1);

//player clicks crystals to add value to user's number

$("#one").on("click", function(){
    userNumber = userNumber + gem1;
    $("#userScore").html(userNumber);
    if(userNumber === randomNumber){
        winner();
        reset();
    };
    if (userNumber > randomNumber){
        loser();
        reset();
    };
});

$("#two").on("click", function(){
    userNumber = userNumber + gem2;
    $("#userScore").html(userNumber);
    if(userNumber === randomNumber){
        winner();
        reset();
    };
    if (userNumber > randomNumber){
        loser();
        reset();
    };
});

$("#three").on("click", function (){
    userNumber = userNumber + gem3;
    $("#userScore").html(userNumber);
    if(userNumber === randomNumber){
        winner();
        reset();
    };
    if (userNumber > randomNumber){
        loser();
        reset();
    };
});

$("#four").on("click", function (){
    userNumber = userNumber + gem4;
    $("#userScore").html(userNumber);
    if(userNumber === randomNumber){
        winner();
        reset();
    };
    if (userNumber > randomNumber){
        loser();
        reset();
    };
});    


});


function newFunction() {
    Numbers();
}
//function to reset, done or not, start/restart; each crystal needs a diff click bc each crystal has diff value;