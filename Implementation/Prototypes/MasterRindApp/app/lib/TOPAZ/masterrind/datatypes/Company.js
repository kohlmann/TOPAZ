TOPAZ.namespace('TOPAZ.masterrind.datatypes.Company');

/**
 * Bildet eine Datenstruktur zum Speichern von Daten einer Firma.
 *
 * @namespace TOPAZ.masterrind.datatypes
 * @class Company
 */
TOPAZ.masterrind.datatypes.Company = function() {
	var m_name = "null";
	var m_description = "null";
	var m_imprint = "null";
	var m_id = "null";

	/**
	 * Gibt die Id der Firma zurück.
	 *
	 * @method getId
	 * @return {String} m_id
	 */
	this.getId = function() {
		return m_id;
	};

	/**
	 * Gibt den Namen der Firma zurück.
	 *
	 * @method getName
	 * @return {String} m_name
	 */
	this.getName = function() {
		return m_name;
	};

	/**
	 * Gibt die Beschreibung der Firma zurück.
	 *
	 * @method getDescription
	 * @return {String} m_description
	 */
	this.getDescription = function() {
		return m_description;
	};

	/**
	 * Gibt den Text des Impressums zurück.
	 *
	 * @method getImprint
	 * @return {String} m_imprint
	 */
	this.getImprint = function() {
		return m_imprint;
	};

	/**
	 * Setzt den Name der Firma.
	 *
	 * @method setName
	 * @param {String} name
	 *
	 */
	this.setName = function(name) {
		m_name = name;
	};

	/**
	 * Setzt die Beschreibung der Firma.
	 *
	 * @method setDescription
	 * @param {String} description
	 *
	 */
	this.setDescription = function(description) {
		m_description = description;
	};

	/**
	 * Setzt den Tex des Impressums.
	 *
	 * @method setImprint
	 * @param {String} imprint
	 *
	 */
	this.setImprint = function(imprint) {
		m_imprint = imprint;
	};

	/**
	 * Setzt die Id der Firma.
	 *
	 * @method setId
	 * @param {String} id
	 *
	 */
	this.setId = function(id) {
		m_id = id;
	};

};
