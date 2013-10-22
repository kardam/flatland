/* hero: a god object */
var hero = {
	/* properties */
	_avatar: false,
	_alpha: 45,
	_speed: 1,
	
	/* methods */
	addAvatar: function(avatar) {
		hero._avatar = avatar;
		$(document).keydown(function(e) {
			switch(e.which) {
				case 37: hero.moveLeft(hero._speed); break;
				case 38: hero.moveForward(hero._speed); break;
				case 39: hero.moveRight(hero._speed); break;
				case 40: hero.moveBackward(hero._speed); break;
				default: return;
			}
			e.preventDefault();
		}).keyup(function(e) {
			switch(e.which) {
				case 37: hero.moveRight(hero._speed); break;
				case 38: hero.moveBackward(hero._speed); break;
				case 39: hero.moveLeft(hero._speed); break;
				case 40: hero.moveForward(hero._speed); break;
				default: return;
			}
			e.preventDefault();
		});
	},
	removeAvatar: function() {
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
	rotateLeft: function(speed) {
		return;
	},
	rotateRight: function(speed) {
		return;
	}
}

