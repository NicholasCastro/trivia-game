$(document).ready(function() {

	var playerName = "";

	$("#submit-button").on("click", function(e) {
		e.preventDefault();
		playerName = $("#name-input").val();
		console.log(playerName);
		$("#player-name").text(playerName);
	})
})