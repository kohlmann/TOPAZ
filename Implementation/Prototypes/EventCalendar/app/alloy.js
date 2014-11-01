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

//Parameter=Name der Collectiondagtei z.B. EventCalendarModel.js
var categoriesCollection = Alloy.createCollection('EventCalendarModel');
var eventsCollection = Alloy.createCollection('EventCalendarModel');
var eventCollection = Alloy.createCollection('EventCalendarModel');

var CATEGORIE_NAME;
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