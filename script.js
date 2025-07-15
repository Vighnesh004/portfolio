function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
var icon = document.getElementById("mode");
var icon1 = document.getElementById("mode1");
var demo1 = document.getElementById("tick1");
var demo2 = document.getElementById("tick2");
var demo3 = document.getElementById("tick3");
var demo4 = document.getElementById("tick4");
var demo5 = document.getElementById("tick5");
var demo6 = document.getElementById("tick6");
demo=[demo1,demo2,demo3,demo4,demo5,demo6];
icon.onclick=handleclick;
icon1.onclick=handleclick;
function newimg()
{
  updateimg="assets/checkmark1.png"
}
function handleclick()
{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src= "assets/sun.png";
    icon1.src= "assets/sun.png";
    demo.forEach(img => img.src="assets/checkmark1.png");
    }
    /*  LINE COMPLEXITY REDUCED
    demo1.src= "assets/checkmark1.png";
    demo2.src= "assets/checkmark1.png";
    demo3.src= "assets/checkmark1.png";
    demo4.src= "assets/checkmark1.png";
    demo5.src= "assets/checkmark1.png";
    demo6.src= "assets/checkmark1.png";*/
  else{
    icon.src= "assets/moon.png";
    icon1.src= "assets/moon.png";
    demo.forEach(img => img.src="assets/checkmark.png");
    /*
    demo1.src= "assets/checkmark.png";
    demo2.src= "assets/checkmark.png";
    demo3.src= "assets/checkmark.png";
    demo4.src= "assets/checkmark.png";
    demo5.src= "assets/checkmark.png";
    demo6.src= "assets/checkmark.png";*/
  }
}