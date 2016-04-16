function init() {
	console.log('javascript linked');
	loadClickEventListeners();
}


function loadClickEventListeners() {
	$("div.menu-button").on("click", function() {
		console.log('it was clicked');
	});
}