
// flatland, our world
var world  = {
	
	dom: false, 
	space: false, 
	shapes: {}, 
	
	create: function() {
		world.dom = $('#world');
		world.space = Raphael(document.getElementById('world'), 500, 500);
	}
	
}


var shape = function(path) {
	var shape = {
		dom: false, 
		create: function(path) {
			shape.dom = world.space.path(path);
		}, 
		perish: function() {
			shape.dom.remove();
		}, 
		transform: function(string) {
			shape.dom.transform(string);
		}, 
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


$(document).ready(function() {
	world.create();
});