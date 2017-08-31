var simonSays = {
	sequence: [],
	boxColors:
	{
		0: { 1: '#003300', 2: '#660000', 3: '#000066', 4: '#663300'},
		1: { 1: '#00cc00', 2: '#cc0000', 3: '#0040ff', 4: '#cc9900'}
	},
	growSequence: function() {
		this.sequence.push(Math.floor(Math.random()*4));
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
