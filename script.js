var simonSays = {
	sequence: [1,2,3,4],
	boxColors:
	{
		0: { 1: '#003300', 2: '#660000', 3: '#000066', 4: '#663300'},
		1: { 1: '#00cc00', 2: '#cc0000', 3: '#0040ff', 4: '#cc9900'}
	},
	growSequence: function(addThisMany) {
		while (--addThisMany > 0) {
			this.sequence.push(Math.floor(Math.random()*4));
		}
	},
	playSequence: function() {
		// uses the index to set the timeout
		this.sequence.forEach(function(box, timeout){
			simonSays.illumeBox(box, timeout);
		});
	},
	illumeBox: function(box, timeout) {
		setTimeout(function(){
			document.getElementById(box).style.backgroundColor = simonSays.boxColors[1][box];
		}, timeout * 1000);
		setTimeout(function(){
			document.getElementById(box).style.backgroundColor = simonSays.boxColors[0][box];
		}, timeout * 1000);
	}
};

var handlers = {
	tap: function(box) {
		simonSays.playSequence();
	}
};
