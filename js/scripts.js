$(document).ready(function() {

	//set playerName variable
	var playerName = "";
	var answer1 = "";
	var correct1 = "correct1";

	//hide player name
	$('#player-name').hide();

	//hide questions
	$(".questions").hide();

	//hide results
	$(".results").hide();

	//put starting cursor on name input
	$("#name-input").focus();

	//set function remove welcome screen
	function removeWelcomeScreen(){
		$("#welcome-screen").detach();
	}

	function showPlayerName(){
		$("#player-name").show().addClass("animated flipInX");
	}

	function showquestion1(){
		$("#question1").show().addClass("animated flipInX")
	}


	//on submit button click
	$("#submit-button").on("click", function(e) {
		e.preventDefault();
		playerName = $("#name-input").val();
		console.log(playerName);
		$("#player-name").text(playerName);
		$("#welcome-screen").addClass("animated hinge")
		setTimeout(removeWelcomeScreen, 2000);
		setTimeout(showPlayerName, 1900)
		setTimeout(showquestion1, 2200)
	});

	//on answer1 button click
	$("#answer1-button").on("click", function(e) {
		e.preventDefault();
		answer1 = $("#answer1-input").val();
		console.log(answer1);
		$("#show-answer1").text(answer1);
		$("#result1").show().addClass("animated flipInX");
	})
});
