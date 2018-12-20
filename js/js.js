
/*drop down egypt*/

function myFunction() {
           document.getElementById("myDropdown").classList.toggle("show");
         }
         
         // Close the dropdown if the user clicks outside of it
         window.onclick = function(event) {
           if (!event.target.matches('.dropbtn')) {
             var dropdowns = document.getElementsByClassName("dropdown-content");
             var i;
             for (i = 0; i < dropdowns.length; i++) {
               var openDropdown = dropdowns[i];
               if (openDropdown.classList.contains('show')) {
                 openDropdown.classList.remove('show');
               }
             }
           }
         }
         
         //do not close dropdown when click inside the box
         $(document).on('click', '#myDropdown', function (e) {
            e.stopPropagation();
         });







  /**************************owl1***********************/
         
         $('.owl-carousel1').owlCarousel({
         rtl:true,
         loop:true,
         margin:10,
         nav:true,
         autoplay:true,
         autoplayTimeout:5000,
         responsive:{
         0:{
         items:1
         },
         600:{
         items:1
         },
         1000:{
         items:1
         }
         }
         })

  /*owl2*/
         
         $('.owl-carousel2').owlCarousel({
         ltr:true,
         loop:true,
         margin:5,
         nav:true,
         autoplay:true,
         autoplayTimeout:5000,
         responsive:{
         0:{
         items:2
         },
         600:{
         items:3
         },
         1000:{
         items:6
         }
         }
         })


/*side navbar*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.transform  = "translate(250px)";
  /*document.body.style.backgroundColor = "rgba(0,0,0,0.4)";*/
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style .transform  = "translate(0px)";
  document.body.style.backgroundColor = "white";
}


/*drop down in side nave*/
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
/**************************************************/
/*toogel for navbar*/
/**************************************************/
$(document).ready(function(){
  $(".search_button").click(function(){
    $(".search-small-device").toggle();
  });
});