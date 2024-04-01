//stars
/*
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

*/


let stars = document.getElementsByClassName("star");



function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }

}

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
var counter = 2;
function login() {
    if (counter % 2 == 0) {
        alert('You have been logged in!');
    } else {
        alert('You have been logged out!');
    }
    counter += 1;
}

function login_logout(){
    var email = document.forms["Account"]["Email"].value;
    var password= document.forms["Account"]["Password"].value;
    if(email==""){
        alert("Invalid email");

    }else{
        if(password==""){
            alert("Inccorect password");
        }else{
            login();
        }

    }
}




function submit_event(){
    var title = document.forms["rec_Event"]["event_title"].value;
    var date= document.forms["rec_Event"]["event_date"].value;
    if(title==""){
        alert("An event must have a title!");

    }else{
        if(date.length==0){
            alert("An event must have a date!");
        }else{
            alert("Event submitted! The Celiac Society will contact you soon");
        }

    }
}

