const menu = document.querySelector('.menu__down');
const burger = document.querySelector('#burger');
const menuEvent = document.querySelector('.menu__down__nav');
const menuLogo = document.querySelector('.menu__down__logo');
const menuLeft = document.querySelector('.menu__down__nav__left');
const menuNav = document.querySelectorAll('.a__menu__down__nav');
const closed = document.querySelector('.closed');

burger.addEventListener("click",function(event){
	event.preventDefault();
	menuEvent.classList.add("active");
	burger.classList.add("show");
	menuLogo.classList.add("show");
	menu.classList.add("show");
	menuLeft.classList.add("show");

});
menuNav.forEach(function(item){
	item.addEventListener("click",function(){
	menuEvent.classList.remove("active");
	burger.classList.remove("show");
	menuLogo.classList.remove("show");
	menu.classList.remove("show");
	menuLeft.classList.remove("show");
	});
});
closed.addEventListener("click",function(event){
	event.preventDefault();
	menuEvent.classList.remove("active");
	burger.classList.remove("show");
	menuLogo.classList.remove("show");
	menu.classList.remove("show");
	menuLeft.classList.remove("show");
	console.log('active')
});

window.addEventListener("scroll",function(){
	let scroll = window.scrollY;
	if(scroll > 0){
		menu.classList.add('active');
		burger.classList.add('active');
	}
	else{
		menu.classList.remove('active');
		burger.classList.remove('active');
	}

});

