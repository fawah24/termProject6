var canvas;
var ctx;

var engWords = ["billiards", "blimp", "comet", "hammock", "harp", "hourglass", "mattress", "penguin", "saddle", "kayak"];
var chiWords = ["桌球", "飛艇", "慧星", "吊床", "豎琴", "沙漏", "床褥", "企鵝", "馬鞍", "獨木舟"];

var engWordIndex = -1;
var chiWordIndex = -1;

var rect_x = 125;
var rect_y = 0;

var timer;

var score = 0;

//go to final quiz page
function toQuiz()
{
	window.location = "termProject_6_quiz.html";

}


//display score
function newScorePlus()
{
	document.getElementById("myScore").innerHTML = score + 1;
	score++;
}

function newScoreMinus()
{
	document.getElementById("myScore").innerHTML = score - 1;
	score--;
}


//game area
function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	rect_y += 6;

	ctx.font = "bold 18px Arial";
	ctx.fillStyle = "#e91640";
	ctx.fillText(chiWords[chiWordIndex], rect_x, rect_y);

	if (rect_y >= canvas.height)
	{
		clearInterval(timer);

		if (chiWordIndex == engWordIndex)
		{
			document.getElementById("message").innerHTML = "Bravo! Press " + `<span class="highlight">Play</span>` + " to next question.";
			newScorePlus();

			if (score == 3)
			{
				document.getElementById("nextLevel").innerHTML = `<button id="finalQuiz" onclick="toQuiz()">Next Level</span>`;
			}
		}
		else
		{
			document.getElementById("message").innerHTML = "Try again! Press " + `<span class="highlight">Next</span>` + " until the correct meaning is present.";
			newScoreMinus();
		}
	}
}

function getRandomIndex()
{
	var random_num = Math.random() * chiWords.length;
	var random_int = Math.floor(random_num);
	return random_int;
}

function play()
{
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");

	engWordIndex = getRandomIndex();
	document.getElementById("wordContainer").innerHTML = engWords[engWordIndex];

	document.getElementById("displayImg").src = engWords[engWordIndex] + ".jpg";
	
	next();
}

function next()
{
	clearInterval(timer);

	chiWordIndex = getRandomIndex();

	rect_y = 0;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	timer = setInterval("draw()", 100);
}






