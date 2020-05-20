var foodCats = ["candy", "meals"];
var languageCats = ["letters", "tongueTwisters"];
var peopleCats = ["actors", "scientists"];

var groupSelect = document.getElementById("group");
var categorySelect = document.getElementById("category");

var candyImgs = ["img/stangMix.jpg", "img/superFlyers.jpg", "img/tyrkiskPeber.jpg"];
var mealImgs = ["img/flaeskesteg.jpg", "img/risengroed.jpg", "img/smoerrebroed.jpg"];
var letterImgs = ["img/ae.jpg", "img/aa.jpg", "img/oe.jpg"];
var twisterImgs = ["img/tongueTwister1.jpg", "img/tongueTwister2.jpg", "img/tongueTwister3.jpg"];
var actorImgs = ["img/madsMikkelsen.jpg", "img/viggoMortensen.jpg", "img/nikolajCoster-waldau.jpg"];
var scientistImgs = ["img/tychoBrahe.jpg", "img/hansChristianOersted.jpg", "img/nielsBohr.jpg"];

var currentImg = 0;
var carouselImg = document.getElementById("carouselImg");

var submit = document.getElementById("submit");

groupSelect.addEventListener('change', function() {
    console.log(groupSelect.value);
    if (groupSelect.value == 'food') {
        fillCategory(foodCats);
    }
    if (groupSelect.value == 'language') {
        fillCategory(languageCats);
    }
    if (groupSelect.value == 'people') {
        fillCategory(peopleCats);
    }
});

var fillCategory = function(selection) {
    categorySelect.innerHTML = "";
    selection.forEach(element => {
        var opt = document.createElement('option');
        opt.value = element;
        opt.textContent = element.charAt(0).toUpperCase() + element.slice(1);

        categorySelect.appendChild(opt);
    });
}

submit.addEventListener('click', function() {
    carouselLoader(groupSelect.value, categorySelect.value);
    console.log(groupSelect.value);
    console.log(categorySelect.value);
});

function carouselLoader(a, b) {
  myStopFunction();

    if (a == 'food' && b == 'candy') {
        var candyInterval = window.setInterval(candyGallery, 3000);

        function candyGallery() {
            var nextImg = currentImg + 1;
            if (nextImg == candyImgs.length) {
                nextImg = 0;
            }

            carouselImg.src = candyImgs[nextImg];
            currentImg = nextImg;
        }
    } else if (a == 'food' && b == 'meals') {
        var mealInterval = window.setInterval(mealGallery, 3000);

        function mealGallery() {
            var nextImg = currentImg + 1;
            if (nextImg == mealImgs.length) {
                nextImg = 0;
            }

            carouselImg.src = mealImgs[nextImg];
            currentImg = nextImg;
        }
    } else if (a == 'language' && b == 'letters') {
        var letterInterval = window.setInterval(letterGallery, 3000);

        function letterGallery() {
            var nextImg = currentImg + 1;
            if (nextImg == letterImgs.length) {
                nextImg = 0;
            }

            carouselImg.src = letterImgs[nextImg];
            currentImg = nextImg;
        }
    } else if (a == 'language' && b == 'tongueTwisters') {
        var tongueTwisterInterval = window.setInterval(twisterGallery, 3000);

        function twisterGallery() {
            var nextImg = currentImg + 1;
            if (nextImg == twisterImgs.length) {
                nextImg = 0;
            }

            carouselImg.src = twisterImgs[nextImg];
            currentImg = nextImg;
        }
    } else if (a == 'people' && b == 'actors') {
        var actorInterval = window.setInterval(actorGallery, 3000);

        function actorGallery() {
            var nextImg = currentImg + 1;
            if (nextImg == actorImgs.length) {
                nextImg = 0;
            }

            carouselImg.src = actorImgs[nextImg];
            currentImg = nextImg;
        }
    } else if (a == 'people' && b == 'scientists') {
        var scientistInterval = window.setInterval(scientistGallery, 3000);

        function scientistGallery() {
            var nextImg = currentImg + 1;
            if (nextImg == scientistImgs.length) {
                nextImg = 0;
            }

            carouselImg.src = scientistImgs[nextImg];
            currentImg = nextImg;
        }
    }

    function myStopFunction() {
    clearInterval(candyInterval);
    clearInterval(mealInterval);
    clearInterval(letterInterval);
    clearInterval(tongueTwisterInterval);
    clearInterval(actorInterval);
    clearInterval(scientistInterval);
}
}

