let omShanti =  document.getElementById('omShanti');
let myPopper = document.getElementById('myPopper');
let arpanFirst = document.getElementById('arpanFirst');
let popper = document.getElementById('popper');

function playPop()
{
	myPopper.play();
	arpanFirst.style.display = 'none';
	popper.className = 'popperShow';
}


function playSong(){
	omShanti.play();
}
