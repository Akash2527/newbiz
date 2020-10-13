var menu = document.getElementById("menu")
var ul = document.getElementById("ul")
var close = document.getElementById("close")

function opens(){
	if(ul.style.left === '-100%'){
		ul.style.left = '0'
		ul.style.transition = '.4s'
		
	} else {
		ul.style.left = '-100%'
	}
}
var navbar = document.getElementById("navbar")
var navimg = document.getElementById("navimg")
window.onscroll = function(){
	scrollTop()
}
function scrollTop(){
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		navbar.style.height = "65px"
		navimg.style.height = "1.4rem"
		document.querySelectorAll('a').style.fontSize = '13px'
	} else {
		navbar.style.height = "80px"
		navimg.style.height = "1.7rem"
	}
}