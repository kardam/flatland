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
		_initialPath: '',
		_interval: 0,
		
		/* mechanics properties */
		_mass: 0,
		_vx: 0,
		_vy: 0,
		
		/* constructor and destructor */
		create: function(path) {
			shape._initialPath = path;
			shape._dom = world.space.path(path);
			//shape.__recalculateMechanics();
		},
		perish: function() {
			shape._dom.remove();
		},
		
		/* mechanics methods */
		getVelocity: function() {
			return 	{	vx: shape._vx, 
						vy: shape._vy	};
		},
		addVelocity: function(vx, vy) {
			shape._vx += vx;
			shape._vy += vy;
			shape.__recalculateMechanics();
		},
		setVelocity: function(vx, vy) {
			shape._vx = vx;
			shape._vy = vy;
			shape.__recalculateMechanics();
		},
		getMass: function() {
			return shape._mass;
		},
		setMass: function(mass) {
			shape._mass = mass;
			shape.__recalculateMechanics();
		},
		__recalculateMechanics: function() {
			window.clearInterval(shape._interval);
			shape._interval = window.setInterval(function() {
				shape._dom.transform('... t '+ shape._vx +' '+ shape._vy +' ');
			}, 10);
		},
		
		/* utils */
		getPath: function() {
			currentPath = Raphael.mapPath(shape._initialPath, shape._dom.matrix);
			return currentPath;
		},
		
		/* movement methods */
		moveForward: function() {
			delta_x = shape._speed * Math.sin(shape._alpha * 180 / Math.PI);
			delta_y = shape._speed * Math.cos(shape._alpha * 180 / Math.PI);
			shape._dom.transform('... t '+ delta_x +' '+ delta_y +' ');
		},
		moveBackward: function() {
			delta_x = shape._speed * Math.sin(shape._alpha * 180 / Math.PI) * -1;
			delta_y = shape._speed * Math.cos(shape._alpha * 180 / Math.PI) * -1;
			shape._dom.transform('... t '+ delta_x +' '+ delta_y +' ');
		},
		moveLeft: function() {
			delta_x = shape._speed * Math.cos(shape._alpha * 180 / Math.PI);
			delta_y = shape._speed * Math.sin(shape._alpha * 180 / Math.PI) * -1;
			shape._dom.transform('... t '+ delta_x +' '+ delta_y +' ');
		},
		moveRight: function() {
			delta_x = shape._speed * Math.cos(shape._alpha * 180 / Math.PI) * -1;
			delta_y = shape._speed * Math.sin(shape._alpha * 180 / Math.PI);
			shape._dom.transform('... t '+ delta_x +' '+ delta_y +' ');
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
		addBrain: function(brain) {
			shape._brain = brain;
			shape._brain.addAvatar(shape);
		}, 
		removeBrain: function() {
			shape._brain.removeAvatar();
			shape._brain = false;
		}
	}; 
	shape.create(path);
	return shape;
}

