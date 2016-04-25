function init() {
	console.log('javascript linked');
	loadClickEventListeners();
	loadAnimationListeners();
}

function expandModal() {
	$("#menu-icon-div").removeClass("hidden");
	$("#transition-div1").removeClass("hidden");
	$("#transition-div1").addClass("slide-down1");
	$("#transition-div2").removeClass("hidden");
	$("#transition-div2").addClass("slide-down2");
	$("#homeContentDiv").addClass("noscroll");
}

function showSection(section) {
	$(section).removeClass("hidden");
	$(section).addClass("displayed-modal");
}

function setHoverAnimation(div, target, animation) {
	$(div).hover(
		function(){
			$(target).addClass(animation);
		},
		function(){
			$(target).removeClass(animation);	
		}
	);
}

function loadClickEventListeners() {
	$("#menu-icon-div").on("click", function() {
		$(".displayed-modal").addClass("hidden");
		$("#transition-div1").addClass("hidden");
		$("#transition-div1").removeClass("slide-down1");
		$("#transition-div2").addClass("hidden");
		$("#transition-div2").removeClass("slide-down2");
		$("#homeContentDiv").removeClass("noscroll");
		$(".displayed-modal").removeClass("displayed-modal");
		$("#menu-icon-div").addClass("hidden");
	});
	$("#block2").on("click", function() {
		expandModal();
		window.setTimeout(function(){
			showSection("#about-div");
		}, 500);
		// setUpSlideshow();
	});
	$("#block3").on("click", function() {
		expandModal();
		window.setTimeout(function(){
			showSection("#projects-div");
		}, 500);
	});
	$("#block5").on("click", function() {
		expandModal();
		window.setTimeout(function(){
			showSection("#process-div");
		}, 500);
	});
}




function loadAnimationListeners() {
	setHoverAnimation("#block3", "#pointer-icon", "throb");
	setHoverAnimation("#gh-icon", "#gh-icon", "grow");
	setHoverAnimation("#li-icon", "#li-icon", "grow");
	setHoverAnimation("#mail-icon", "#mail-icon", "grow");
	setHoverAnimation("#block4", "#emphasis4", "spreading");

	$("#block5").hover(
		function(){
			console.log('hovering');
			$(".lightbulb-div").attr('id','flicker');
		},
		function(){
			$(".lightbulb-div").attr('id','hidden');
		}
	);
}