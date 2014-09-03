TOPAZ.namespace('TOPAZ.masterrind.datatypes.Favorite');

/**
 * Bildet eine Datenstruktur zum Speichern von Daten eines Favorites.
 *
 * @namespace TOPAZ.masterrind.interfaces
 * @class Favorite
 */
TOPAZ.masterrind.datatypes.Favorite = function() {

	var m_id = "null";
	var m_name = "null";
	var m_cowId = "null";
	var m_cowName = "null";

	/**
	 * Gibt Id des Favorits zurück.
	 * 
	 * @method getId
	 * @return {String} m_id
	 */
	this.getId = function() {
		return m_id;
	};

	/**
	 * Gibt den Namen des Favorits zurück.
	 * 
	 * @method getName
	 * @return {String} m_name
	 */
	this.getName = function() {
		return m_name;
	};

	/**
	 * Gibt Kuhid des Favorits zurück.
	 * 
	 * @method getCowId
	 * @return {String} m_cowId
	 */
	this.getCowId = function() {
		return m_cowId;
	};

	/**
	 * Gibt den Kuhamen des Favorits zurück.
	 * 
	 * @method getCowName
	 * @return {String} m_cowName
	 */
	this.getCowName = function() {
		return m_cowName;
	};

	/**
	 * Setzt Id des Favorits.
	 * 
	 * @method setId
	 * @param {String} id
	 * 
	 */
	this.setId = function(id) {
		m_id = id;
	};

	/**
	 * Setzt den Namen des Favorits.
	 * 
	 * @method setName
	 * @param {String} name
	 * 
	 */
	this.setName = function(name) {
		m_name = name;
	};

	/**
	 * Setzt Kuhid des Favorits.
	 * 
	 * @method setCowId
	 * @param {String} cowId
	 * 
	 */
	this.setCowId = function(cowId) {
		m_cowId = cowId;
	};

	/**
	 * Setzt den Kuhnamen des Favorits.
	 * 
	 * @method setCowName
	 * @param {String} cowName
	 * 
	 */
	this.setCowName = function(cowName) {
		m_cowName = cowName;
	};

};

