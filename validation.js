function vaidateform(fm){
	if(fm.firstname.value==""){
		alert("Please enter your First Name!");
		return false;
	}
	if(fm.lastname.value==""){
		alert("Please enter your Last Name!");
		return false;
	}

	if(fm.gender.value==""){
		alert("Please select your gender");
		return false;
	}
	if(fm.gender.value==""){
		alert("Please enteryour address");
		return false;
	}
	if(fm.number.value==""){
		alert("Please enter your mobie number");
		return false;
	}
	if(fm.email.value==""){
		alert("Please enteryour email");
		return false;
	}
	if(fm.faculty.value==""){
		alert("Please choose your faculty");
		return false;
	}
	if(fm.qualification.value==""){
		alert("Please choose your qualification");
		return false;
	}
}