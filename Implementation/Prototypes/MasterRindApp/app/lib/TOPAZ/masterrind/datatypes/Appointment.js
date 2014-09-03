TOPAZ.namespace('TOPAZ.masterrind.datatypes.Appointment');

require('TOPAZ/masterrind/datatypes/Company');
require('TOPAZ/masterrind/datatypes/Contact');

/**
 * Bildet eine Datenstruktur zum Speichern von Daten eines Termins.
 *
 * @namespace TOPAZ.masterrind.interfaces
 * @class Appointment
 */
TOPAZ.masterrind.datatypes.Appointment = function() {

	var m_id = "null";
	var m_name = "null";
	var m_date = "null";
	var m_company;
	var m_contact;

	/**
	 * Gibt die Id des Termins zurück.
	 *
	 * @method getId
	 * @return {String} m_id
	 */
	this.getId = function() {
		return m_id;
	};

	/**
	 * Gibt den Namen des Termins zurück.
	 *
	 * @method getName
	 * @return {String} m_name
	 */
	this.getName = function() {
		return m_name;
	};

	/**
	 * Gibt das Datum des Termins zurück.
	 *
	 * @method getDate
	 * @return {String} m_date
	 */
	this.getDate = function() {
		return m_date;
	};

	/**
	 * Gibt die Firma des Termins zurück.
	 *
	 * @method getCompany
	 * @return {String} m_company
	 */
	this.getCompany = function() {
		return m_company;
	};

	/**
	 * Gibt den Kontakt des Termins zurück.
	 *
	 * @method getContact
	 * @return {String} m_contact
	 */
	this.getContact = function() {
		return m_contact;
	};

	/**
	 * Setzt den Namen des Termins.
	 *
	 * @method setName
	 * @param {String} name
	 *
	 */
	this.setName = function(name) {
		m_name = name;
	};

	/**
	 * Setzt das Datum des Termins.
	 *
	 * @method setDate
	 * @param {String} date
	 *
	 */
	this.setDate = function(date) {
		m_date = date;
	};

	/**
	 * Setzt die Firma des Termins.
	 *
	 * @method setCompany
	 * @param {String} company
	 *
	 */
	this.setCompany = function(company) {
		m_company = company;
	};

	/**
	 * Setzt den Kontakt des Termins.
	 *
	 * @method setContact
	 * @param {String} contact
	 *
	 */
	this.setContact = function(contact) {
		m_contact = contact;
	};

	/**
	 * Setzt die Id des Termins.
	 *
	 * @method setId
	 * @param {String} id
	 *
	 */
	this.setId = function(id) {
		m_id = id;
	};

};
