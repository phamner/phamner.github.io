function check(){
	var q1 = document.myform.q1.value;
	var q2 = document.myform.q2.value;
	var q3 = document.myform.q3.value;
	var count = 0;

	if (q1 == "a"){
		count++;
	}
	if (q2 == "a"){
		count++;
	}
	if (q3 == "b"){
		count++;
	}
	alert("you got " + count + " answers correct!");
}
