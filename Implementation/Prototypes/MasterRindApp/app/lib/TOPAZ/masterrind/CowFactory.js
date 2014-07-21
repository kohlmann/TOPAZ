TOPAZ.namespace('TOPAZ.masterrind.CowFactory');

require('TOPAZ/masterrind/interfaces/Cow');
require('TOPAZ/masterrind/impl/BlackColored');
require('TOPAZ/masterrind/impl/DaughterTested');
require('TOPAZ/masterrind/impl/Genomics');
require('TOPAZ/masterrind/impl/Holsteins');
require('TOPAZ/masterrind/impl/Hornless');
require('TOPAZ/masterrind/impl/RedColored');
require('TOPAZ/masterrind/interfaces/MasterRindFactory');

/**
 * Realisiert MasterRindFactory.js.
 *
 * @namespace TOPAZ.masterrind
 * @class CowFactory
 */
TOPAZ.masterrind.CowFactory = function() {

	/**
	 * Erstellt Kuhobjekte.
	 * 
	 * @method create
	 * @param {String} type
	 * @return {String} cow
	 */
	this.create = function(type) {
		var cow;

		if (type == 'BlackColored') {
			cow = new TOPAZ.masterrind.impl.BlackColored();
		} else if (type == 'DaughterTested') {
			cow = new TOPAZ.masterrind.impl.DaughterTested();
		} else if (type == 'Genomics') {
			cow = new TOPAZ.masterrind.impl.Genomics();
		} else if (type == 'Holsteins') {
			cow = new TOPAZ.masterrind.impl.Holsteins();
		} else if (type == 'Hornless') {
			cow = new TOPAZ.masterrind.impl.Hornless();
		} else if (type == 'RedColored') {
			cow = new TOPAZ.masterrind.impl.RedColored();
		} else {
			console.log("Unbekannte Kuhart");
		}

		return cow;
	};

};
//vielleicht brauch man diese Zeile nicht.
TOPAZ.masterrind.CowFactory.prototype = new TOPAZ.masterrind.inerfaces.MasterRindFactory();
