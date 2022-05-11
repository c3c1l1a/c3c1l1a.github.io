
const contactForm = document.querySelector(".js-contact-form");
contactForm.addEventListener('submit', (event)=> {
	console.log("test");
	event.preventDefault();
	const contactFormEmail = document.querySelector(".js-contact-form__email");
	if (contactFormEmail.value !== contactFormEmail.value.toLowerCase()){
		let error = 	document.querySelector(".js-contact-form__error--emailCase");
		error.style.display = "block";
	}
});

