'use strict';

var html = document.querySelector('html');
html.classList.add('js');

if (html.id === 'shipping-info') {
	var pageForm = document.querySelector('form[name="shippingform"]');
	var elementList = document.querySelectorAll('#shippingform input');
	pageForm.addEventListener('submit', submitForm);
}
if (html.id === 'billing-info') {
	var pageForm = document.querySelector('form[name="billingform"]');
	var elementList = document.querySelectorAll('#billingform input');
	pageForm.addEventListener('submit', submitForm);
}

function submitForm(event){
	var target = event.target;
	event.preventDefault();
	var isError = false;
	for (var i = 0, element; element = elementList[i++];){
		if (element.value === "")
			isError = true;
	}
	if(isError)
		alert("Some fields are blank. Please fill out entire form.");
	if(!isError)
		window.location = "../billing/index.html";
}
