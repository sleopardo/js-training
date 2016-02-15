// add the corresponding listeneres in order to
// 1 - if a personality is selected it must be displayed on the right
//     of the personality list
// 2 - the browser must only redirect to the twitter handle if it is clicked
//      on the personality selected (not on the list)


var list = document.getElementById('personalities'),
	rightContainer = document.getElementById('personalitySelected');


list.addEventListener('click', function(event) {
	var target = event.target;
	if (target.tagName === 'A' && target.className !== "selected") {
		target.className = 'selected';
		rightContainer.innerHTML = 'El chabon seleccionado es ' + target.parentNode.previousElementSibling.innerHTML;
		event.preventDefault();
	}
});