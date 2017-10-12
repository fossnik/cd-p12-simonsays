var beep1 = document.createElement('AUDIO');
var beep2 = document.createElement('AUDIO');
var beep3 = document.createElement('AUDIO');
var beep4 = document.createElement('AUDIO');
var src1 = document.createElement('SOURCE');
var src2 = document.createElement('SOURCE');
var src3 = document.createElement('SOURCE');
var src4 = document.createElement('SOURCE');
src1.type = 'audio/mpeg';
src2.type = 'audio/mpeg';
src3.type = 'audio/mpeg';
src4.type = 'audio/mpeg';
src1.src = 'audio/1.mp3';
src2.src = 'audio/2.mp3';
src3.src = 'audio/3.mp3';
src4.src = 'audio/4.mp3';
beep1.appendChild(src1);
beep2.appendChild(src2);
beep3.appendChild(src3);
beep4.appendChild(src4);

var stateData = {
	depthInSequence : 0,
};

var simonSays = {
	sequence: [],
	boxColors:
	{
		0: { 'a': '#003300', 'b': '#660000', 'c': '#663300', 'd': '#000066'},
		1: { 'a': '#00cc00', 'b': '#cc0000', 'c': '#cc9900', 'd': '#0040ff'}
	},
	growSequence: function() {
		this.sequence.push(['a','b','c','d'][Math.floor(Math.random()*4)]);
		this.playSequence();
	},
	playSequence: function() {
		this.sequence.forEach(function(box, timeout) {
			// uses the index to set the timeout
			simonSays.illumeBox(box, timeout);
		});
	},
	illumeBox: function(box, timeout) {
		setTimeout(function(){
			switch(box) {
				case 'a':	beep1.play(); break;
				case 'b':	beep2.play(); break;
				case 'c':	beep3.play();	break;
				case 'd':	beep4.play();	break;
			}
			document.getElementById(box).style.backgroundColor = simonSays.boxColors[1][box];
		}, timeout * 800);

		setTimeout(function(){
			document.getElementById(box).style.backgroundColor = simonSays.boxColors[0][box];
		}, timeout * 800 + 300);
	},
	testBox: function(box) {
		if (box === simonSays.sequence[stateData.depthInSequence]) {
			stateData.depthInSequence++;
		} else {
			alert("You Lose");
			window.location.reload();
		}
	},
	nextLevel: function() {
		setTimeout(function(){
			document.getElementByClass
			document.getElementById("success").style.backgroundColor = "green";
		}, 500);
		setTimeout(function(){
			document.getElementById("success").style.backgroundColor = "white";
		}, 1500);

		setTimeout(function(){
			simonSays.growSequence();
		}, 2500);
		stateData.depthInSequence = 0;
	}
};

var handlers = {
	tap: function(box) {
		simonSays.illumeBox(box, 0);
		if (stateData.depthInSequence < simonSays.sequence.length) {
			simonSays.testBox(box);
		}
		if (stateData.depthInSequence >= simonSays.sequence.length) {
			simonSays.nextLevel();
		}
	}
};

document.addEventListener("DOMContentLoaded", function(event) {
	simonSays.growSequence();
});
