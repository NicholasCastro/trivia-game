$(document).ready(function() {

	//set variables
	var playerName = "";
	var answer1 = "";
	var trueanswer1 = "";
	var correct1 = "chell";
	var answer2 = "";
	var correct2 = "GLaDOS";
	var answer3 = "";
	var trueanswer3 = "";
	var correct3 = "ellen mclain";
	var answer4 = "";
	var trueanswer4= "";
	var correct4 = "fratricide";
	var answer5 = "";
	var trueanswer5= "";
	var correct5 = "wheatley";
	var answer6 = "";
	var trueanswer6= "";
	var correct6 = "apple";
	var answer7 = "";
	var trueanswer7 = "";
	var correct7 = "the part where he kills you";
	var answer8 = "";
	var trueanswer8 = "";
	var correct8 = "rick";
	var answer9 = "";
	var trueanswer9 = "";
	var correct9 = "still alive";
	var answer10 = "";
	var trueanswer10 = "";
	var correct10 = "want you gone";
	var score = 0;
	var lives = 6;

	//hide questions
	$(".questions").hide();

	//hide results
	$(".results").hide();

	$("#dashboard").hide();

	$(".win-img").hide();

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

	//***********QUESTION 1 FUNCTIONS************//

	function showquestion1(){
		$("#question1").show().addClass("animated flipInX")
		$("#answer1-input").focus();
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

	//***********QUESTION 2 FUNCTIONS************//

	function showquestion2(){
		$("#question2").show().addClass("animated flipInX");
		$("#answer2-input").focus();
	}

	function removequestion2(){
		$("#question2").detach();
	}

	function loselife2(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result2incorrect").show().addClass("animated flipInX");
		}
	}

	function answerCheck2(){
		if(answer2 === correct2){
			console.log("player answer 2 is correct");
			$("#result2correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 2 is incorrect");
			loselife2();
		}
	}

	function removecorrect2(){
		$("#result2correct").detach();
	}

	function removeincorrect2(){
		$("#result2incorrect").detach();
	}


	//***********QUESTION 3 FUNCTIONS************//

	function showquestion3(){
		$("#question3").show().addClass("animated flipInX");
		$("#answer3-input").focus();
	}

	function removequestion3(){
		$("#question3").detach();
	}

	function answerCheck3(){
		if(trueanswer3 === correct3){
			console.log("player answer 3 is correct");
			$("#result3correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 3 is incorrect");
			loselife3();
		}
	}

	function loselife3(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result3incorrect").show().addClass("animated flipInX");
		}
	}

	function removecorrect3(){
		$("#result3correct").detach();
	}

	function removeincorrect3(){
		$("#result3incorrect").detach();
	}


	//***********QUESTION 4 FUNCTIONS************//

	function showquestion4(){
		$("#question4").show().addClass("animated flipInX");
		$("#answer4-input").focus();
	}

	function removequestion4(){
		$("#question4").detach();
	}

	function answerCheck4(){
		if(trueanswer4 === correct4){
			console.log("player answer 4 is correct");
			$("#result4correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 4 is incorrect");
			loselife4();
		}
	}

	function loselife4(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result4incorrect").show().addClass("animated flipInX");
		}
	}

	function removecorrect4(){
		$("#result4correct").detach();
	}

	function removeincorrect4(){
		$("#result4incorrect").detach();
	}

	//***********QUESTION 5 FUNCTIONS************//

	function showquestion5(){
		$("#question5").show().addClass("animated flipInX");
		$("#answer5-input").focus();
	}

	function removequestion5(){
		$("#question5").detach();
	}

	function answerCheck5(){
		if(trueanswer5 === correct5){
			console.log("player answer 5 is correct");
			$("#result5correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 5 is incorrect");
			loselife5();
		}
	}

	function loselife5(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result5incorrect").show().addClass("animated flipInX");
		}
	}

	function removecorrect5(){
		$("#result5correct").detach();
	}

	function removeincorrect5(){
		$("#result5incorrect").detach();
	}

	//***********QUESTION 6 FUNCTIONS************//

	function showquestion6(){
		$("#question6").show().addClass("animated flipInX");
		$("#answer6-input").focus();
	}

	function removequestion6(){
		$("#question6").detach();
	}

	function answerCheck6(){
		if(trueanswer6 === correct6){
			console.log("player answer 6 is correct");
			$("#result6correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 6 is incorrect");
			loselife6();
		}
	}

	function loselife6(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result6incorrect").show().addClass("animated flipInX");
		}
	}

	function removecorrect6(){
		$("#result6correct").detach();
	}

	function removeincorrect6(){
		$("#result6incorrect").detach();
	}

	//***********QUESTION 7 FUNCTIONS************//

	function showquestion7(){
		$("#question7").show().addClass("animated flipInX");
		$("#answer7-input").focus();
	}

	function removequestion7(){
		$("#question7").detach();
	}

	function answerCheck7(){
		if(trueanswer7 === correct7){
			console.log("player answer 7 is correct");
			$("#result7correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 7 is incorrect");
			loselife7();
		}
	}

	function loselife7(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result7incorrect").show().addClass("animated flipInX");
		}
	}

	function removecorrect7(){
		$("#result7correct").detach();
	}

	function removeincorrect7(){
		$("#result7incorrect").detach();
	}

	//***********QUESTION 8 FUNCTIONS************//

	function showquestion8(){
		$("#question8").show().addClass("animated flipInX");
		$("#answer8-input").focus();
	}

	function removequestion8(){
		$("#question8").detach();
	}

	function answerCheck8(){
		if(trueanswer8 === correct8){
			console.log("player answer 8 is correct");
			$("#result8correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 8 is incorrect");
			loselife8();
		}
	}

	function loselife8(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result8incorrect").show().addClass("animated flipInX");
		}
	}

	function removecorrect8(){
		$("#result8correct").detach();
	}

	function removeincorrect8(){
		$("#result8incorrect").detach();
	}

	//***********QUESTION 9 FUNCTIONS************//

	function showquestion9(){
		$("#question9").show().addClass("animated flipInX");
		$("#answer9-input").focus();
	}

	function removequestion9(){
		$("#question9").detach();
	}

	function answerCheck9(){
		if(trueanswer9 === correct9){
			console.log("player answer 9 is correct");
			$("#result9correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 9 is incorrect");
			loselife9();
		}
	}

	function loselife9(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result9incorrect").show().addClass("animated flipInX");
		}
	}

	function removecorrect9(){
		$("#result9correct").detach();
	}

	function removeincorrect9(){
		$("#result9incorrect").detach();
	}

	//***********QUESTION 10 FUNCTIONS************//

	function showquestion10(){
		$("#question10").show().addClass("animated flipInX");
		$("#answer10-input").focus();
	}

	function removequestion10(){
		$("#question10").detach();
	}

	function answerCheck10(){
		if(trueanswer10 === correct10){
			console.log("player answer 10 is correct");
			$("#result10correct").show().addClass("animated flipInX");
			score++;
			$("#score").text(score);
		}
		else{
			console.log("player answer 10 is incorrect");
			loselife10();
		}
	}

	function loselife10(){
		lives--;
		$("#lifecounter").text(lives);
		if(lives === 0){
			$("#lose-msg").show().addClass("animated flipInX");
		}
		else{
			$("#result10incorrect").show().addClass("animated flipInX");
		}
	}

	function removecorrect10(){
		$("#result10correct").detach();
	}

	function removeincorrect10(){
		$("#result10incorrect").detach();
	}

	//***************Win Functions*******************//
	function win(){
		if(score === 5){
			$("#wheatley").show().addClass("animated flipInX");
		}
		if(score === 6){
			$("#turret").show().addClass("animated flipInX");
		}
		if(score === 7){
			$("#cave").show().addClass("animated flipInX");
		}
		if(score === 8){
			$("#glados").show().addClass("animated flipInX");
		}
		if(score === 9){
			$("#cube").show().addClass("animated flipInX");
		}
		if(score == 10){
			$("#cake").show().addClass("animated flipInX");
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

	//*********QUESTION 1***********//

	//on answer1 button click
	$("#answer1-button").on("click", function(e) { //when #answer1-button is clicked, initiate this function
		e.preventDefault(); //prevent default action
		trueanswer1 = $("#answer1-input").val().trim().toLowerCase();  //set variable trueanswer1 to value of #answer1-input, removing unnecessary spaces and making it all lowercase
		answer1 = $("#answer1-input").val().trim()//set variable answer1 to value of #answer1-input, removing unnecessary spaces
		console.log("Player answer is " + answer1)
		console.log("True answer 1 is " + trueanswer1); //tell console to display variable answer1
		$(".show-answer1").text(answer1); //set the text of #show-answer1 to variable answer1
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

	//on continueincorrect1 button click
	$("#continueincorrect1").on("click", function(e) {
		e.preventDefault();
		$("#result1incorrect").addClass("flipOutX");
		setTimeout(removeincorrect1, 1000);
		setTimeout(showquestion2, 1500);
	});

	//*********QUESTION 2***********//

	//on answer2 button click
	$("#answer2-button").on("click", function(e) { //when #answer1-button is clicked, initiate this function
		e.preventDefault(); //prevent default action
		answer2 = $("#answer2-input").val().trim()//set variable answer1 to value of #answer1-input, removing unnecessary spaces
		console.log("Player answer is " + answer2)
		$(".show-answer2").text(answer2); //set the text of #show-answer1 to variable answer1
		$("#question2").addClass("flipOutX");
		setTimeout(removequestion2, 1000);
		setTimeout(answerCheck2, 1500); 
	});

	//on continuecorrect2 button click
	$("#continuecorrect2").on("click", function(e) {
		e.preventDefault();
		$("#result2correct").addClass("flipOutX");
		setTimeout(removecorrect2, 1000);
		setTimeout(showquestion3, 1500);
	});

	//on continueincorrect2 button click
	$("#continueincorrect2").on("click", function(e) {
		e.preventDefault();
		$("#result2incorrect").addClass("flipOutX");
		setTimeout(removeincorrect2, 1000);
		setTimeout(showquestion3, 1500);
	});

	//*********QUESTION 3***********//

	//on answer3 button click
	$("#answer3-button").on("click", function(e) { //when #answer1-button is clicked, initiate this function
		e.preventDefault(); //prevent default action
		trueanswer3 = $("#answer3-input").val().trim().toLowerCase();  //set variable trueanswer1 to value of #answer1-input, removing unnecessary spaces and making it all lowercase
		answer3 = $("#answer3-input").val().trim()//set variable answer1 to value of #answer1-input, removing unnecessary spaces
		console.log("Player answer is " + answer3)
		console.log("True answer 3 is " + trueanswer3); //tell console to display variable answer1
		$(".show-answer3").text(answer3); //set the text of #show-answer1 to variable answer1
		$("#question3").addClass("flipOutX");
		setTimeout(removequestion3, 1000);
		setTimeout(answerCheck3, 1500); 
	});

	//on continuecorrect3 button click
	$("#continuecorrect3").on("click", function(e) {
		e.preventDefault();
		$("#result3correct").addClass("flipOutX");
		setTimeout(removecorrect3, 1000);
		setTimeout(showquestion4, 1500);
	});

	//on continueincorrect3 button click
	$("#continueincorrect3").on("click", function(e) {
		e.preventDefault();
		$("#result3incorrect").addClass("flipOutX");
		setTimeout(removeincorrect3, 1000);
		setTimeout(showquestion4, 1500);
	});

	//*********QUESTION 4***********//

	//on answer4 button click
	$("#answer4-button").on("click", function(e) { 
		e.preventDefault(); 
		trueanswer4 = $("#answer4-input").val().trim().toLowerCase();  
		answer4 = $("#answer4-input").val().trim()
		console.log("Player answer is " + answer4)
		console.log("True answer 4 is " + trueanswer4); 
		$(".show-answer4").text(answer4);
		$("#question4").addClass("flipOutX");
		setTimeout(removequestion4, 1000);
		setTimeout(answerCheck4, 1500); 
	});

	//on continuecorrect4 button click
	$("#continuecorrect4").on("click", function(e) {
		e.preventDefault();
		$("#result4correct").addClass("flipOutX");
		setTimeout(removecorrect4, 1000);
		setTimeout(showquestion5, 1500);
	});

	//on continueincorrect4 button click
	$("#continueincorrect4").on("click", function(e) {
		e.preventDefault();
		$("#result4incorrect").addClass("flipOutX");
		setTimeout(removeincorrect4, 1000);
		setTimeout(showquestion5, 1500);
	});

	//*********QUESTION 5***********//

	//on answer5 button click
	$("#answer5-button").on("click", function(e) { 
		e.preventDefault(); 
		trueanswer5 = $("#answer5-input").val().trim().toLowerCase();  
		answer5 = $("#answer5-input").val().trim()
		console.log("Player answer is " + answer5)
		console.log("True answer 5 is " + trueanswer5); 
		$(".show-answer5").text(answer5);
		$("#question5").addClass("flipOutX");
		setTimeout(removequestion5, 1000);
		setTimeout(answerCheck5, 1500); 
	});

	//on continuecorrect5 button click
	$("#continuecorrect5").on("click", function(e) {
		e.preventDefault();
		$("#result5correct").addClass("flipOutX");
		setTimeout(removecorrect5, 1000);
		setTimeout(showquestion6, 1500);
	});

	//on continueincorrect5 button click
	$("#continueincorrect5").on("click", function(e) {
		e.preventDefault();
		$("#result5incorrect").addClass("flipOutX");
		setTimeout(removeincorrect5, 1000);
		setTimeout(showquestion6, 1500);
	});

	//*********QUESTION 6***********//

	//on answer6 button click
	$("#answer6-button").on("click", function(e) { 
		e.preventDefault(); 
		trueanswer6 = $("#answer6-input").val().trim().toLowerCase();  
		answer6 = $("#answer6-input").val().trim()
		console.log("Player answer is " + answer6)
		console.log("True answer 6 is " + trueanswer6); 
		$(".show-answer6").text(answer6);
		$("#question6").addClass("flipOutX");
		setTimeout(removequestion6, 1000);
		setTimeout(answerCheck6, 1500); 
	});

	//on continuecorrect6 button click
	$("#continuecorrect6").on("click", function(e) {
		e.preventDefault();
		$("#result6correct").addClass("flipOutX");
		setTimeout(removecorrect6, 1000);
		setTimeout(showquestion7, 1500);
	});

	//on continueincorrect6 button click
	$("#continueincorrect6").on("click", function(e) {
		e.preventDefault();
		$("#result6incorrect").addClass("flipOutX");
		setTimeout(removeincorrect6, 1000);
		setTimeout(showquestion7, 1500);
	});

	//*********QUESTION 7***********//

	//on answer7 button click
	$("#answer7-button").on("click", function(e) { 
		e.preventDefault(); 
		trueanswer7 = $("#answer7-input").val().trim().toLowerCase();  
		answer7 = $("#answer7-input").val().trim()
		console.log("Player answer is " + answer7)
		console.log("True answer 7 is " + trueanswer7); 
		$(".show-answer7").text(answer7);
		$("#question7").addClass("flipOutX");
		setTimeout(removequestion7, 1000);
		setTimeout(answerCheck7, 1500); 
	});

	//on continuecorrect7 button click
	$("#continuecorrect7").on("click", function(e) {
		e.preventDefault();
		$("#result7correct").addClass("flipOutX");
		setTimeout(removecorrect7, 1000);
		setTimeout(showquestion8, 1500);
	});

	//on continueincorrect7 button click
	$("#continueincorrect7").on("click", function(e) {
		e.preventDefault();
		$("#result7incorrect").addClass("flipOutX");
		setTimeout(removeincorrect7, 1000);
		setTimeout(showquestion8, 1500);
	});

	//*********QUESTION 8***********//

	//on answer8 button click
	$("#answer8-button").on("click", function(e) { 
		e.preventDefault(); 
		trueanswer8 = $("#answer8-input").val().trim().toLowerCase();  
		answer8 = $("#answer8-input").val().trim()
		console.log("Player answer is " + answer8)
		console.log("True answer 8 is " + trueanswer8); 
		$(".show-answer8").text(answer8);
		$("#question8").addClass("flipOutX");
		setTimeout(removequestion8, 1000);
		setTimeout(answerCheck8, 1500); 
	});

	//on continuecorrect8 button click
	$("#continuecorrect8").on("click", function(e) {
		e.preventDefault();
		$("#result8correct").addClass("flipOutX");
		setTimeout(removecorrect8, 1000);
		setTimeout(showquestion9, 1500);
	});

	//on continueincorrect8 button click
	$("#continueincorrect8").on("click", function(e) {
		e.preventDefault();
		$("#result8incorrect").addClass("flipOutX");
		setTimeout(removeincorrect8, 1000);
		setTimeout(showquestion9, 1500);
	});

	//*********QUESTION 9***********//

	//on answer9 button click
	$("#answer9-button").on("click", function(e) { 
		e.preventDefault(); 
		trueanswer9 = $("#answer9-input").val().trim().toLowerCase();  
		answer9 = $("#answer9-input").val().trim()
		console.log("Player answer is " + answer9)
		console.log("True answer 9 is " + trueanswer9); 
		$(".show-answer9").text(answer9);
		$("#question9").addClass("flipOutX");
		setTimeout(removequestion9, 1000);
		setTimeout(answerCheck9, 1500); 
	});

	//on continuecorrect9 button click
	$("#continuecorrect9").on("click", function(e) {
		e.preventDefault();
		$("#result9correct").addClass("flipOutX");
		setTimeout(removecorrect9, 1000);
		setTimeout(showquestion10, 1500);
	});

	//on continueincorrect9 button click
	$("#continueincorrect9").on("click", function(e) {
		e.preventDefault();
		$("#result9incorrect").addClass("flipOutX");
		setTimeout(removeincorrect9, 1000);
		setTimeout(showquestion10, 1500);
	});

	//*********QUESTION 10***********//

	//on answer10 button click
	$("#answer10-button").on("click", function(e) { 
		e.preventDefault(); 
		trueanswer10 = $("#answer10-input").val().trim().toLowerCase();  
		answer10 = $("#answer10-input").val().trim()
		console.log("Player answer is " + answer10)
		console.log("True answer 10 is " + trueanswer10); 
		$(".show-answer10").text(answer10);
		$("#question10").addClass("flipOutX");
		setTimeout(removequestion10, 1000);
		setTimeout(answerCheck10, 1500); 
	});

	//on continuecorrect10 button click
	$("#continuecorrect10").on("click", function(e) {
		e.preventDefault();
		$("#result10correct").addClass("flipOutX");
		setTimeout(removecorrect10, 1000);
		setTimeout(win, 1500);
	});

	//on continueincorrect10 button click
	$("#continueincorrect10").on("click", function(e) {
		e.preventDefault();
		$("#result10incorrect").addClass("flipOutX");
		setTimeout(removeincorrect10, 1000);
		setTimeout(win, 1500);
	});

});
