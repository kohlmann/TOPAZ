TOPAZ.namespace('TOPAZ.masterrind.datatypes.Contact');

/**
 * Bildet eine Datenstruktur zum Speichern von Daten eines Kontaktes.
 *
 * @namespace TOPAZ.masterrind.datatypes
 * @class Contact
 */
TOPAZ.masterrind.datatypes.Contact = function() {
	var m_name = "null";
	var m_street = "null";
	var m_number = "null";
	var m_zipCode = "null";
	var m_town = "null";
	var m_country = "null";
	var m_id = "null";
	var m_info = "null";

	/**
	 * Gibt die Id des Kontakts zurück.
	 *
	 * @method getId
	 * @return {String} m_id
	 */
	this.getId = function() {
		return m_id;
	};

	/**
	 * Gibt den Namen des Kontakts zurück.
	 *
	 * @method getName
	 * @return {String} m_name
	 */
	this.getName = function() {
		return m_name;
	};

	/**
	 * Gibt die Strasse des Kontakts zurück.
	 *
	 * @method getStreet
	 * @return {String} m_street
	 */
	this.getStreet = function() {
		return m_street;
	};

	/**
	 * Gibt die PLZ des Kontakts zurück.
	 *
	 * @method getZipCode
	 * @return {String} m_zipCode
	 */
	this.getZipCode = function() {
		return m_zipCode;
	};

	/**
	 * Gibt die des Kontakts zurück.
	 *
	 * @method getTown
	 * @return {String} m_town
	 */
	this.getTown = function() {
		return m_town;
	};

	/**
	 * Gibt das Land des Kontakts zurück.
	 *
	 * @method getCountry
	 * @return {String} m_country
	 */
	this.getCountry = function() {
		return m_country;
	};

	/**
	 * Gibt Info des Kontakts zurück.
	 *
	 * @method getInfo
	 * @return {String} m_info
	 */
	this.getInfo = function() {
		return m_info;
	};

	/**
	 * Gibt Nummer des Kontakts zurück.
	 *
	 * @method getNumber
	 * @return {String} m_number
	 */
	this.getNumber = function() {
		return m_number;
	};

	/**
	 * Setzt den Namen des Kontakts.
	 *
	 * @method setName
	 * @param {String} name
	 *
	 */
	this.setName = function(name) {
		m_name = name;
	};

	/**
	 * Setzt die Strasse des Kontakts.
	 *
	 * @method setStreet
	 * @param {String} street
	 *
	 */
	this.setStreet = function(street) {
		m_street = street;
	};

	/**
	 * Setzt die Nummer des Kontakts.
	 *
	 * @method setNumber
	 * @param {String} number
	 *
	 */
	this.setNumber = function(number) {
		m_number = number;
	};

	/**
	 * Setzt die PLZ des Kontakts.
	 *
	 * @method setName
	 * @param {String} name
	 *
	 */
	this.setZipCode = function(zipCode) {
		m_zipCode = zipCode;
	};

	/**
	 * Setzt die Stadt des Kontakts.
	 *
	 * @method setTown
	 * @param {String} town
	 *
	 */
	this.setTown = function(town) {
		m_town = town;
	};

	/**
	 * Setzt das Land des Kontakts.
	 *
	 * @method setCountry
	 * @param {String} country
	 *
	 */
	this.setCountry = function(country) {
		m_country = country;
	};

	/**
	 * Setzt die Id des Kontakts.
	 *
	 * @method setId
	 * @param {String} id
	 *
	 */
	this.setId = function(id) {
		m_id = id;
	};

	/**
	 * Setzt die Info des Kontakts.
	 *
	 * @method setInfo
	 * @param {String} info
	 *
	 */
	this.setInfo = function(info) {
		m_info = info;
	};

};
