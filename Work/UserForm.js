
function userForm(){
	var data=document.forms.formUser.getElementsByTagName("input");
	var messageForUser="";
	
	if ( data[0].value == ''|| data[0].value==null){
		messageForUser=messageForUser+"Please specify your NAME!";
	}
	
	if(data[1].value=='' || data[1].value==null){
		messageForUser=messageForUser+'\n'+"Please specify your E-MAIL!";
	}
	
	if(data[3].value==''){
		messageForUser=messageForUser+'\n'+"Please specify a MESSAGE!";
	}
	//verify if the name is a string, the phone number a number and the email is a correct one 
	var re = /^[A-Za-z]+$/;
	var re1=/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
	
	if(!re.test(data[0].value)){
		messageForUser=messageForUser+'\n'+"Your name isn't a string!";
	}
	
	if(re.test(data[2].value)){
		messageForUser=messageForUser+'\n'+"Your phone number isn't a corect one!";
	}
	
	if(re1.test(data[1].value)){
	messageForUser=messageForUser+'\n'+"Your email isn't a corect one!";
	}
	
	
	if (messageForUser == ""){
		alert("Your message had been sent!");
	}else{
		alert(messageForUser);
	}
	
	
	
}

