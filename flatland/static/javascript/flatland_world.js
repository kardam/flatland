
/* flatland, our world: a god object */
var world  = {
	
	dom: false, 
	space: false, 
	shapes: {}, 
	
	create: function() {
		world.dom = $('#world');
		world.space = Raphael(document.getElementById('world'), 500, 500);
	}
	
}


/* shape: class definition */
var shape = function(path) {
	var shape = {
		/* private properties */
		_dom: false, 
		_alpha: 45, 
		_speed: 10, 
		_rotationSpeed: 10, 
		
		/* constructor and destructor */
		create: function(path) {
			shape._dom = world.space.path(path);
		}, 
		perish: function() {
			shape._dom.remove();
		}, 
		
		/* movement methods */
		moveForward: function() {
			delta_x = shape._speed * Math.sin(shape._alpha * 180 / Math.PI);
			delta_y = shape._speed * Math.cos(shape._alpha * 180 / Math.PI);
			shape._dom.transform('... t '+ delta_x +' '+ delta_y);
		}, 
		moveBackward: function() {
			delta_x = shape._speed * Math.sin(shape._alpha * 180 / Math.PI);
			delta_y = shape._speed * Math.cos(shape._alpha * 180 / Math.PI);
			shape._dom.transform('... t -'+ delta_x +' -'+ delta_y);
		}, 
		moveLeft: function() {
			return;
		}, 
		moveRight: function() {
			return;
		}, 
		rotateLeft: function() {
			//shape._alpha -= shape._rotationSpeed;
			shape._dom.transform('... r -'+ shape._rotationSpeed);
		}, 
		rotateRight: function() {
			//shape._alpha += shape._rotationSpeed;
			shape._dom.transform('... r '+ shape._rotationSpeed);
		}, 
		
		/* AI methods */
		addBrain: function() {
			return;
		}, 
		removeBrain: function() {
			return;
		}
	}; 
	shape.create(path);
	return shape;
}


/* init */
$(document).ready(function() {
	world.create();
	character = new shape('M 50 50 L 50 100 L 100 100 L 100 50 L 50 50');
});
