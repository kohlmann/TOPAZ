TOPAZ.namespace('TOPAZ.masterrind.FavoriteFactory');

require('TOPAZ/masterrind/interfaces/Favorite');
require('TOPAZ/masterrind/impl/CowFavorite');

TOPAZ.masterrind.FavoriteFactory = function() {

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
			favorite = new TOPAZ.masterrind.impl.CowFavorite();
		} else {
			console.log("Unbekannte Favoritart");
		}

		return favorite;
	};

};
TOPAZ.masterrind.FavoriteFactory.prototype = new TOPAZ.masterrind.inerfaces.MasterRindFactory();
