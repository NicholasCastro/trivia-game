$(document).ready(function() {

	//set variables
	var playerName = "";
	var answer1 = "";
	var trueanswer1 = "";
	var correct1 = "chell";
	var answer2 = "";
	var correct 2 = "GlaD0s";
	var score = 0;
	var lives = 3;

	//hide questions
	$(".questions").hide();

	//hide results
	$(".results").hide();

	$("#dashboard").hide();

	//put starting cursor on name input
	$("#name-input").focus();

	$(".winlose").hide();

	//set function remove welcome screen
	function removeWelcomeScreen(){
		$("#welcome-screen").detach();
	}

	//set functions for showing playername + questions
	function showPlayerName(){
		$("#dashboard").show().addClass("animated flipInX");
	}

	function showquestion1(){
		$("#question1").show().addClass("animated flipInX")
	}

	function removequestion1(){
		$("#question1").detach();
	}

	function loselife1(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result1incorrect").show().addClass("animated flipInX");
		}
	}

	function answerCheck1(){
		if(trueanswer1 === correct1){
			console.log("player answer 1 is correct");
			$("#result1correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 1 is incorrect");
			loselife1();
		}
	}

	function removecorrect1(){
		$("#result1correct").detach();
	}

	function removeincorrect1(){
		$("#result1incorrect").detach();
	}

	function showquestion2(){
		$("#question2").show().addClass("animated flipInX");
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
		trueanswer1 = $("#answer1-input").val().trim().toLowerCase();  //set variable trueanswer1 to value of #answer1-input, removing unnecessary spaces and making it all lowercase
		answer1 = $("#answer1-input").val().trim()//set variable answer1 to value of #answer1-input, removing unnecessary spaces
		console.log("Player answer is " + answer1)
		console.log("True answer 1 is " + trueanswer1); //tell console to display variable answer1
		$("#show-answer1").text(answer1); //set the text of #show-answer1 to variable answer1
		$("#question1").addClass("flipOutX");
		setTimeout(removequestion1, 1000);
		setTimeout(answerCheck1, 1500); 
	});

	//on continuecorrect1 button click
	$("#continuecorrect1").on("click", function(e) {
		e.preventDefault();
		$("#result1correct").addClass("flipOutX");
		setTimeout(removecorrect1, 1000);
		setTimeout(showquestion2, 1500);
	});

	//on continuecorrect1 button click
	$("#continueincorrect1").on("click", function(e) {
		e.preventDefault();
		$("#result1incorrect").addClass("flipOutX");
		setTimeout(removeincorrect1, 1000);
		setTimeout(showquestion2, 1500);
	});

	//on answer2 button click
	$("#answer2-button").on("click", function(e) { //when #answer1-button is clicked, initiate this function
		e.preventDefault(); //prevent default action
		answer2 = $("#answer1-input").val().trim()//set variable answer1 to value of #answer1-input, removing unnecessary spaces
		console.log("Player answer is " + answer2)
		$("#show-answer2").text(answer2); //set the text of #show-answer1 to variable answer1
		$("#question2").addClass("flipOutX");
		setTimeout(removequestion2, 1000);
		setTimeout(answerCheck2, 1500); 
	});

});
