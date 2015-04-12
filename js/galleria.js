/**
 * 
 */



function galleria() {
	Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
	Galleria.run('#galleria', {
	    flickr: 'set:72157651388168108',
	    flickrOptions: {
	        sort: 'date-posted-asc'
	    }
	});
}

window.onload = galleria;