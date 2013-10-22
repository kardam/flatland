/* all libs should be loaded at this stage */
/* go, flatland, go! */
$(document).ready(function() {
	/* emptiness and physics */
	world.create();
	
	/* shapes */
	character = new shape('M 50 50  L 50 100  L 100 100  L 100 50 L 50 50');
	triangle = world.space.path('M 100 250  L 100 200  L 200 200  L 100 250');
	
	/* lifeforms */
	character.addBrain(hero);
});
