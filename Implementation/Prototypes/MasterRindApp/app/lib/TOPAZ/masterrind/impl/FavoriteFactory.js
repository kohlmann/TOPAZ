TOPAZ.namespace('TOPAZ.masterrind.impl.FavoriteFactory');

require('TOPAZ/masterrind/interfaces/Favorite');
require('TOPAZ/masterrind/datatypes/CowFavorite');

/**
 * Realisiert MasterRindFactory.js.
 *
 * @namespace TOPAZ.masterrind.impl
 * @class FavoriteFactory
 */
TOPAZ.masterrind.impl.FavoriteFactory = function() {

	/**
	 * Erstellt Favoritobjekte.
	 * 
	 * @method create
	 * @param {String} type
	 * @return {String} favorite
	 */
	this.create = function(type) {
		var favorite;

		if (type == 'cow') {
			favorite = new TOPAZ.masterrind.datatypes.CowFavorite();
		} else {
			console.log("Unbekannte Favoritart");
		}

		return favorite;
	};

};
TOPAZ.masterrind.impl.FavoriteFactory.prototype = new TOPAZ.masterrind.inerfaces.MasterRindFactory();
