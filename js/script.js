// wow
     wow = new WOW(
     {
     boxClass:     'wow',      // default
     animateClass: 'animated', // default
     offset:       0,          // default
     mobile:       true,       // default
     live:         true        // default
   }
   )
   wow.init();
// aos
AOS.init();

// particles
(function() {
  window.onload = function() {
    var $main = document.querySelector("main");
    window.mySparticles = new Sparticles($main);
  }
}());

// jQuery
$(function() {
  var $main = $("main");
  window.mySparticles = new Sparticles($main.get(0));
});

// ESM
new Sparticles( document.querySelector("main"));

// Svelte
let sparticles;
function addSparticles(node) {
  new Sparticles(node);
}
   


// count me
// $(selector).countMe(delay,speed)
     // 
     $("#counter").countMe(30,55);
     $("#counte").countMe(40,65);
     $("#count").countMe(20,45);

$(document).ready(function(){
     var mixer = mixitup('#hello', {
    
    animation: {
        duration: 300
    }
});
     $("#demo").introLoader();
});






