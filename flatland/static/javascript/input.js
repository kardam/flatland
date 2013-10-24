/* hero: a (demi-)god object */
var hero = {
	/* private properties */
	_avatar: false,
	_alpha: 45,
	_speed: 1,
	
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
						case 'left': hero.moveLeft(hero._speed); break;
						case 'up': hero.moveForward(hero._speed); break;
						case 'right': hero.moveRight(hero._speed); break;
						case 'down': hero.moveBackward(hero._speed); break;
					}
					key.active = true;
				}
			});
		});
		$(document).keyup(function(e) {
			$.each(hero.controls, function(key_name, key){
				if(e.which == key.code) {
					if(!key.active) return;
					switch(key_name) {
						case 'left': hero.moveRight(hero._speed); break;
						case 'up': hero.moveBackward(hero._speed); break;
						case 'right': hero.moveLeft(hero._speed); break;
						case 'down': hero.moveForward(hero._speed); break;
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
		hero._avatar.addVelocity(vx, vy);
	},
	moveBackward: function(speed) {
		vx = speed * Math.sin(hero._alpha * 180 / Math.PI) * -1;
		vy = speed * Math.cos(hero._alpha * 180 / Math.PI) * -1;
		hero._avatar.addVelocity(vx, vy);
	},
	moveLeft: function(speed) {
		vx = speed * Math.cos(hero._alpha * 180 / Math.PI);
		vy = speed * Math.sin(hero._alpha * 180 / Math.PI) * -1;
		hero._avatar.addVelocity(vx, vy);
	},
	moveRight: function(speed) {
		vx = speed * Math.cos(hero._alpha * 180 / Math.PI) * -1;
		vy = speed * Math.sin(hero._alpha * 180 / Math.PI);
		hero._avatar.addVelocity(vx, vy);
	},
	
	/* rotation movement methods */
	// @todo Fill in some code.. apparently!
	rotateLeft: function(speed) {
		return;
	},
	rotateRight: function(speed) {
		return;
	}
}

