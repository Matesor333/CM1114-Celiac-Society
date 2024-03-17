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