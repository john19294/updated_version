var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1;
document.getElementById("player2_name").innerHTML=player2;
function Send(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
var problem ="<h2>"+number1+"X"+number2+"</h2>";
var answer ="<h2>Answer:</h2><input id='inputfordiv'>";
var button ="<button id='btnfordiv' onclick='Check()'>Check</button>";
var row = problem+answer+button;
document.getElementById("output").innerHTML =row;
 
    
}
var question_turn="player1";
var answer_turn="player2"

function Check(){
 
    var  answerforproblem = number1 * number2;
var playeranswer=document.getElementById("inputfordiv").value;
if(answerforproblem==playeranswer){
if (answer_turn=="player1"){
player2_score -= 1;
player1_score += 1;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;



}
else{
player2_score += 1;
player1_score -= 1;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player1_score").innerHTML=player1_score;
}
if(question_turn=="player1"){

    question_turn="player2"
    document.getElementById("player_question").innerHTML="question turn:"+player2;
}

else{ question_turn="player1"
document.getElementById("player_question").innerHTML="question turn:"+player1;


}
if(answer_turn=="player1"){

    answer_turn="player2"
    document.getElementById("player_answer").innerHTML="answer turn:"+player2;
}

else{ answer_turn="player1"
document.getElementById("player_answer").innerHTML="answer turn:"+player1;


}



}





}

