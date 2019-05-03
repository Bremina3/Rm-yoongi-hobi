let wins = 0;
let losses = 0;
let ties = 0;

function computersMove() {let ranInt = Math.floor(Math.random()*3)
    if (ranInt === 0){
        return "RM"
    }
    if ( ranInt === 1){
        return "yoongi"
    }
    if (ranInt === 2){
        return "hobi"
    }
}

function updateScore(result) {if (result === "wins") {
    wins = wins +1;
    document.getElementById("wins").innerHTML = wins;
    }
    if (result === "losses") {
    losses = losses + 1;
    document.getElementById("losses").innerHTML = losses;
    }
    if (result === "ties") {
    ties = ties +1;
    document.getElementById("ties").innerHTML = ties;
    }
}

function onClickRM() {let cm = computersMove();
    if (cm === "RM") {
    updateScore("ties");
    alert("The computer picked RM. That means you suck less!");
    }
    if (cm === "yoongi") {
    updateScore("losses");
    alert("The computer picked yoongi,loser!");
    }
    if (cm === "hobi") {
    updateScore("wins");
    alert("The computer picked hobi. That means you won!");
    }
}

function onClickYoongi() {let cm = computersMove();
    if (cm === "yoongi") {
    updateScore("ties");
    alert("The computer picked yoongi. That means you suck less!");
    }
    if (cm === "hobi"){
    updateScore("losses");
    alert("The computer picked hobi,loser!")
    }
    if (cm === "RM"){
    updateScore("wins");
    alert("The computer picked RM. That means you won!")
    }
}

function onClickHobi() {let cm = computersMove();
    if (cm === "hobi") {
    updateScore("ties");
    alert("The computer picked hobi. That means you suck less!")
    }
    if (cm === "RM") {
    updateScore("losses");
    alert("The computer picked RM,loser!")
    }
    if (cm === "yoongi") {
    updateScore("wins");
    alert("The computer picked yoongi. That means you won!")
    }
}
document.getElementById("img1").onclick = onClickRM;
document.getElementById("img2").onclick = onClickYoongi;
document.getElementById("img3").onclick = onClickHobi;