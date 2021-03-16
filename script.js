var test=document.querySelector("h4");
var css=document.querySelector("h3");
var color1 =document.querySelector(".color1");
var color2 =document.querySelector(".color2");
var body=document.getElementById("gradient");


function changeBg(){
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+"," + color2.value +")";
	css.innerHTML=body.style.background;
	test.textContent="test";
}
color1.addEventListener("input",changeBg);
color2.addEventListener("input",changeBg);