/* flatland, our world: a god object */
var world  = {
	
	dom: false,
	space: false,
	shapes: {},
	
	create: function() {
		world.dom = $('#world');
		world.space = Raphael(document.getElementById('world'), 500, 360);
	}
	
}


/* shape: class definition */
var shape = function(path) {
	var shape = {
		/* material properties */
		_initialPath: '',
		_node: false,
		
		/* mechanics properties */
		_mass: 0,
		_velocities: [],
		_angularVelocities: [],
		
		/* ai properties */
		_brain: false,
		
		/* constructor and destructor */
		create: function(path) {
			shape._initialPath = path;
			shape._node = world.space.path(path);
		},
		perish: function() {
			shape._node.remove();
		},
		
		/* material (aka svg) methods */
		/* .. utils */
		getPath: function() {
			currentPath = Raphael.mapPath(shape._initialPath, shape._node.matrix);
			return currentPath;
		},
		
		/* mechanics methods */
		/* .. linear velocity */
		getVelocity: function() {
			vx = 0;
			vy = 0;
			$.each(shape._velocities, function(index, velocity) {
				vx += velocity.x;
				vy += velocity.y;
			});
			return 	{	x: vx, 
						y: vy	};
		},
		addVelocity: function(vx, vy) {
			id = shape._velocities.push({
				x: vx,
				y: vy
			});
			return id;
		},
		removeVelocity: function(velocity_id) {
			velocity_id -= 1;
			shape._velocities.splice(velocity_id, 1);
		},
		
		/* .. angular velocity */
		getAngularVelocity: function() {
			omega = 0;
			$.each(shape._angularVelocities, function(index, value){
				omega += value;
			});
			return omega;
		},
		addAngularVelocity: function(omega) {
			id = shape._angularVelocities.push(omega);
			return id;
		},
		removeAngularVelocity: function(velocity_id) {
			velocity_id -= 1;
			shape._angularVelocities.splice(velocity_id, 1);
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
			velocity = shape.getVelocity();
			if(velocity.x != 0 || velocity.y != 0) {
				shape._node.transform('... t '+ velocity.x +' '+ velocity.y +' ');
			}
			angularVelocity = shape.getAngularVelocity();
			if(angularVelocity != 0) {
				shape._node.transform('... r '+ angularVelocity);
			}
			/*shape._x += shape._vx;
			shape._y += shape._vy;
			shape._alpha += shape._omega;
			shape._node.transform('t '+ shape._x +' '+ shape._y +'  r '+ shape._alpha);*/
		},
		redraw: function() {
			newPath = shape.getPath();
			shape._initialPath = newPath;
			shape._node.remove();
			shape._node = world.space.path(newPath);
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

