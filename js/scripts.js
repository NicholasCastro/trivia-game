$(document).ready(function() {

	//set variables
	var playerName = "";
	var answer1 = "";
	var correct1 = "Chell";

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

	//set functions for showing playername + questions
	function showPlayerName(){
		$("#player-name").show().addClass("animated flipInX");
	}

	function showquestion1(){
		$("#question1").show().addClass("animated flipInX")
	}

	function removequestion1(){
		$("#question1").detach();
	}

	function showresults1(){
		
	}

	function answerCheck1(){
		if(answer1 === correct1){
			console.log("player answer 1 is correct")
			$("#result1correct").show().addClass("animated flipInX");
		}
		else{
			console.log("player answer 1 is incorrect")
			$("#result1incorrect").show().addClass("animated flipInX");
		}
	}

	//on submit button click
	$("#submit-button").on("click", function(e) { //when #submit-button is clicked, initiate this function
		e.preventDefault(); //prevent default action
		playerName = $("#name-input").val(); //set variable playerName to value of #name-input
		console.log(playerName); //tell console to display variable playerName
		$("#player-name").text(playerName); //set the text of #player-name to variable playerName
		$("#welcome-screen").addClass("animated hinge"); //give #welcome-screen classes animated and hinge
		setTimeout(removeWelcomeScreen, 2000); //initiate function removeWelcomeScreen after two seconds
		setTimeout(showPlayerName, 1900); //initiate function showPlayerName after 1.9 seconds
		setTimeout(showquestion1, 2200); //initiate function showquestion1 after 2.2 seconds
	});

	//on answer1 button click
	$("#answer1-button").on("click", function(e) { //when #answer1-button is clicked, initiate this function
		e.preventDefault(); //prevent default action
		answer1 = $("#answer1-input").val().trim(); //set variable answer1 to value of #answer1-input, removing unnecessary spaces
		console.log(answer1); //tell console to display variable answer1
		$("#show-answer1").text(answer1); //set the text of #show-answer1 to variable answer1
		$("#question1").addClass("flipOutX");
		setTimeout(removequestion1, 1000);
		setTimeout(answerCheck1, 1500); 
	});

	

});
