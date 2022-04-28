console.log('Hello Everybody');

//Get the button:
mybutton = document.getElementById("btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

// >>>>>>>>> basic scrolling <<<<<<<<<
function toTop(){
    document.documentElement.scrollTop = 0;
} 