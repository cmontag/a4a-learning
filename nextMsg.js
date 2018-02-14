var count = 0;

function nextMsg() {
	var x = document.getElementById('butt' + count.toString());
	count++;
	var y = document.getElementById('butt' + count.toString());
	var z = document.getElementById('cover' + count.toString());
	x.style.display = 'none';
	y.style.display = 'block';
	z.style.display = 'none';
}