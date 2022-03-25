'use strict';

var html = document.querySelector('html');
html.classList.add('js');
var isError = false;

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
	isError = false;
	var target = event.target;
	event.preventDefault();
	for (var i = 0, element; element = elementList[i++];){
		if (element.value === "" & element.disabled === false)
			isError = true;
	}
	if(isError)
		alert("Some fields are blank. Please fill out entire form.");
  else{
		inputValidation();
	}
}
function inputValidation(){
	isError = false;
	if(html.id === 'shipping-info'){
		var checkedElement = document.shippingform.userEmail.value;
		if(checkedElement.includes("@") === false){
		  alert("Please enter a valid email address");
			isError = true;
		}
		checkedElement = document.shippingform.inputZip.value;
		if (checkedElement.length !=5){
			alert("Please enter a valid zipcode!");
      isError = true;
		}
		checkedElement = document.shippingform.phoneInput.value;
		checkedElement = checkedElement.replace(/\-/g, '');
		checkedElement = checkedElement.replace(/\(/g, '');
		checkedElement = checkedElement.replace(/\)/g, '');
		checkedElement = checkedElement.replace(/ /g, '');
		checkedElement = checkedElement.replace(/\+/g, '');
		if (checkedElement.length !=10 & checkedElement.length != 11){
			alert("Please enter a valid phone number!");
			isError = true;
		}
		if(html.id === 'shipping-info'){
    }
	}

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
		  document.billingform.elements[10].disabled=false;

	}
	else{
		for (var i = 4, element; element = elementList[i++];){
			document.billingform.elements[i].disabled=false;
		}
	}
}
