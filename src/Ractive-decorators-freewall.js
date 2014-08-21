/*

	ractive-decorators-freewall
	=============================================

	Version <%= pkg.version %>.

	<< description goes here... >>

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/ractive.js'></script>
	    <script src='lib/ractive-decorators-freewall.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'ractive-decorators-freewall' );

	<< more specific instructions for this plugin go here... >>

*/

(function ( global, factory ) {

	'use strict';

	// AMD environment
	if ( typeof define === 'function' && define.amd ) {
		define([ 'ractive', 'freewall' ], factory );
	}

	// Common JS (i.e. node/browserify)
	else if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
		factory( require( 'ractive' ), require( 'freewall' ) );
	}

	// browser global
	else if ( global.Ractive ) {
		factory( global.Ractive, global.freewall );
	}

	else {
		throw new Error( 'Could not find Ractive or freewall! It must be loaded before the ractive-decorators-freewall plugin' );
	}

}( typeof window !== 'undefined' ? window : this, function ( Ractive ) {

	'use strict';

	/* plugin code goes here */
	var freewallItemDecorator = function(node, content) {
		var wall = freewallItemDecorator.parentNodes;
		if(wall) {
			wall.appendBlock(node);	
		} else {
			throw "Freewall parentNodes is not defined";
		}
		

		return {
			teardown: function() {}
		}
	};
	freewallItemDecorator.parentNodes = null;
	

	Ractive.decorators.freewallItem = freewallItemDecorator;

}));
