//display score
var score = 0;

function newScore()
{
	document.getElementById("newScore").innerHTML = score + 1;
	score++;
}


// Question 1 
function q1Feedback()
{
	var lastsound = document.getElementById("lastsound_q1");
	var message = "";
	
	if (lastsound.checked)
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	
	else
	{
		message = "Ugh Oh...Try again!";
	}
	
	document.getElementById("feedback1").innerHTML = message;
}


//Question 2 
function q2Feedback()
{
	var madebyppl = document.getElementById("madebyppl_q2");
	var message = "";
	
	if (madebyppl.checked)
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	
	else
	{
		message = "Ugh Oh...Try again!";
	}
	
	document.getElementById("feedback2").innerHTML = message;
}


//Question 3 
function q3Feedback()
{
	var destroy = document.getElementById("destroy_q3");
	var message = "";
	
	
	if (destroy.checked)
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	
	
	else
	{
		message = "Ugh Oh...Try again!";
	}
	
	document.getElementById("feedback3").innerHTML = message;
}


//Question 4
function q4Feedback()
{
	var nervous = document.getElementById("nervous_q4");
	var poor = document.getElementById("poor_q4");
	var evil = document.getElementById("evil_q4");
	var miserable = document.getElementById("miserable_q4");

	
	var message = "";
	if ((poor.checked) && (miserable.checked) && !(nervous.checked)&& !(evil.checked))
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	else
	{
		message = "Ugh Oh...Try again!";
	}
	document.getElementById("feedback4").innerHTML = message;
}


//Question 5
function q5Feedback()
{
	var takeaway = document.getElementById("takeaway_q5");
	var message = "";
	
	if (takeaway.checked)
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	
	else
	{
		message = "Ugh Oh...Try again!";
	}
	
	document.getElementById("feedback5").innerHTML = message;
}


//Question 6
function q6Feedback()
{
	var pursue = document.getElementById("pursue_q6");
	var meet = document.getElementById("meet_q6");
	var finish = document.getElementById("finish_q6");
	var success = document.getElementById("success_q6");

	
	var message = "";
	if ((pursue.checked) && (meet.checked) && !(finish.checked)&& !(success.checked))
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	else
	{
		message = "Ugh Oh...Try again!";
	}
	document.getElementById("feedback6").innerHTML = message;
}


//Question 7
function q7Feedback()
{
	var attacked = document.getElementById("attacked_q7");
	var assaulted = document.getElementById("assaulted_q7");
	var astonished = document.getElementById("astonished_q7");
	var awful = document.getElementById("awful_q7");

	
	var message = "";
	if ((attacked.checked) && (assaulted.checked) && !(astonished.checked)&& !(awful.checked))
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	else
	{
		message = "Ugh Oh...Try again!";
	}
	document.getElementById("feedback7").innerHTML = message;
}


//Question 8
function q8Feedback()
{
	var conscientious = document.getElementById("conscientious _q8");
	var message = "";
	
	if (conscientious.checked)
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	
	else
	{
		message = "Ugh Oh...Try again!";
	}
	
	document.getElementById("feedback8").innerHTML = message;
}


//Question 9
function q9Feedback()
{
	var indulges = document.getElementById("indulges_q9");
	var message = "";
	
	if (indulges.checked)
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	
	else
	{
		message = "Ugh Oh...Try again!";
	}
	
	document.getElementById("feedback9").innerHTML = message;
}


//Question 10
function q10Feedback()
{
	var ridiculous = document.getElementById("ridiculous_q10");
	var message = "";

	if (ridiculous.checked)
	{
		message = "Good! Go to the next question.";
		newScore();
	}
	
	else
	{
		message = "Ugh Oh...Try again!";
	}
	
	document.getElementById("feedback10").innerHTML = message;
}


//End Game 
var endgameTimer;

var timeLeft = 0;


function displayResult()
{
	document.getElementById("victoryButton").disabled = true;

	if (score < 10)
	{
		document.getElementById("victoryButton").disabled = true;
	}
	else
	{
        document.getElementById("victoryButton").disabled = false;
		document.getElementById("gamingresult").innerHTML = "Congratulations! You've done it, You won!";
		document.getElementById("restart").innerHTML = `<button id="restartButton" onclick="frontPage()">Restart</button>`;
		clearInterval(endgameTimer);
	}
	
	document.getElementById("victoryButton").disabled = false;

}

function countdown()
{
	document.getElementById("message").innerHTML = timeLeft;
	
	if (timeLeft == 0)
	{
		// Stop the countdown
		clearInterval(endgameTimer);
		document.getElementById("gamingresult").innerHTML = "Sorry, You LOSE. Remeber to do your revision";
		document.getElementById("restart").innerHTML = `<button id="restartButton" onclick="frontPage()">Restart</button>`;
		
		document.getElementById("victoryButton").disabled = true;
	}
	
	timeLeft--;
}

function start()
{	
	timeLeft = 180;
	endgameTimer = setInterval("countdown()", 1000);

}


//go to front page
function frontPage()
{
	window.location = "termProject_6_frontPage.html";
}