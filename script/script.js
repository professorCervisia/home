$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('header').addClass('small-logo');
        }
        else{
            $('header').removeClass('small-logo');
        }
    });
});

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function(){

        window.location.hash = hash;
      });
    } 
  });
});



window.onload=function(){

console.log ('leeftijd');

var jaKnop = document.querySelector('#ja');
var neeKnop = document.querySelector('#nee');
var leeftijd = document.querySelector('#leeftijd');

jaKnop.addEventListener('click', wegLeeftijd);
neeKnop.addEventListener('click', nietOud);
}





function wegLeeftijd () {
  leeftijd.classList.add("leeftijdweg");
  leeftijd.classList.remove("leeftijd");

}

function nietOud (){
  leeftijd.classList.add("nietOud");
}

if (window.location.href==="https://professorcervisia.github.io/home/") {
    window.location.href = "https://professor-cervisia.nl"; 
}
