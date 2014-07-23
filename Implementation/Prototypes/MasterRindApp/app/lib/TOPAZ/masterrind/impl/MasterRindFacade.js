TOPAZ.namespace('TOPAZ.masterrind.impl.MasterRindFacade');

require('TOPAZ/masterrind/impl/CowFactory');
require('TOPAZ/masterrind/impl/FavoriteFactory');
require('TOPAZ/masterrind/impl/AppointmentFactory');
require('TOPAZ/masterrind/interfaces/MasterRindFactory');
require('TOPAZ/masterrind/interfaces/Cow');
require('TOPAZ/masterrind/datatypes/Company');
require('TOPAZ/masterrind/datatypes/Contact');
require('TOPAZ/masterrind/interfaces/Appointment');
require('TOPAZ/masterrind/interfaces/Favorite');

/**
 * Stellt Methoden für die Kontrollerklasse bereit. Kann als eine
 * Schnittstelle angesehen werden.
 *
 * @namespace TOPAZ.masterrind.impl
 * @class MasterRindFacade
 */
TOPAZ.masterrind.impl.MasterRindFacade = function(factory) {
	var factory = factory;
	var m_appointments = new Array();
	var m_companies = new Array();
	var m_contacts = new Array();
	var m_cows = new Array();
	var m_favorites = new Array();
	var db = Ti.Database.install('/masterrind.sqlite', 'massterrindDB');

	/**
	 * Holt Termindaten aus der Datenbank.
	 *
	 * @method loadAppointmentsFromDB
	 */
	this.loadAppointmentsFromDB = function() {

		var masterRindRS = db.execute('SELECT date,id, name FROM appointments');
		var appointment = new TOPAZ.masterrind.interfaces.Appointment();

		while (masterRindRS.isValidRow()) {

			appointment.setDate(masterRindRS.fieldByName('date'));
			appointment.setId(masterRindRS.fieldByName('id'));
			appointment.setName(masterRindRS.fieldByName('name'));

			m_appointments.push(appointment);

			masterRindRS.next();
		}

		masterRindRS.close();
	};

	/**
	 * Holt Firmendaten aus der Datenbank.
	 *
	 * @method loadCompaniesFromDB
	 */
	this.loadCompaniesFromDB = function() {

		var masterRindRS = db.execute('SELECT id,description, name, imprint FROM companies');
		var company = new TOPAZ.masterrind.datatypes.Company();

		while (masterRindRS.isValidRow()) {

			company.setDescription(masterRindRS.fieldByName('description'));
			company.setId(masterRindRS.fieldByName('id'));
			company.setImprint(masterRindRS.fieldByName('imprint'));
			company.setName(masterRindRS.fieldByName('name'));

			m_companies.push(company);

			masterRindRS.next();
		}

		masterRindRS.close();
	};

	/**
	 * Holt Kontaktdaten aus der Datenbank.
	 *
	 * @method loadContactsFromDB
	 */
	this.loadContactsFromDB = function() {

		var masterRindRS = db.execute('SELECT country,id, name, number,street, town, zipCode FROM contacts');
		var contact = new TOPAZ.masterrind.datatypes.Contact();

		while (masterRindRS.isValidRow()) {

			contact.setCountry(masterRindRS.fieldByName('country'));
			contact.setId(masterRindRS.fieldByName('id'));
			contact.setName(masterRindRS.fieldByName('name'));
			contact.setNumber(masterRindRS.fieldByName('number'));
			contact.setStreet(masterRindRS.fieldByName('street'));
			contact.setTown(masterRindRS.fieldByName('town'));
			contact.setImprint(masterRindRS.fieldByName('zipCode'));

			m_contacts.push(contact);

			masterRindRS.next();
		}

		masterRindRS.close();
	};

	/**
	 * Holt Kuhdaten aus der Datenbank.
	 *
	 * @method loadCowsFromDB
	 */
	this.loadCowsFromDB = function() {

		//RS=ResultSet
		var masterRindRS = db.execute('SELECT id,base FROM cows');
		var cow = new TOPAZ.masterrind.interfaces.Cow();

		while (masterRindRS.isValidRow()) {

			cow.setId(masterRindRS.fieldByName('id'));
			cow.setBase(masterRindRS.fieldByName('base'));

			m_cows.push(cow);

			masterRindRS.next();
		}

		masterRindRS.close();
	};

	/**
	 * Holt Favoritendaten aus der Datenbank.
	 *
	 * @method loadCompaniesFromDB
	 */
	this.loadFavoritesFromDB = function() {

		var masterRindRS = db.execute('SELECT cowId, cowName, id, name FROM favorites');
		var favorite = new TOPAZ.masterrind.interfaces.Favorite();

		while (masterRindRS.isValidRow()) {

			favorite.setCowId(masterRindRS.fieldByName('cowId'));
			favorite.setCowName(masterRindRS.fieldByName('cowName'));
			favorite.setId(masterRindRS.fieldByName('id'));
			favorite.setName(masterRindRS.fieldByName('name'));

			m_favorites.push(favorite);

			masterRindRS.next();
		}

		masterRindRS.close();
	};

	/**
	 * Erstellt eine Liste mit Terminobjekten.
	 *
	 * @method getAppointments
	 * @param {String} type
	 * @return {Array} appointments
	 */
	this.getAppointments = function(type) {

		var appointments = new Array();

		for ( i = 0; i < m_appointments.length; i++) {

			appointment = factory.create(type);
			appointment.setDate(m_appointments[i].getDate());
			appointment.setId(m_appointments[i].getId());
			appointment.setName(m_appointments[i].getName());

			appointments.push(appointment);
		}

		return appointments;
	};

	/**
	 * Erstellt eine Liste mit Firmenobjekten.
	 *
	 * @method getCompanies
	 * @param {String} type
	 * @return {Array} companies
	 */
	this.getCompanies = function(type) {

		var companies = new Array();

		for ( i = 0; i < m_companies.length; i++) {

			company = factory.create(type);
			company.setId(m_companies[i].getId());
			company.setDescription(m_companies[i].getDescription());
			company.setName(m_companies[i].getName());
			company.setImprint(m_companies[i].getImprint());

			cows.push(company);
		}

		return companies;
	};

	/**
	 * Erstellt eine Liste mit Kontaktobjekten.
	 *
	 * @method getContacts
	 * @param {String} type
	 * @return {Array} contacts
	 */
	this.getContacts = function(type) {

		var contacts = new Array();

		for ( i = 0; i < m_contacts.length; i++) {

			contact = factory.create(type);
			contact.setCountry(m_contacts[i].getCountry());
			contact.setId(m_contacts[i].getId());
			contact.setName(m_contacts[i].getName());
			contact.setNumber(m_contacts[i].getNumber());
			contact.setStreet(m_contacts[i].getStreet());
			contact.setTown(m_contacts[i].getTown());
			contact.setZipCode(m_contacts[i].getZipCode());

			cows.push(contact);
		}

		return contacts;
	};

	/**
	 * Erstellt eine Liste mit Kuhobjekten.
	 *
	 * @method getCows
	 * @param {String} type
	 * @return {Array} cows
	 */
	this.getCows = function(type) {
		var cows = new Array();

		for ( i = 0; i < m_cows.length; i++) {

			cow = factory.create(type);
			cow.setId(m_cows[i].getId());
			cow.setBase(m_cows[i].getBase());

			cows.push(cow);
		}

		return cows;
	};

	/**
	 * Erstellt eine Liste mit Favoritobjekten.
	 *
	 * @method getFavorites
	 * @param {String} type
	 * @return {Array} favorites
	 */
	this.getFavorites = function(type) {

		var favorites = new Array();

		for ( i = 0; i < m_favorites.length; i++) {

			favorite = factory.create(type);
			favorite.setCowId(m_favorites[i].getCowId());
			favorite.setCowName(m_favorites[i].getCowName());
			favorite.setId(m_favorites[i].getId());
			favorite.setName(m_favorites[i].getName());

			favorites.push(favorite);
		}

		return favorites;

	};

	//Später Kuhobjekt übergeben
	/**
	 * Schreibt einen Favoriten in die Datenbank.
	 *
	 * @method addFavorite
	 * @param {String} cowId {String} cowName {String} id {String} name
	 * @return {bool} true bei Erfolg
	 */
	this.addFavorite = function(cowId, cowName, id, name) {

		// favorite = factory.create(type);
		// favorite.setName(name);
		// favorite.setCowId(id);
		// favorite.setCowName(cowName);
		// favorite.setCowId(cowId);

		//db.execute('BEGIN');
		db.execute('INSERT INTO favorites (cowId,cowName,id,name) VALUES (?,?,?,?)', cowId, cowName, id, name);
		//db.execute('COMMIT');
		db.close();

		// return favorite;
	};
	/**
	 * Löscht einen Favoriten aus der Datenbank.
	 * 
	 * @method removeFavorite
	 * @param {String} id
	 * @return {bool} true bei Erfolg
	 */
	this.removeFavorite = function(id) {

	};
};
