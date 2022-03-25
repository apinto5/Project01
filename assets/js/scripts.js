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
	pageForm.addEventListener('submit', submitForm);
	var elementList = document.querySelectorAll('#billingform input');
	var billingSame = document.querySelector('input[name="billingCheckbox"]');
	billingSame.addEventListener('click', disableInputs);
}
if (html.id === 'confirmation-page') {
	var restartBut = document.querySelector('h2[name="restartButton"]');
	restartBut.addEventListener('click', newOrder);
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
	if(!isError & html.id === 'shipping-info')
		window.location = "billing/index.html";
	if(!isError & html.id === 'billing-info')
		window.location = "../confirmation/index.html";
}
function newOrder(event){
	window.location="../index.html"
}
function disableInputs(event){
	if(document.getElementById('confirmBilling') . checked){
		for (var i = 4, element; element = elementList[i++];){
			document.billingform.elements[i].disabled=true;
		}
	}
	else{
		for (var i = 4, element; element = elementList[i++];){
			document.billingform.elements[i].disabled=false;
		}
	}
}
