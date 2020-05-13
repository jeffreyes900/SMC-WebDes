var imagePreviewEarth = document.getElementById("preview-1");
var imagePreviewMoon = document.getElementById("preview-2");
var imagePreviewAliens = document.getElementById("preview-3");
var imagePreviewTeam = document.getElementById("preview-4");

var imageMainContent = document.getElementById("fullSize");

var hamburgerImg = document.getElementById("hamburgerIcon");

var imageSwitch = function(newImage) {
	if(newImage == "image of earth at night"){
		imageMainContent.src = "img/earth.jpg";
	}
	else if(newImage == "astronaut and rover on the moon"){
		imageMainContent.src = "img/moon.jpg";
	}
	else if(newImage == "an alien pointing at you"){
		imageMainContent.src = "img/aliens.jpg";
	}
	else if(newImage == "nasa graduating team"){
		imageMainContent.src = "img/team.jpg";
	}
	else{

	}	
}

var swapHamburgerIcon = function(){

	if (hamburgerImg.alt == "hamburger menu toggle button") {

		hamburgerImg.src = "img/hamburger-flat-icon-white.png";
		hamburgerImg.alt = "hamburger menu toggle button white";
	}

	else {

		hamburgerImg.src = "img/hamburger-flat-icon.png";
		hamburgerImg.alt = "hamburger menu toggle button";
	}
}

