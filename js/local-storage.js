// trigger storeFormFields function on name change
document.querySelector('.js-contact-form__name').addEventListener('keydown', storeFormField);
// trigger storeFormFields function on email change
document.querySelector('.js-contact-form__email').addEventListener('keydown', storeFormField);
//trigger storeFormFields function on message change
document.querySelector('.js-contact-form__message').addEventListener('keydown', storeFormField);

//store form fields as single object in local storage
function storeFormField(e) {
  const field = e.target.dataset.field;
  // get the form fields
  const fieldValue = document.querySelector('#' + field).value;

  // unserialize form object from local storage
  const formFields = JSON.parse(localStorage.getItem('formObject'));
  // update name field in formfields object
  formFields[field] = fieldValue;

  // serialize form object to local storage
  localStorage.setItem('formObject', JSON.stringify(formFields));
}


// check if formObject is in local storage
function checkFormObject() {
  if (!localStorage.getItem('formObject')) {
    // if not, create an empty object
    const formObject = {
      name: '',
      email: '',
      message: '',
    };
    // serialize the object to local storage
    localStorage.setItem('formObject', JSON.stringify(formObject));
  } else {
    // if yes, unserialize the object from local storage
    const formObject = JSON.parse(localStorage.getItem('formObject'));
    // set the form fields to the values from the object
    document.querySelector('.js-contact-form__name').value = formObject.name;
    document.querySelector('.js-contact-form__email').value = formObject.email;
    document.querySelector('.js-contact-form__message').value = formObject.message;
  }
}
checkFormObject();
