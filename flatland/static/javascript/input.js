/* hero: a god object */
var hero = {
	/* properties */
	_avatar: false,
	_alpha: 0,
	
	/* methods */
	addAvatar: function(avatar): {
		hero._avatar = avatar;
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
		}).keyup(function(e) {
			switch(e.which) {
				case 37:
					break;
				case 38:
					break;
				case 39:
					break;
				case 40:
					break;
				default: return;
			}
			e.preventDefault();
		});
	},
	removeAvatar(): function(): {
		hero._avatar = false;
	}
}

