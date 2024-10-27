const toggleBtn = document.querySelectorAll('.toggle_text');
const spoilerItem = document.querySelectorAll('.spoiler');
const imgItem = document.querySelectorAll('.container__wraper__present__img');
const titleItem = document.querySelectorAll('.container__wraper__present_title');
toggleBtn.forEach(function (item) {
	let carBtn = item;
	carBtn.addEventListener('click', function (event) {
		const wraperItem = event.target.closest('[data-item]');
		const spoiler = wraperItem.querySelector('.spoiler');
		const spoilerImg = wraperItem.querySelector('.container__wraper__present__img');
		const spoilerTitle = wraperItem.querySelector('.container__wraper__present_title');
		toggleBtn.forEach(function (item) {
			item.classList.remove('show');
		});
		spoilerItem.forEach(function (item) {
			item.classList.remove('show');
		});
		titleItem.forEach(function (item) {
			item.classList.remove('show');
		});
		imgItem.forEach(function (item) {
			item.classList.remove('show');
		});
		carBtn.classList.add('show');
		spoiler.classList.add('show');
		spoilerImg.classList.add('show');
		spoilerTitle.classList.add('show');
	});
});
