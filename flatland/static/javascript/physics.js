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
		/* material properties */
		_initialPath: '',
		_dom: false,
		
		/* mechanics properties */
		_mass: 0,
		_vx: 0,
		_vy: 0,
		_omega: 0,
		
		/* ai properties */
		_brain: false,
		
		/* constructor and destructor */
		create: function(path) {
			shape._initialPath = path;
			shape._dom = world.space.path(path);
		},
		perish: function() {
			shape._dom.remove();
		},
		
		/* material (aka svg) methods */
		/* .. utils */
		getPath: function() {
			currentPath = Raphael.mapPath(shape._initialPath, shape._dom.matrix);
			return currentPath;
		},
		
		/* mechanics methods */
		/* .. linear velocity */
		getVelocity: function() {
			return 	{	vx: shape._vx, 
						vy: shape._vy	};
		},
		addVelocity: function(vx, vy) {
			shape._vx += vx;
			shape._vy += vy;
		},
		setVelocity: function(vx, vy) {
			shape._vx = vx;
			shape._vy = vy;
		},
		
		/* .. angular velocity */
		getAngularVelocity: function() {
			return shape._omega;
		},
		addAngularVelocity: function(omega) {
			shape._omega += omega;
		},
		setAngularVelocity: function(omega) {
			shape._omega = omega;
		},
		
		/* .. mass */
		getMass: function() {
			return shape._mass;
		},
		setMass: function(mass) {
			shape._mass = mass;
		},
		
		/* .. change state */
		move: function() {
			if(shape._vx != 0 || shape._vy != 0) {
				shape._dom.transform('... t '+ shape._vx +' '+ shape._vy +' ');
			}
			if(shape._omega != 0) {
				shape._dom.transform('... r '+ shape._omega);
			}
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

