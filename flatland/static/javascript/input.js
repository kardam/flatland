/* hero: a (demi-)god object */
var hero = {
	/* private properties */
	_avatar: false,
	_alpha: 45,
	_speed: 2,
	_angularSpeed: 2,
	
	/* control keys */
	controls: {
		up: {
			code: 38,
			active: false
		},
		down: {
			code: 40,
			active: false
		},
		left: {
			code: 37,
			active: false
		},
		right: {
			code: 39,
			active: false
		}
	},
	
	/* methods */
	addAvatar: function(avatar) {
		hero._avatar = avatar;
		$(document).keydown(function(e) {
			$.each(hero.controls, function(key_name, key){
				if(e.which == key.code) {
					if(key.active) return;
					switch(key_name) {
						case 'left': key.active = hero.rotateLeft(hero._angularSpeed); break;
						case 'up': key.active = hero.moveForward(hero._speed); break;
						case 'right': key.active = hero.rotateRight(hero._angularSpeed); break;
						case 'down': key.active = hero.moveBackward(hero._speed); break;
					}
				}
			});
		});
		$(document).keyup(function(e) {
			$.each(hero.controls, function(key_name, key){
				if(e.which == key.code) {
					if(!key.active) return;
					if(key_name == 'left' || key_name == 'right') {
						hero._avatar.removeAngularVelocity(key.active);
					} else {
						hero._avatar.removeVelocity(key.active);
					}
					key.active = false;
				}
			});
		});
	},
	removeAvatar: function() {
		// @todo Unbind the key events set in addAvatar().
		hero._avatar = false;
	},
	
	/* linear movement methods */
	moveForward: function(speed) {
		vx = speed * Math.sin(hero._alpha * 180 / Math.PI);
		vy = speed * Math.cos(hero._alpha * 180 / Math.PI);
		return hero._avatar.addVelocity(vx, vy);
	},
	moveBackward: function(speed) {
		vx = speed * Math.sin(hero._alpha * 180 / Math.PI) * -1;
		vy = speed * Math.cos(hero._alpha * 180 / Math.PI) * -1;
		return hero._avatar.addVelocity(vx, vy);
	},
	moveLeft: function(speed) {
		vx = speed * Math.cos(hero._alpha * 180 / Math.PI);
		vy = speed * Math.sin(hero._alpha * 180 / Math.PI) * -1;
		return hero._avatar.addVelocity(vx, vy);
	},
	moveRight: function(speed) {
		vx = speed * Math.cos(hero._alpha * 180 / Math.PI) * -1;
		vy = speed * Math.sin(hero._alpha * 180 / Math.PI);
		return hero._avatar.addVelocity(vx, vy);
	},
	
	/* rotation movement methods */
	rotateLeft: function(speed) {
		//hero._alpha -= speed;
		return hero._avatar.addAngularVelocity(-speed);
	},
	rotateRight: function(speed) {
		//hero._alpha += speed;
		return hero._avatar.addAngularVelocity(speed);
	}
}

