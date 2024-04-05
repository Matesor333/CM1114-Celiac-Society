/*stars for restaurants*/

//Pizza express
/*get the stars by class name*/

let starsPizza = document.getElementsByClassName("starPizza");

/*calls the function with the appropriate star number s n*/

function pizzaStars(n) {

    /*removes previous rating*/
    let i = 0;
    while (i < 5) {
        starsPizza[i].className = "starPizza";
        i++;
    }
    /*and for number of stars it will give them the appropriate colour*/
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        starsPizza[i].className = "starPizza " + cls;
    }

}
//Amarone
let starsAmarone = document.getElementsByClassName("starAmarone");

/*calls the function with the appropriate star number s n*/

function amaroneStars(n) {

    /*removes previous rating*/
    let i = 0;
    while (i < 5) {
        starsAmarone[i].className = "starAmarone";
        i++;
    }
    /*and for number of stars it will give them the appropriate colour*/
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        starsAmarone[i].className = "starAmarone " + cls;
    }

}

//Amarone
let starsAndaluz = document.getElementsByClassName("starAndaluz");

/*calls the function with the appropriate star number s n*/

function anadluzStars(n) {

    /*removes previous rating*/
    let i = 0;
    while (i < 5) {
        starsAndaluz[i].className = "starAndaluz";
        i++;
    }
    /*and for number of stars it will give them the appropriate colour*/
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        starsAndaluz[i].className = "starAndaluz " + cls;
    }

}







/*login logout*/
var counter = 2;
function login() {
    if (counter % 2 == 0) {
        alert('You have been logged in!');
    } else {
        alert('You have been logged out!');
    }
    counter += 1;
}
/*checks password and email if it checks out call login logout*/

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


/*event title check functionality*/

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
/*changing img gallery*/
function change(element){
    element.classList.toggle("imgBlurr");
}

function large(element){

    element.classList.toggle("imgLarge");
}