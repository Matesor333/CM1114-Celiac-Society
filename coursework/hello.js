//stars

var starsExpress = document.querySelectorAll('.starExpress');
var ratingExpress = 0;

function setRatingExpress(ratingValue) {
    ratingExpress = ratingValue;

    starsExpress.forEach((starExpress, index) => {
        if (ratingExpress > index) {
            starExpress.classList.add('filled');
        } else {
            starExpress.classList.remove('filled');
        }
    });
}

var starsAmarone = document.querySelectorAll('.starAmarone');
var ratingAmarone = 0;
function setRatingAmarone(ratingValue) {
    ratingAmarone = ratingValue;

    starsAmarone.forEach((starAmarone, index) => {
        if (ratingAmarone > index) {
            starAmarone.classList.add('filled');
        } else {
            starAmarone.classList.remove('filled');
        }
    });
}


var stars = document.querySelectorAll('.star');
var rating = 0;
function setRating(ratingValue) {
    rating = ratingValue;

    stars.forEach((star, index) => {
        if (rating > index) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}


