function helloGuest(){
	const firstName = document.myform.firstname.value;
	const lastName = document.myform.lastname.value;

	alert("Hi " + firstName + " " + lastName + ", thanks for visiting my website!");
}