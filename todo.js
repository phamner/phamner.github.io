
//create a new list item when clicking the 'add' button
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
	document.getElementById("myInput").value = "";
}



//create a 'close' button and append it to each list item
const myNodeList = document.getElementsByTagName("LI");
const i;
for (i = 0; i < myNodeList.length; i++){
	const span = document.createElement("SPAN");
	const txt = document.createTextNode("X");
	span.className = "close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}








//add checks next to items that are completed
const list = document.querySelector('ul');
list.addEventListener('click', function(ev){
	if (ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked');
	}

}, false);