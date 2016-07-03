/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

var classie = require('./classie');

var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 220;

	function init() {
		scrollPage();
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		var navbar = document.getElementsByClassName('navbar-default')[0];
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			navbar.style.zIndex=1;
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			navbar.style.zIndex=0;
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
