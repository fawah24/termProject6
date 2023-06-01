function hello()
{
	var surInput = document.getElementById("surname");
	var sur = surInput.value;
	
	var foreInput = document.getElementById("forename");
	var fore = foreInput.value;

	var fullname = fore + " " + sur;
	var message = "Hello " + fullname + " ! " + "Click " + `<span id="startGame" onclick="toStart()">here</span>` + " to read Instructions!";

	var enternameP = document.getElementById("enterName");
	enternameP.innerHTML = message;

}


function toStart()
{
	var messageElem = document.getElementById("beginmessage");
	messageElem.innerHTML = `
	<h2>Instructions</h2>
	<p>Level 0: Grab the final chance for your revision. You only have 30 seconds to answer each question. If time ran out, the game is over.</p>
	<p>Level 1 : This is a warm-up test designed for you. Simply passing the test when you get 3 marks. Just Do It!</p>
	<p>Level 2 : The final level -- MC Quiz to test your English. You only have 3 minutes to finish the quiz. If you lose, you have to do more revision.</p>`;
	messageElem.style.backgroundColor = "SeaShell";
	messageElem.style.color = "Indigo";
	messageElem.style.fontSize = "1.6em"

	var timer = setTimeout("go()", 30000);
}


function go()
{
	var messageElem = document.getElementById("beginmessage");
	messageElem.style.backgroundColor = "MidnightBlue";
	messageElem.style.color = "white";
	messageElem.style.font = "bold 2em Copperplate, Papyrus, fantasy";
	messageElem.innerHTML = "&diams;" + " Kick start the game " + "&diams;";

	if (messageElem.innerHTML = "&diams;" + " Kick start the game " + "&diams;")
	{
		document.getElementById("Game").innerHTML = `<button id="startButton" onclick="toNextLevel()">Start</button>`;
	}
}


//go to LEVEL0: vocab revision
function toNextLevel()
{
	window.location = "termProject_6_level0.html";
}
