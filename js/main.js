$(document).ready(function(){
	$("#owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true
	});
});

const elementSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
elementSpan.innerHTML = currentYear;