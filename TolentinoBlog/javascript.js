function display() {
	var title = document.getElementById('title').value;
	var fname = document.getElementById('first').value;
	var mname = document.getElementById('middle').value;
	var lname = document.getElementById('last').value;
	var content = document.getElementById('content').value;

	document.getElementById('input_title').innerHTML = title;
	document.getElementById('input_author').innerHTML = first + " " + middle + " " + last;
	document.getElementById('input_content').innerHTML = content;
}