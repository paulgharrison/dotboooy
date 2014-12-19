$(document).ready(function() {
	$("#logoDiv").delay(1500).fadeIn(4000);
	$('#bgimg0').delay(500).fadeOut(3000)
	$('#bgimg1').delay(500).fadeIn(3000).foggy({
		blurRadius: 10,
		opacity: 1
	});
	$("#scPlayer").delay(3000).fadeIn(4000);
});