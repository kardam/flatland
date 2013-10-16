var d = {

	mode: "2d",
  shapes: [
    {
      type: "hero",
      coord: [[10,10],[20,20],[30,30]],
      alpha: 90
    },
    {
      type: "line",
      coord: [40,50]
    }
  ],
};

var visualizeShape = function(shape) {
	//console.log(shape.coord);
}

visualizeShape(d.character);

//socket should be visible
//var socket = io.connect('http://localhost:8422');

var events = {
  moveLeft: function() {
    console.log("left");
    socket.send("left");
  },
  moveRight: function() {
    console.log("right");
    socket.send("right");
  },
  moveForward: function() {
    console.log("for");
    socket.send("for");
  },
  moveBackward: function() {
    console.log("back");
    socket.send("back");
  }
}

$(document).ready(function() {

	/*var paper = Raphael(10, 10, 500, 500);
	var circle = paper.circle(50, 40, 10);
	circle.attr("fill", "#f00");
	circle.attr("stroke", "#fff");
	
	var coord = [10,10,50,50]
	var c = paper.rect(10,10,50,50);*/
	
	// abstraction level: upper
	// .. input

	$(document).keydown(function(e) {
		switch(e.which) {
			case 37: 
				character.rotateLeft();
				break;
			case 38: 
				character.moveForward();
				break;
			case 39: 
				character.rotateRight();
				break;
			case 40: 
				character.moveBackward();
				break;
			default: return;
		}
		e.preventDefault();
	});
	
  var coord = [10,10,50,50];

  //var c = paper.rect(10,10,50,50);

  /*socket.on('connect', function () {
    socket.send(555);

    socket.on('message', function (msg) {
      console.log(111);
    });
  });*/


});

$(document).keypress(function(e) {
  console.log( "Handler for .keypress() called." );
  console.log(e);
  //socket.send(e);
});


// add new method for all raphael objects of type 'path' that
// retrieves the current path string
Raphael.el.getCurrentPath = function() {
  return Raphael.transformPath(this.getPath().toString(), this.matrix.toTransformString()).toString();
}

