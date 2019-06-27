var task = document.getElementById('task');
var input = document.getElementById('input');
var ul = document.querySelector('ul');
var list = document.getElementsByTagName('div');

function inputLength() {
	return task.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.add('yo');
	li.setAttribute("onclick", "changeClass(this)");
	li.appendChild(document.createTextNode(task.value));
	var btn = document.createElement("button");
	
	btn.innerHTML = "Delete";
	btn.setAttribute("id", "btn");
	btn.setAttribute("onclick", "removeDiv(this)");
	var div = document.createElement("div");

	div.appendChild(li);
	div.appendChild(btn);
	
	ul.appendChild(div);
	task.value="";

}

function addListAfterClick() {
	if (inputLength() > 0){
	createListElement();
	}
}


function addListAfterKeypress(a) {
	if (inputLength() > 0 && a.keyCode === 13){
	createListElement();	
	}
}


function removeDiv(element){
            $(element).parent('div').remove();
        }


function changeClass(elem) {
	$(elem).toggleClass('done');
}


input.addEventListener("click", addListAfterClick);

task.addEventListener("keypress", addListAfterKeypress);

// for (var i = 0; i < list.length ; i++) {
// 	list[i].addEventListener("click", toggleClass);
// }