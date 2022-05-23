"use strict";

import '../styles/index.scss';
import $ from "jquery";
import "slick-carousel";


//hamburger menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

//form
const contactForm = document.querySelector('.button');
const shadowForm = document.querySelector('.form');
const mainForm = document.querySelector('.form__wrap');
const closeForm = document.querySelector('.close');
if (contactForm) {
	contactForm.addEventListener("click", function(e) {
		document.body.classList.toggle('lock');
		shadowForm.classList.toggle('active');
		mainForm.classList.toggle('active');
	});
}
closeForm.addEventListener('click', function(e){
	document.body.classList.remove('lock');
	shadowForm.classList.remove('active');
	mainForm.classList.remove('active');
});

//smooth scroll

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			if(iconMenu.classList.contains('active')) {
				document.body.classList.remove('lock');
				iconMenu.classList.remove('active');
				menuBody.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

$(".carousel").slick();

