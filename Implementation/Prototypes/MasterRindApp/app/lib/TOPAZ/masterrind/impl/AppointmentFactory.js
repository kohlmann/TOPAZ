TOPAZ.namespace('TOPAZ.masterrind.impl.AppointmentFactory');

require('TOPAZ/masterrind/interfaces/Appointment');
require('TOPAZ/masterrind/datatypes/Auction');
require('TOPAZ/masterrind/datatypes/Course');
require('TOPAZ/masterrind/datatypes/Exhibition');
require('TOPAZ/masterrind/datatypes/MeetCattle');
require('TOPAZ/masterrind/datatypes/Meeting');
require('TOPAZ/masterrind/datatypes/YoungBreeder');

/**
 * Realisiert MasterRindFactory.js.
 *
 * @namespace TOPAZ.masterrind.impl
 * @class AppointmentFactory
 */
TOPAZ.masterrind.impl.AppointmentFactory = function() {

	/**
	 * Erstellt Terminobjekte.
	 * 
	 * @method create
	 * @param {String} type
	 * @return {String} appointment
	 */
	this.create = function(type) {
		var appointment;

		if (type == 'Auction') {
			appointment = new TOPAZ.masterrind.datatypes.Auction();
		} else if (type == 'Course') {
			appointment = new TOPAZ.masterrind.datatypes.Course();
		} else if (type == 'Exhibition') {
			appointment = new TOPAZ.masterrind.datatypes.Exhibition();
		} else if (type == 'MeetCattle') {
			appointment = new TOPAZ.masterrind.datatypes.MeetCattle();
		} else if (type == 'Meeting') {
			appointment = new TOPAZ.masterrind.datatypes.Meeting();
		} else if (type == 'YoungBreeder') {
			appointment = new TOPAZ.masterrind.datatypes.YoungBreeder();
		} else {
			console.log("Unbekannte Terminart");
		}

		return appointment;
	};

};
//vielleicht brauch man diese Zeile nicht.
TOPAZ.masterrind.impl.AppointmentFactory.prototype = new TOPAZ.masterrind.interfaces.Appointment();
