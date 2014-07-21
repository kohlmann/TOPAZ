TOPAZ.namespace('TOPAZ.masterrind.AppointmentFactory');

require('TOPAZ/masterrind/interfaces/Appointment');
require('TOPAZ/masterrind/impl/Auction');
require('TOPAZ/masterrind/impl/Course');
require('TOPAZ/masterrind/impl/Exhibition');
require('TOPAZ/masterrind/impl/MeetCattle');
require('TOPAZ/masterrind/impl/Meeting');
require('TOPAZ/masterrind/impl/YoungBreeder');

/**
 * Realisiert MasterRindFactory.js.
 *
 * @namespace TOPAZ.masterrind
 * @class AppointmentFactory
 */
TOPAZ.masterrind.AppointmentFactory = function() {

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
			appointment = new TOPAZ.masterrind.impl.Auction();
		} else if (type == 'Course') {
			appointment = new TOPAZ.masterrind.impl.Course();
		} else if (type == 'Exhibition') {
			appointment = new TOPAZ.masterrind.impl.Exhibition();
		} else if (type == 'MeetCattle') {
			appointment = new TOPAZ.masterrind.impl.MeetCattle();
		} else if (type == 'Meeting') {
			appointment = new TOPAZ.masterrind.impl.Meeting();
		} else if (type == 'YoungBreeder') {
			appointment = new TOPAZ.masterrind.impl.YoungBreeder();
		} else {
			console.log("Unbekannte Kuhart");
		}

		return appointment;
	};

};
//vielleicht brauch man diese Zeile nicht.
TOPAZ.masterrind.AppointmentFactory.prototype = new TOPAZ.masterrind.interfaces.Appointment();
