TOPAZ.namespace('TOPAZ.masterrind.datatypes.Contact');

TOPAZ.masterrind.datatypes.Contact = function() {
	var m_name = "null";
	var m_street = "null";
	var m_number = "null";
	var m_zipCode = "null";
	var m_town = "null";
	var m_country = "null";

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
		m_zipCode = name;
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

}; 