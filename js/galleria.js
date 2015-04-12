/**
 * 
 */



function galleria() {
	Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
	Galleria.run('#galleria', {
	    flickr: 'set:72157651491866400',
	    flickrOptions: {
	        sort: 'date-posted-asc',
	        max: 150
	    }
	});
}

window.onload = galleria;