document.addEventListener("DOMContentLoaded", function(event) {
	// simonSays.illumeBox(['a','d','b','c']);
  setTimeout(function(){
		simonSays.growSequence();
		simonSays.playSequence();
	},4*800);
});

var simonSays = {
	sequence: [],
	boxColors:
	{
		0: { 'a': '#003300', 'b': '#660000', 'c': '#663300', 'd': '#000066'},
		1: { 'a': '#00cc00', 'b': '#cc0000', 'c': '#cc9900', 'd': '#0040ff'}
	},
	growSequence: function() {
		this.sequence.push(['a','b','c','d'][Math.floor(Math.random()*4)]);
	},
	playSequence: function() {
		simonSays.illumeBox(this.sequence);
	},
	illumeBox: function(boxes) {
		// uses the index to set the timeout
		boxes.forEach(function(box, timeout) {
			setTimeout(function(){
				document.getElementById(box).style.backgroundColor = simonSays.boxColors[1][box];
			}, timeout * 800);
			setTimeout(function(){
				document.getElementById(box).style.backgroundColor = simonSays.boxColors[0][box];
			}, timeout * 800 + 300);
		});
	}
};

var handlers = {
	tap: function(box) {
		simonSays.illumeBox(box);
	}
};
