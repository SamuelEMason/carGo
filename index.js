
let intervalID;
let isReverse = false;

function repeat() {
	intervalID = setInterval(moveElement, 100);
}

function moveElement() {
	const header = document.getElementById('vehicle');
	let x = header.style.left;
	x = +x.replace('px', '');

	if (x <= 0) {
		isReverse = false;
	}
	else if (x >= window.innerWidth - header.clientWidth) {
		isReverse = true;
	}

	if (isReverse) {
		x -= 10;
	}
	else {
		x += 10;
	}
	header.style.left = `${x}px`;
}
let skyHeight = document.querySelector('#sky').style.height;

console.log(skyHeight);
document.querySelector('#ground').style.height = window.innerHeight - 

repeat();

document.querySelector('#moon').textContent = window.innerHeight;