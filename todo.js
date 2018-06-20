function newElement(){
	const li = document.createElement("li");
	const inputValue = document.getElementById("myInput").value;
	const t = document.createTextNode(inputValue);
	li.appendChild(t);

	if (inputValue === ""){
		alert("You must write something!")
	}
	else{
		document.getElementById("myUL").appendChild(li);
	}
}