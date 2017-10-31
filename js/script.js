/*Navbar Offset*/

var shiftWindow = function() { 
    scrollBy(0,-100) 
};
           
if (location.hash) shiftWindow();
           
window.addEventListener("hashchange",shiftWindow);

/*Hide navbar when clicked*/
$(".navbar-collapse a").click(function() {
    
    $(".navbar-collapse").collapse("hide");
    
});


