/* ===== SHOW MENU ===== */
const navMenu = document.getElementById('nav-menu');
const closeNav = document.getElementById('nav-close');
const toggleNav = document.getElementById('nav-toggle');

// Show Menu
toggleNav.addEventListener('click', ()=>{
	navMenu.classList.toggle('show-menu')
});

// Hide Menu
closeNav.addEventListener('click', ()=>{
	navMenu.classList.remove('show-menu')
});
// ===== end show menu ===== //

// ===== REMOVE MOBILE MENU =====  //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));
// ===== end remove menu ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const nav = document.getElementById('header')

	if (this.scrollY >= 200) {
		nav.classList.add('scroll-header');
	}else{
		nav.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

/* ===== COUNTDOWN TIMER ===== */
const countdownDate = new Date("December 25, 2022 09:00:00").getTime();

const timerFunction = setInterval(() => {
	const currentDate = new Date().getTime();
	const finalTime = countdownDate - currentDate;

	if(finalTime > 0){
		const days = Math.floor(finalTime / (1000*60*60*24));
		const hours = Math.floor((finalTime % (1000*60*60*24)) / (1000*60*60));
		const minutes = Math.floor((finalTime % (1000*60*60)) / (1000*60));
		const seconds = Math.floor((finalTime % (1000*60)) / (1000));

		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	}else{
		clearInterval(timerFunction);
		document.getElementById("timer-stop").innerHTML = "The Countdown is Over!";
   }
}, 1000);
// ===== end countdown timer ===== //

// ===== VIDEO ===== //
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

function playPause(){
	if(videoFile.paused){
		// Play video
		videoFile.play()

		// We change the icon
		videoIcon.classList.add('ri-pause-line')
		videoIcon.classList.remove('ri-play-line')
	} else{
		// Play video
		videoFile.pause()

		// We change the icon
		videoIcon.classList.remove('ri-pause-line')
		videoIcon.classList.add('ri-play-line')
	}
}
videoButton.addEventListener('click', playPause);

function finalVideo(){
	// Video ends, icon change
	videoIcon.classList.remove('ri-pause-line')
	videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo);
// ===== end video ===== //

// ===== RSVP ===== //
const rsvpRespon = document.querySelector('.rsvp__respon');
const rsvpForm = document.querySelector('.rsvp__form');

// Area Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbw1j0LN_CLieUYLIrnIds9QvQBLYhIzvGJVEv3QQ0KlIL1t_901qb9-dAomsF-iZv3b/exec';

const form = document.forms['rsvp-input-data']

form.addEventListener('submit', e => {
   e.preventDefault();
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => {
      // Alert: RSVP Respon
      rsvpRespon.classList.toggle('rsvp-respon');

      // Resert Form
      rsvpForm.reset();

      console.log('Success!', response);
   })
   .catch(error => console.error('Error!', error.message))
});
// ===== end rsvp ===== //

// ===== WEDDING GIFT ===== //
const giftButton = document.getElementById('gift-button'),
		giftRekening = document.getElementById('gift-rekening');

giftButton.addEventListener('click', ()=>{
	giftRekening.classList.add('show-rekening');
	giftButton.style.marginBottom = "3rem";
});

const bca = document.getElementById('bca'),
		mandiri = document.getElementById('mandiri');
const copyBca = document.querySelector('.copy__bca'),
		copyMandiri = document.querySelector('.copy__mandiri');

copyBca.addEventListener('click', ()=>{
	document.execCommand("copy");
});
copyMandiri.addEventListener('click', ()=>{
	document.execCommand("copy");
});

copyBca.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", bca.textContent);
		alert("Copied!")
	}else{
		alert("Not copied!")
	}
});
copyMandiri.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", mandiri.textContent);
		alert('Copied!')
	}else{
		alert("Not Copied!")
	}
});
// ===== end wedding gift ===== //

// ===== BACKSOUND ===== //
const backsound = document.getElementById('song');
const backsoundIcon = document.getElementById('backsound-icon');

backsoundIcon.onclick = ()=>{
	if(backsound.paused){
		backsound.play();
		backsoundIcon.src = "assets/img/pause.png";
	}else{
		backsound.pause();
		backsoundIcon.src = "assets/img/play.png";
	}
}
// ===== end backsound ===== //

/* ===== SHOW SCROLL TOP ====== */
function scrollTop(){
	const scrollTop = document.getElementById('scroll-top');

	if (this.scrollY >= 560) {
		scrollTop.classList.add('show-scroll')
	} else{
		scrollTop.classList.remove('show-scroll')
	}
}
window.addEventListener('scroll', scrollTop);
// ===== end show scroll top ===== //

/* ===== POPUP ===== */
const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popup-btn');

popupBtn.addEventListener('click', ()=>{
	document.body.style.overflow = 'auto';
	popup.style.display = 'none';
});
// ===== end popup ===== //

// // ===== AOS ANIMATE ===== //
// 1. popup -> .popup__container

// 2. home -> .home__content

// 3. quotes -> .quotes__container

// 4. couple -> .couple__container

// 5. event -> .event__box
const eventBox = document.querySelectorAll('.event__box');
eventBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 6. countdown timer -> .timer__box
const timerBox = document.querySelectorAll('.timer__box');
timerBox.forEach((n, i) => {
	n.dataset.aos = 'flip-left';
	n.dataset.aosDelay = i * 100;
});

// 7. section title -> .section-title

// 8. gallery -> .gallery__box
const galleryBox = document.querySelectorAll('.gallery__box');
galleryBox.forEach((img, i) => {
	img.dataset.aos = 'zoom-in-down';
	img.dataset.aosDelay = i * 100;
});

// 9. video -> .video__container

// 10. rsvp -> .rsvp__container

// 11. gift -> .gift__container

// 12. pray -> .pray__container

// 13. prokes -> .prokes__box
const prokesBox = document.querySelectorAll('.prokes__box');
prokesBox.forEach((n, i) => {
	n.dataset.aos = 'flip-left';
	n.dataset.aosDelay = i * 100;
});

// footer -> .footer__box
const footerBox = document.querySelectorAll('.footer__box');
footerBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

AOS.init({
	duration: 1500,
	once: true,  
});
// // ===== end aos animate ===== //