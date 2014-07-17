// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

 Alloy.Collections.cowCol = Alloy.createCollection('cowsMod');

Alloy.Globals.screenWidth = (Titanium.Platform.displayCaps.platformWidth)/Titanium.Platform.displayCaps.dpi;
Alloy.Globals.screenHeight = (Titanium.Platform.displayCaps.platformHeight)/Titanium.Platform.displayCaps.dpi;

/**
 *  Hauptnamensraum
 * 
 * @module TSA
 * */
var TOPAZ = TOPAZ || {};

/**
 * Methode zum Anlegen vom Namensräumen.
 *
 * @param {Object} ns
 * @param {Object} ns_string
 */
TOPAZ.namespace = function(ns_string) {
	var parts = ns_string.split('.'), parent = TOPAZ, i;
	if (parts[0] === "TOPAZ") {
		parts = parts.slice(1);
	}
	pl = parts.length;
	for ( i = 0; i < parts.length; i++) {
		//create a property if it doesnt exist
		if ( typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
}; 
