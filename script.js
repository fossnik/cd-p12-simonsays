var simonSays = {
	sequence: [1,2,3,4,2,4,1,3],
	boxColors:
	{
		0: { 1: '#003300', 2: '#800000', 3: '#000066', 4: '#663300'},
		1: { 1: '#00cc00', 2: '#cc0000', 3: '#0000ff', 4: '#cc9900'}
	},
	growSequence: function(addThisMany) {
		while (--addThisMany > 0) {
			this.sequence.push(Math.floor(Math.random()*4));
		}
	},
	playSequence: function() {
		this.sequence.forEach(function(box){
			simonSays.illumeBox(box);
		});
	},
	illumeBox: function(box) {
		setTimeout(function(){
			document.getElementById(box).style.backgroundColor = simonSays.boxColors[1][box];
		}, 750);
		document.getElementById(box).style.backgroundColor = simonSays.boxColors[0][box];
	}
};

var handlers = {
	tap: function(box) {
		simonSays.playSequence();
	}
};
