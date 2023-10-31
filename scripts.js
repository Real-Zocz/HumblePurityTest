var finalScore = 0;

function CalculateScore(){

	document.getElementById("list").style.display = "none";
	document.getElementById("score").style.display = "block";
	for (var i = 0; i < 100; i++) {
		if(document.getElementById(i+1).checked){
			finalScore++;
		}
	}

	document.getElementById("scoreText").innerHTML = 100 - finalScore;
}
