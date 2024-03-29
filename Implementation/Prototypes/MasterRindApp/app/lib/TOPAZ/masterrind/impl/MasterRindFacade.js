TOPAZ.namespace('TOPAZ.masterrind.impl.MasterRindFacade');

require('TOPAZ/masterrind/datatypes/Appointment');
require('TOPAZ/masterrind/datatypes/Company');
require('TOPAZ/masterrind/datatypes/Contact');
require('TOPAZ/masterrind/datatypes/Cow');
require('TOPAZ/masterrind/datatypes/Favorite');

/**
 * Stellt Methoden für die Kontrollerklasse bereit. Kann als eine
 * Schnittstelle angesehen werden.
 *
 * @namespace TOPAZ.masterrind.impl
 * @class MasterRindFacade
 */
TOPAZ.masterrind.impl.MasterRindFacade = function() {

	var m_appointments = new Array();
	var m_companies = new Array();
	var m_contacts = new Array();
	var m_cows = new Array();
	var m_favorites = new Array();
	var db = Ti.Database.install('/RSH.sqlite', 'rshDB');

	/**
	 * Holt Termindaten aus der Datenbank.
	 *
	 * @method loadAppointmentsFromDB
	 */
	this.loadAppointmentsFromDB = function() {

		var masterRindRS = db.execute('SELECT * FROM appointments');
		var appointment = new TOPAZ.masterrind.datatypes.Appointment();

		while (masterRindRS.isValidRow()) {

			appointment.setDate(masterRindRS.fieldByName('date'));
			appointment.setId(masterRindRS.fieldByName('id'));
			appointment.setName(masterRindRS.fieldByName('name'));
			appointment.setDistance(masterRindRS.fieldByName('distance'));

			m_appointments.push(appointment);

			masterRindRS.next();
		}
		masterRindRS.close();

		return m_appointments;
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

		var masterRindRS = db.execute('SELECT * FROM contacts');
		var contact = new TOPAZ.masterrind.datatypes.Contact();

		while (masterRindRS.isValidRow()) {

			contact.setCountry(masterRindRS.fieldByName('country'));
			contact.setId(masterRindRS.fieldByName('id'));
			contact.setName(masterRindRS.fieldByName('name'));
			contact.setNumber(masterRindRS.fieldByName('number'));
			contact.setStreet(masterRindRS.fieldByName('street'));
			contact.setTown(masterRindRS.fieldByName('town'));
			contact.setZipCode(masterRindRS.fieldByName('zipCode'));
			contact.setInfo(masterRindRS.fieldByName('info'));
			m_contacts.push(contact);

			masterRindRS.next();
		}

		masterRindRS.close();

		return m_contacts;
	};

	/**
	 * Holt Kuhdaten aus der Datenbank.
	 *  - m_cows kann in der ganzen Klasse genutzt werden
	 *  - Vermeidung von mehereren Verbindungen zur Datenbank
	 *  - Traffic wird gespart
	 *
	 * @method loadCowsFromDB
	 */
	this.loadCowsFromDB = function() {

		//RS=ResultSet
		//var masterRindRS = db.execute('SELECT id,image,name,father FROM cows');
		var masterRindRS = db.execute('SELECT * FROM cows');

		while (masterRindRS.isValidRow()) {
			var cow = new TOPAZ.masterrind.datatypes.Cow();

			cow.setA(masterRindRS.fieldByName('a'));
			cow.setAAA(masterRindRS.fieldByName('aAa'));
			cow.setMating(masterRindRS.fieldByName('mating'));
			cow.setYearOfBirth(masterRindRS.fieldByName('yearOfBirth'));
			cow.setMonthOfBirth(masterRindRS.fieldByName('monthOfBirth'));
			cow.setDayOfBirth(masterRindRS.fieldByName('dayOfBirth'));
			cow.setGeneDefect(masterRindRS.fieldByName('geneDefect'));
			cow.setHerdBookNumber(masterRindRS.fieldByName('herdBookNumber'));
			cow.setMMFName(masterRindRS.fieldByName('mmfName'));
			cow.setMMFF(masterRindRS.fieldByName('mmff'));
			cow.setMFName(masterRindRS.fieldByName('mfName'));
			cow.setMFF(masterRindRS.fieldByName('mff'));
			cow.setFMF(masterRindRS.fieldByName('fmf'));
			cow.setFF(masterRindRS.fieldByName('ff'));
			cow.setFFF(masterRindRS.fieldByName('fff'));
			cow.setFather(masterRindRS.fieldByName('father'));
			cow.setBreeder(masterRindRS.fieldByName('breeder'));
			cow.setImage(masterRindRS.fieldByName('image'));
			cow.setName(masterRindRS.fieldByName('name'));
			cow.setRace(masterRindRS.fieldByName('race'));
			cow.setId(masterRindRS.fieldByName('id'));
			cow.setGRZG(masterRindRS.fieldByName('gRZG'));
			cow.setGRZM(masterRindRS.fieldByName('gRZM'));
			cow.setMilkKg(masterRindRS.fieldByName('milkKg'));
			cow.setFatPercent(masterRindRS.fieldByName('fatPercent'));
			cow.setFatKg(masterRindRS.fieldByName('fatKg'));
			cow.setProteinPercent(masterRindRS.fieldByName('proteinPercent'));
			cow.setProteinKg(masterRindRS.fieldByName('proteinKg'));
			cow.setGRZE(masterRindRS.fieldByName('gRZE'));
			cow.setMilkType(masterRindRS.fieldByName('milkType'));
			cow.setBody(masterRindRS.fieldByName('body'));
			cow.setBase(masterRindRS.fieldByName('base'));
			cow.setUdder(masterRindRS.fieldByName('udder'));
			cow.setGRZFit(masterRindRS.fieldByName('gRZFit'));
			cow.setGRZN(masterRindRS.fieldByName('gRZN'));
			cow.setGRZS(masterRindRS.fieldByName('gRZS'));
			cow.setGRZD(masterRindRS.fieldByName('gRZD'));
			cow.setGRZR(masterRindRS.fieldByName('gRZR'));
			cow.setGRZkd(masterRindRS.fieldByName('gRZkd'));
			cow.setGRZKM(masterRindRS.fieldByName('gRZKM'));
			cow.setCalfRunningDirectly(masterRindRS.fieldByName('calfRunningDirectly'));
			cow.setBackLegsPosition(masterRindRS.fieldByName('backLegsPosition'));
			cow.setBeckTilt(masterRindRS.fieldByName('beckTilt'));
			cow.setBeckWide(masterRindRS.fieldByName('beckWide'));
			cow.setBehindUdderHeight(masterRindRS.fieldByName('behindUdderHeight'));
			cow.setBodyDepth(masterRindRS.fieldByName('bodyDepth'));
			cow.setCentralBelt(masterRindRS.fieldByName('centralBelt'));
			cow.setDairyCharacter(masterRindRS.fieldByName('dairyCharacter'));
			cow.setDirectionOfGrowthBack(masterRindRS.fieldByName('directionOfGrowthBack'));
			cow.setDirectionOfGrowthFront(masterRindRS.fieldByName('directionOfGrowthFront'));
			cow.setDirectionOfGrowthLength(masterRindRS.fieldByName('directionOfGrowthLength'));
			cow.setForeUdderSuspension(masterRindRS.fieldByName('foreUdderSuspension'));
			cow.setHock(masterRindRS.fieldByName('hock'));
			cow.setMovement(masterRindRS.fieldByName('movement'));
			cow.setSize(masterRindRS.fieldByName('size'));
			cow.setStealAngle(masterRindRS.fieldByName('stealAngle'));
			cow.setStrength(masterRindRS.fieldByName('strength'));
			cow.setUdderDepth(masterRindRS.fieldByName('udderDepth'));
			cow.setHornless(masterRindRS.fieldByName('hornless'));
			cow.setGenomics(masterRindRS.fieldByName('genomics'));
			cow.setSexed(masterRindRS.fieldByName('sexed'));
			cow.setFreshSemen(masterRindRS.fieldByName('freshSemen'));

			m_cows.push(cow);
			masterRindRS.next();
		}

		masterRindRS.close();

		return m_cows;
	};

	/**
	 * Holt Favoritendaten aus der Datenbank.
	 *
	 * @method loadCompaniesFromDB
	 */
	this.loadFavoritesFromDB = function() {

		var masterRindRS = db.execute('SELECT * FROM favorites');
		var favorite = new TOPAZ.masterrind.datatypes.Favorite();

		while (masterRindRS.isValidRow()) {

			favorite.setCowId(masterRindRS.fieldByName('cowId'));
			favorite.setCowName(masterRindRS.fieldByName('cowName'));
			favorite.setId(masterRindRS.fieldByName('id'));
			favorite.setName(masterRindRS.fieldByName('name'));

			m_favorites.push(favorite);

			masterRindRS.next();
		}

		masterRindRS.close();

		return m_favorites;
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
		cs = new Array();
		//TODO: factory in allen Methoden anpassen.
		//TODO: debugging, factories testen,
		//gleicher fehler wie bei load fromDB?????????
		var factory = new TOPAZ.masterrind.impl.CowFactory();

		for ( i = 0; i < m_cows.length; i++) {

			/**
			 * Fehler:verschiedene Objekte mit gleichen Eigenschften
			 * 			im Array.
			 * Ursache: wahrscheinlich liegt die Ursache in abgeleiteten Objekten.
			 * Lösung: javascript Vererbung nachschlagen.
			 */
			var cow = new TOPAZ.masterrind.interfaces.Cow();
			//factory.create(type);
			cow.setId(m_cows[i].getId());
			cow.setImage(m_cows[i].getImage());
			cow.setName(m_cows[i].getName());
			cow.setFather(m_cows[i].getFather());
			console.log("getCow " + cow.getId());
			cs.push(cow);

			console.log("liste-> " + cs[i].getId());
		}

		for ( i = 0; i < cs.length; i++) {
			// if(i>1)console.log("liste-> "+i+" "+Object.is(cs[i],cs[i-1]));
			// console.log("cs-obejct-> "+cs[i]);
			console.log("cs-> " + i + " " + cs[i].getId() + " " + cs[i].getName());
		}

		return cs;
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
		db.execute('INSERT INTO favorites (cowId,cowName,name) VALUES (?,?,?)', cowId, cowName, name);
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

	/**
	 * Liefer eine Liste mit Schwarzbunten Kühen. Die Liste wird mit
	 * einem Object realisiert.
	 *
	 * @method getBlackcolored
	 * @return {Object} cows
	 */
	this.getBlackColored = function() {

		var query = db.execute("SELECT * FROM RSH WHERE Rasse = \'HOL\'");
		var allCows = this.setCows(query);

		query = db.execute("SELECT * FROM RSH WHERE Genomic = \'G\' AND Rasse = \'HOL\'");
		var genomics = this.setCows(query);

		query = db.execute("SELECT * FROM RSH WHERE Genomic = \'T\' AND Rasse = \'HOL\'");
		var daughterTested = this.setCows(query);

		query = db.execute("SELECT * FROM RSH WHERE Hornlos = \'H\' AND Rasse = \'HOL\'");
		var hornless = this.setCows(query);

		var cows = {
			allCows : function() {

				return allCows;
			},
			genomics : function() {

				return genomics;
			},
			daughterTested : function() {
				return daughterTested;
			},
			hornless : function() {
				return hornless;
			}
		};

		return cows;
	};

	/**
	 * Liefer eine Liste mit Rotbunten Kühen. Die Liste wird mit
	 * einem Object realisiert.
	 *
	 * @method getRedcolored
	 * @return {Object} cows
	 */
	this.getRedColored = function() {

		var cows = {
			allCows : function() {
				var query = db.execute("SELECT * FROM cows WHERE Rasse = \'RED\'");
				var cows = this.setCows(query);
				return cows;
			},
			genomics : function() {
				var query = db.execute("SELECT * FROM cows WHERE Genomic = \'G\' AND Rasse = \'RED\'");
				var cows = this.setCows(query);
				return cows;
			},
			daughterTested : function() {
				var query = db.execute("SELECT * FROM cows WHERE Genomic = \'T\' AND Rasse = \'RED\'");
				var cows = this.setCows(query);
				return cows;
			},
			hornless : function() {
				var query = db.execute("SELECT * FROM cows WHERE Hornlos = \'H\' AND Rasse = \'RED\'");
				var cows = this.setCows(query);
				return cows;
			}
		};

		return cows;
	};

	/**
	 * Liefert eine Liste mit Hornlosen Kühen. Die Liste wird mit
	 * einem Object realisiert.
	 *
	 * @method getHornless
	 * @return {Object} cows
	 */
	this.getHornless = function() {

		var query = db.execute("SELECT * FROM RSH WHERE Hornlos = \'H\' OR Hornlos = \'HH\'");
		var allCows = this.setCows(query);

		query = db.execute("SELECT * FROM RSH WHERE Hornlos = \'HH\'");
		var homozygous = this.setCows(query);

		query = db.execute("SELECT * FROM RSH WHERE Hornlos = \'H\' OR Hornlos = \'HH\' AND Genomic = \'T\'");
		var dt = this.setCows(query);

		query = db.execute("SELECT * FROM RSH WHERE Hornlos = \'H\' OR Hornlos = \'HH\' AND Rasse=\'HOL\'");
		var bc = this.setCows(query);

		query = db.execute("SELECT * FROM RSH WHERE Hornlos = \'H\' OR Hornlos = \'HH\' AND Rasse=\'RED\'");
		var rc = this.setCows(query);

		query = db.execute("SELECT * FROM RSH WHERE Hornlos = \'H\' OR Hornlos = \'HH\' AND Genomic = \'G\'");
		var gen = this.setCows(query);

		var cows = {
			allCows : function() {
				return allCows;
			},
			homozygous : function() {

				return homozygous;
			},
			daughterTested : function() {

				return dt;
			},
			blackColored : function() {
				return bc;
			},
			redColored : function() {

				return rc;
			},
			genomics : function() {

				return gen;
			}
		};

		return cows;
	};

	/**
	 * Liefer eine Liste mit Tochtergeprüften Kühen. Die Liste wird mit
	 * einem Object realisiert.
	 *
	 * @method getHornless
	 * @return {Object} cows
	 */
	this.getDaughterTested = function() {

		var cows = {
			allCows : function() {
				var query = db.execute("SELECT * FROM cows WHERE Genomic = \'T\'");
				var cows = this.setCows(query);
				return cows;
			},
			blackColored : function() {
				var query = db.execute("SELECT * FROM cows WHERE Genomic = \'T\' AND Rasse=\'HOL\'");
				var cows = this.setCows(query);
				return cows;
			},
			redColored : function() {
				var query = db.execute("SELECT * FROM cows WHERE Genomic = \'T\' AND Rasse=\'RED\'");
				var cows = this.setCows(query);
				return cows;
			},
			hornless : function() {
				var query = db.execute("SELECT * FROM cows WHERE Hornlos = \'H\' AND Hornlos=\'HH\' AND Genomic=\'T\'");
				var cows = this.setCows(query);
				return cows;
			}
		};

		return cows;
	};

	/**
	 * Liefert eine Liste mit Genomics Kühen. Die Liste wird mit
	 * einem Object realisiert.
	 *
	 * @method getGenomics
	 * @return {Object} cows
	 */
	this.getGenomics = function() {

		var cows = {
			allCows : function() {
				return m_cows;
			},
			blackColored : function() {
				return m_cows;
			},
			redColored : function() {
				return m_cows;
			},
			hornless : function() {
				return m_cows;
			},
		};

		return cows;
	};

	/**
	 * Liefert eine Liste mit Holsteins Kühen. Die Liste wird mit
	 * einem Object realisiert.
	 *
	 * @method getHolsteins
	 * @return {Object} cows
	 */
	this.getHolsteins = function() {

		var cows = {
			allCows : function() {
				return m_cows;
			}
		};

		return cows;
	};

	/**
	 * Liefer eine Liste mit gesexten Kühen. Die Liste wird mit
	 * einem Object realisiert.
	 *
	 * @method getSexed
	 * @return {Object} cows
	 */
	this.getSexed = function() {

		var cows = {
			allCows : function() {
				return globCows;
			}
		};

		return cows;
	};

	/**
	 * Liefer eine Liste mit Kühen, von denen frisch Sperma vorhanden ist.
	 * Die Liste wird mit einem Object realisiert.
	 *
	 * @method getFreshSemen
	 * @return {Object} cows
	 */
	this.getFreshSemen = function() {

		var cows = {
			allCows : function() {
				return m_cows;
			}
		};

		return cows;
	};

	/**
	 * Liefert Termine für Schauen & Specials zurück.
	 * Die Liste wird mit einem Object realisiert.
	 *
	 * @method getGetShowsAndSpecials
	 * @return {Object} appointmens
	 */
	this.getShowsAndSpecials = function() {

		var appointments = {
			allAppointments : function() {
				return m_appointments;
			}
		};

		return appointments;
	};

	/**
	 * Liefert Termine für Auktioinen zurück.
	 * Die Liste wird mit einem Object realisiert.
	 *
	 * @method getAuctions
	 * @return {Object} appointmens
	 */
	this.getAuctions = function() {

		var appointments = {
			allAppointments : function() {
				return m_appointments;
			},
			bremervoerde : function() {
				return m_appointments;
			},
			cloppenburg : function() {
				return m_appointments;
			},
			lingen : function() {
				return m_appointments;
			},
			uelzen : function() {
				return m_appointments;
			},
			verden : function() {
				return m_appointments;
			}
		};

		return appointments;
	};

	/**
	 * Liefert eine Liste mit Favoritobjekten.
	 *
	 * @method getFavorites
	 * @param {String} type
	 * @return {Array} favorites
	 */
	this.getFavorites = function() {

		var favorites = {
			allFavorites : function() {
				return m_favorites;
			}
		};

		return favorites;

	};

	/**
	 * Setzt die Kuhobjekte.
	 *
	 * @method setCows
	 * @param ResultSet
	 * @return {Array} cows
	 */
	this.setCows = function(masterRindRS) {

		var cows = new Array();

		while (masterRindRS.isValidRow()) {
			var cow = new TOPAZ.masterrind.datatypes.Cow();

			cow.setA(masterRindRS.fieldByName('all'));
			cow.setAAA(masterRindRS.fieldByName('aAa'));
			cow.setMating(masterRindRS.fieldByName('Anpaarung'));
			cow.setYearOfBirth(masterRindRS.fieldByName('Gebdat_Jahr'));
			cow.setMonthOfBirth(masterRindRS.fieldByName('Gebdat_Monat'));
			cow.setDayOfBirth(masterRindRS.fieldByName('Gebdat_Tag'));
			cow.setGeneDefect(masterRindRS.fieldByName('Genedefekt'));
			cow.setHerdBookNumber(masterRindRS.fieldByName('Herdbuchnr'));
			cow.setMMFName(masterRindRS.fieldByName('MMV_Name'));
			cow.setMMFF(masterRindRS.fieldByName('MMVV'));
			cow.setMFName(masterRindRS.fieldByName('MV_Name'));
			cow.setMFF(masterRindRS.fieldByName('MVV'));
			cow.setFMF(masterRindRS.fieldByName('VMV'));
			cow.setFF(masterRindRS.fieldByName('VV'));
			cow.setFFF(masterRindRS.fieldByName('VVV'));
			cow.setFather(masterRindRS.fieldByName('Vater'));
			cow.setBreeder(masterRindRS.fieldByName('Zuechter'));
			cow.setImage(masterRindRS.fieldByName('s_bild_al'));
			cow.setName(masterRindRS.fieldByName('Name'));
			cow.setRace(masterRindRS.fieldByName('Rasse'));
			cow.setId(masterRindRS.fieldByName('Id'));
			cow.setGRZG(masterRindRS.fieldByName('gRZG'));
			cow.setGRZM(masterRindRS.fieldByName('gRZM'));
			cow.setMilkKg(masterRindRS.fieldByName('Milch-Kg'));
			cow.setFatPercent(masterRindRS.fieldByName('Fett-Pr'));
			cow.setFatKg(masterRindRS.fieldByName('Fett-Kg'));
			cow.setProteinPercent(masterRindRS.fieldByName('Eiw-Pr'));
			cow.setProteinKg(masterRindRS.fieldByName('Eiw-Kg'));
			cow.setGRZE(masterRindRS.fieldByName('gRZE'));
			cow.setMilkType(masterRindRS.fieldByName('Milchtyp'));
			cow.setBody(masterRindRS.fieldByName('Koerper'));
			cow.setBase(masterRindRS.fieldByName('Fundament'));
			cow.setUdder(masterRindRS.fieldByName('Euter'));
			cow.setGRZFit(masterRindRS.fieldByName('gRZFit'));
			cow.setGRZN(masterRindRS.fieldByName('gRZN'));
			cow.setGRZS(masterRindRS.fieldByName('gRZS'));
			cow.setGRZD(masterRindRS.fieldByName('gRZD'));
			cow.setGRZR(masterRindRS.fieldByName('gRZR'));
			cow.setGRZkd(masterRindRS.fieldByName('gRZkd'));
			cow.setGRZKM(masterRindRS.fieldByName('gRZKm'));
			cow.setCalfRunningDirectly(masterRindRS.fieldByName('Kalbverlauf direkt'));
			cow.setBackLegsPosition(masterRindRS.fieldByName('Hbeinstell'));
			cow.setBackLegsAngularity(masterRindRS.fieldByName('Hbeinwi'));
			cow.setBeckTilt(masterRindRS.fieldByName('Beckenneig'));
			cow.setBeckWide(masterRindRS.fieldByName('Beckenbr'));
			cow.setBehindUdderHeight(masterRindRS.fieldByName('Hintereuterh'));
			cow.setBodyDepth(masterRindRS.fieldByName('Koerpertiefe'));
			cow.setCentralBelt(masterRindRS.fieldByName('Zentralband'));
			cow.setDairyCharacter(masterRindRS.fieldByName('Milchchar'));
			cow.setDirectionOfGrowthBack(masterRindRS.fieldByName('Strichpl_h'));
			cow.setDirectionOfGrowthFront(masterRindRS.fieldByName('Strichpl_v'));
			cow.setDirectionOfGrowthLength(masterRindRS.fieldByName('Strichl'));
			cow.setForeUdderSuspension(masterRindRS.fieldByName('VeutAuf'));
			cow.setHock(masterRindRS.fieldByName('Sprunggel'));
			cow.setMovement(masterRindRS.fieldByName('Bewegung'));
			cow.setSize(masterRindRS.fieldByName('Groesse'));
			cow.setStealAngle(masterRindRS.fieldByName('Klauenwi'));
			cow.setStrength(masterRindRS.fieldByName('Staerke'));
			cow.setUdderDepth(masterRindRS.fieldByName('Eutertiefe'));
			cow.setHornless(masterRindRS.fieldByName('Hornlos'));
			cow.setGenomics(masterRindRS.fieldByName('Genomic'));
			cow.setSexed(masterRindRS.fieldByName('gesexed'));
			cow.setFreshSemen(masterRindRS.fieldByName('Frischsperma'));

			cows.push(cow);
			masterRindRS.next();
		}

		masterRindRS.close();
		globCows = cows;

		return cows;
	};

	/**
	 * Setzt die Kuhobjekte.
	 *
	 * @method setCows
	 * @param ResultSet
	 * @return {Array} cows
	 */
	this.getCowsDB = function() {

		var cows = new Array();
		var masterRindRS = db.execute('SELECT * FROM RSH');

		while (masterRindRS.isValidRow()) {
			var cow = new TOPAZ.masterrind.datatypes.Cow();

			cow.setA(masterRindRS.fieldByName('all'));
			cow.setAAA(masterRindRS.fieldByName('aAa'));
			cow.setMating(masterRindRS.fieldByName('Anpaarung'));
			cow.setYearOfBirth(masterRindRS.fieldByName('Gebdat_Jahr'));
			cow.setMonthOfBirth(masterRindRS.fieldByName('Gebdat_Monat'));
			cow.setDayOfBirth(masterRindRS.fieldByName('Gebdat_Tag'));
			cow.setGeneDefect(masterRindRS.fieldByName('Genedefekt'));
			cow.setHerdBookNumber(masterRindRS.fieldByName('Herdbuchnr'));
			cow.setMMFName(masterRindRS.fieldByName('MMV_Name'));
			cow.setMMFF(masterRindRS.fieldByName('MMVV'));
			cow.setMFName(masterRindRS.fieldByName('MV_Name'));
			cow.setMFF(masterRindRS.fieldByName('MVV'));
			cow.setFMF(masterRindRS.fieldByName('VMV'));
			cow.setFF(masterRindRS.fieldByName('VV'));
			cow.setFFF(masterRindRS.fieldByName('VVV'));
			cow.setFather(masterRindRS.fieldByName('Vater'));
			cow.setBreeder(masterRindRS.fieldByName('Zuechter'));
			cow.setImage(masterRindRS.fieldByName('s_bild_al'));
			cow.setName(masterRindRS.fieldByName('Name'));
			cow.setRace(masterRindRS.fieldByName('Rasse'));
			cow.setId(masterRindRS.fieldByName('Id'));
			cow.setGRZG(masterRindRS.fieldByName('gRZG'));
			cow.setGRZM(masterRindRS.fieldByName('gRZM'));
			cow.setMilkKg(masterRindRS.fieldByName('Milch-Kg'));
			cow.setFatPercent(masterRindRS.fieldByName('Fett-Pr'));
			cow.setFatKg(masterRindRS.fieldByName('Fett-Kg'));
			cow.setProteinPercent(masterRindRS.fieldByName('Eiw-Pr'));
			cow.setProteinKg(masterRindRS.fieldByName('Eiw-Kg'));
			cow.setGRZE(masterRindRS.fieldByName('gRZE'));
			cow.setMilkType(masterRindRS.fieldByName('Milchtyp'));
			cow.setBody(masterRindRS.fieldByName('Koerper'));
			cow.setBase(masterRindRS.fieldByName('Fundament'));
			cow.setUdder(masterRindRS.fieldByName('Euter'));
			cow.setGRZFit(masterRindRS.fieldByName('gRZFit'));
			cow.setGRZN(masterRindRS.fieldByName('gRZN'));
			cow.setGRZS(masterRindRS.fieldByName('gRZS'));
			cow.setGRZD(masterRindRS.fieldByName('gRZD'));
			cow.setGRZR(masterRindRS.fieldByName('gRZR'));
			cow.setGRZkd(masterRindRS.fieldByName('gRZkd'));
			cow.setGRZKM(masterRindRS.fieldByName('gRZKm'));
			cow.setCalfRunningDirectly(masterRindRS.fieldByName('Kalbverlauf direkt'));
			cow.setBackLegsPosition(masterRindRS.fieldByName('Hbeinstell'));
			cow.setBackLegsAngularity(masterRindRS.fieldByName('Hbeinwi'));
			cow.setBeckTilt(masterRindRS.fieldByName('Beckenneig'));
			cow.setBeckWide(masterRindRS.fieldByName('Beckenbr'));
			cow.setBehindUdderHeight(masterRindRS.fieldByName('Hintereuterh'));
			cow.setBodyDepth(masterRindRS.fieldByName('Koerpertiefe'));
			cow.setCentralBelt(masterRindRS.fieldByName('Zentralband'));
			cow.setDairyCharacter(masterRindRS.fieldByName('Milchchar'));
			cow.setDirectionOfGrowthBack(masterRindRS.fieldByName('Strichpl_h'));
			cow.setDirectionOfGrowthFront(masterRindRS.fieldByName('Strichpl_v'));
			cow.setDirectionOfGrowthLength(masterRindRS.fieldByName('Strichl'));
			cow.setForeUdderSuspension(masterRindRS.fieldByName('VeutAuf'));
			cow.setHock(masterRindRS.fieldByName('Sprunggel'));
			cow.setMovement(masterRindRS.fieldByName('Bewegung'));
			cow.setSize(masterRindRS.fieldByName('Groesse'));
			cow.setStealAngle(masterRindRS.fieldByName('Klauenwi'));
			cow.setStrength(masterRindRS.fieldByName('Staerke'));
			cow.setUdderDepth(masterRindRS.fieldByName('Eutertiefe'));
			cow.setHornless(masterRindRS.fieldByName('Hornlos'));
			cow.setGenomics(masterRindRS.fieldByName('Genomic'));
			cow.setSexed(masterRindRS.fieldByName('gesexed'));
			cow.setFreshSemen(masterRindRS.fieldByName('Frischsperma'));

			cows.push(cow);
			masterRindRS.next();
		}

		masterRindRS.close();
		globCows = cows;

		return cows;
	};

};

