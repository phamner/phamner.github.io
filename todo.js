
//create a new list item when clicking the 'add' button
function newElement(){
	const li = document.createElement("li");
	const inputValue = document.getElementById("myInput").value;
	const t = document.createTextNode(inputValue);
	li.appendChild(t);

	// Adding close button to the todo item LI
	var close = document.createElement("SPAN");
	var txt = document.createTextNode(" X");
	close.className = "close";
	close.appendChild(txt);
	li.appendChild(close);


	// Adding close functionality to the 'X'
	close.onclick = function(){
		const div = this.parentElement;
		div.remove();
	}

	//Adding 'cross out' functionality
	li.onclick = function(){
		console.log(window.getComputedStyle(li).getPropertyValue('text-decoration'))
		if(window.getComputedStyle(li).getPropertyValue('text-decoration') === "line-through solid rgb(0, 0, 0)"){
			li.style.cssText = "text-decoration: none";
		}
		else{
			li.style.cssText = "text-decoration: line-through";
		}
	}




	if (inputValue === ""){
		alert("You must write something!")
	}
	else{
		document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";
}




//add checks next to items that are completed
const list = document.querySelector('ul');
list.addEventListener('click', function(ev){
	if (ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked');
	}
}, false);