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

Alloy.Collections.allCowsCol = Alloy.createCollection('cowsMod');
Alloy.Collections.genomicsCol = Alloy.createCollection('cowsMod');
Alloy.Collections.daughterTestedCol = Alloy.createCollection('cowsMod');
Alloy.Collections.hornlessCol = Alloy.createCollection('cowsMod');
Alloy.Collections.homozygousCol = Alloy.createCollection('cowsMod');
Alloy.Collections.redColoredCol = Alloy.createCollection('cowsMod');
Alloy.Collections.blackColoredCol = Alloy.createCollection('cowsMod');

Alloy.Collections.cowDetailsCol = Alloy.createCollection('cowsMod');

Alloy.Collections.allFavoritesCol = Alloy.createCollection('favoriteMod');

Alloy.Collections.animalSalesCol = Alloy.createCollection('contactMod');

Alloy.Collections.allShowsCol = Alloy.createCollection('appointmentMod');
Alloy.Collections.bremervoerdeCol = Alloy.createCollection('appointmentMod');
Alloy.Collections.cloppenburgCol = Alloy.createCollection('appointmentMod');
Alloy.Collections.lingenCol = Alloy.createCollection('appointmentMod');
Alloy.Collections.uelzenCol = Alloy.createCollection('appointmentMod');
Alloy.Collections.verdenCol = Alloy.createCollection('appointmentMod');

Alloy.Globals.screenWidth = (Titanium.Platform.displayCaps.platformWidth) / Titanium.Platform.displayCaps.dpi;
Alloy.Globals.screenHeight = (Titanium.Platform.displayCaps.platformHeight) / Titanium.Platform.displayCaps.dpi;

/**
 *  Hauptnamensraum
 *
 * */
var TOPAZ = TOPAZ || {};
//TODO: namespacebehandlung noch einmal überlegen
/**
 * Methode zum Anlegen vom Namensräumen.
 *
 * @param {String} name
 * @return {Object} parent
 */
TOPAZ.namespace = function(name) {
	var parts = name.split('.'), parent = TOPAZ, i;
	if (parts[0] === "TOPAZ") {
		parts = parts.slice(1);
	}
	pl = parts.length;
	for ( i = 0; i < parts.length; i++) {

		if ( typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};
