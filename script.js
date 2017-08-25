var simonSays = {
	sequence: [1,2,3,4,2,4,1,3],
	boxColors:
	{
		1: { 0: '#003300', 1: '#00cc00'	},
		2: { 0: '#800000', 1: '#cc0000' },
		3: { 0: '#000066', 1: '#0000ff' },
		4: { 0: '#663300', 1: '#cc9900' }
	},
	growSequence: function(addThisMany) {
		console.log("§ simonSays.growSequence §");
		// new random move
		while (--addThisMany > 0) {
			this.sequence.push(Math.floor(Math.random()*4));
		}
	},
	playSequence: function() {
		console.log("§ simonSays.playSequence §");
		this.sequence.forEach(function(box){
			simonSays.illumeBox(box);
		});
	},
	illumeBox: function(box) {
		console.log("§ simonSays.illumeBox §");
		// set new temporary button color
		setTimeout(function(){
			document.getElementById(box).style.backgroundColor = simonSays.boxColors[box][1];
		}, 750);
		document.getElementById(box).style.backgroundColor = simonSays.boxColors[box][0];
	}
};

var handlers = {
	tap: function(box) {
		console.log("§ handlers.tap §");
		simonSays.playSequence();
	}
};
