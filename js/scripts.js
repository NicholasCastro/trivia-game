$(document).ready(function() {

	//set playerName variable
	var playerName = "";

	//hide player name
	$('#player-name').hide();

	//put starting cursor on name input
	$("#name-input").focus();

	//set function remove welcome screen
	function removeWelcomeScreen(){
		$("#welcome-screen").detach();
	}

	//on submit button click
	$("#submit-button").on("click", function(e) {
		e.preventDefault();
		playerName = $("#name-input").val();
		console.log(playerName);
		$("#player-name").text(playerName);
		$("#welcome-screen").addClass("animated hinge")
		setTimeout(removeWelcomeScreen, 1000)
		$("#player-name").show().addClass("animated fadeIn");
	});
});