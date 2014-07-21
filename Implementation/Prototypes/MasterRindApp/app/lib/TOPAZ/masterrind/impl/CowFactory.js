TOPAZ.namespace('TOPAZ.masterrind.impl.CowFactory');

require('TOPAZ/masterrind/interfaces/Cow');
require('TOPAZ/masterrind/datatypes/BlackColored');
require('TOPAZ/masterrind/datatypes/DaughterTested');
require('TOPAZ/masterrind/datatypes/Genomics');
require('TOPAZ/masterrind/datatypes/Holsteins');
require('TOPAZ/masterrind/datatypes/Hornless');
require('TOPAZ/masterrind/datatypes/RedColored');
require('TOPAZ/masterrind/interfaces/MasterRindFactory');

/**
 * Realisiert MasterRindFactory.js.
 *
 * @namespace TOPAZ.masterrind.impl
 * @class CowFactory
 */
TOPAZ.masterrind.impl.CowFactory = function() {

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
			cow = new TOPAZ.masterrind.datatypes.BlackColored();
		} else if (type == 'DaughterTested') {
			cow = new TOPAZ.masterrind.datatypes.DaughterTested();
		} else if (type == 'Genomics') {
			cow = new TOPAZ.masterrind.datatypes.Genomics();
		} else if (type == 'Holsteins') {
			cow = new TOPAZ.masterrind.datatypes.Holsteins();
		} else if (type == 'Hornless') {
			cow = new TOPAZ.masterrind.datatypes.Hornless();
		} else if (type == 'RedColored') {
			cow = new TOPAZ.masterrind.datatypes.RedColored();
		} else {
			console.log("Unbekannte Kuhart");
		}

		return cow;
	};

};
//vielleicht brauch man diese Zeile nicht.
TOPAZ.masterrind.impl.CowFactory.prototype = new TOPAZ.masterrind.inerfaces.MasterRindFactory();
