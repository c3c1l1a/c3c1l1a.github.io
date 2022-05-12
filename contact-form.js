const contactForm = document.querySelector(".js-contact-form");
contactForm.addEventListener('submit', (event)=> {
	event.preventDefault();

	const contactFormEmail = document.querySelector(".js-contact-form__email");
	if (contactFormEmail.value !== contactFormEmail.value.toLowerCase()){
		let error = 	document.querySelector(".js-input-error__email");
		error.style.display = "block";
	}

	event.target.reset();
});

