TOPAZ.namespace("TOPAZ.masterrind.impl.MasterRindFacade");

require("TOPAZ/masterrind/impl/CowFactory");

require("TOPAZ/masterrind/impl/FavoriteFactory");

require("TOPAZ/masterrind/impl/AppointmentFactory");

require("TOPAZ/masterrind/interfaces/MasterRindFactory");

require("TOPAZ/masterrind/interfaces/Cow");

require("TOPAZ/masterrind/datatypes/Company");

require("TOPAZ/masterrind/datatypes/Contact");

require("TOPAZ/masterrind/interfaces/Appointment");

require("TOPAZ/masterrind/interfaces/Favorite");

TOPAZ.masterrind.impl.MasterRindFacade = function(factory) {
    var factory = factory;
    var m_appointments = new Array();
    var m_companies = new Array();
    var m_contacts = new Array();
    var m_cows = new Array();
    var m_favorites = new Array();
    var db = Ti.Database.install("/masterrind.sqlite", "massterrindDB");
    this.loadAppointmentsFromDB = function() {
        var masterRindRS = db.execute("SELECT date,id, name FROM appointments");
        var appointment = new TOPAZ.masterrind.interfaces.Appointment();
        while (masterRindRS.isValidRow()) {
            appointment.setDate(masterRindRS.fieldByName("date"));
            appointment.setId(masterRindRS.fieldByName("id"));
            appointment.setName(masterRindRS.fieldByName("name"));
            m_appointments.push(appointment);
            masterRindRS.next();
        }
        masterRindRS.close();
    };
    this.loadCompaniesFromDB = function() {
        var masterRindRS = db.execute("SELECT id,description, name, imprint FROM companies");
        var company = new TOPAZ.masterrind.datatypes.Company();
        while (masterRindRS.isValidRow()) {
            company.setDescription(masterRindRS.fieldByName("description"));
            company.setId(masterRindRS.fieldByName("id"));
            company.setImprint(masterRindRS.fieldByName("imprint"));
            company.setName(masterRindRS.fieldByName("name"));
            m_companies.push(company);
            masterRindRS.next();
        }
        masterRindRS.close();
    };
    this.loadContactsFromDB = function() {
        var masterRindRS = db.execute("SELECT country,id, name, number,street, town, zipCode FROM contacts");
        var contact = new TOPAZ.masterrind.datatypes.Contact();
        while (masterRindRS.isValidRow()) {
            contact.setCountry(masterRindRS.fieldByName("country"));
            contact.setId(masterRindRS.fieldByName("id"));
            contact.setName(masterRindRS.fieldByName("name"));
            contact.setNumber(masterRindRS.fieldByName("number"));
            contact.setStreet(masterRindRS.fieldByName("street"));
            contact.setTown(masterRindRS.fieldByName("town"));
            contact.setImprint(masterRindRS.fieldByName("zipCode"));
            m_contacts.push(contact);
            masterRindRS.next();
        }
        masterRindRS.close();
    };
    this.loadCowsFromDB = function() {
        var masterRindRS = db.execute("SELECT id,base FROM cows");
        var cow = new TOPAZ.masterrind.interfaces.Cow();
        while (masterRindRS.isValidRow()) {
            cow.setId(masterRindRS.fieldByName("id"));
            cow.setBase(masterRindRS.fieldByName("base"));
            m_cows.push(cow);
            masterRindRS.next();
        }
        masterRindRS.close();
    };
    this.loadFavoritesFromDB = function() {
        var masterRindRS = db.execute("SELECT cowId, cowName, id, name FROM favorites");
        var favorite = new TOPAZ.masterrind.interfaces.Favorite();
        while (masterRindRS.isValidRow()) {
            favorite.setCowId(masterRindRS.fieldByName("cowId"));
            favorite.setCowName(masterRindRS.fieldByName("cowName"));
            favorite.setId(masterRindRS.fieldByName("id"));
            favorite.setName(masterRindRS.fieldByName("name"));
            m_favorites.push(favorite);
            masterRindRS.next();
        }
        masterRindRS.close();
    };
    this.getAppointments = function(type) {
        var appointments = new Array();
        for (i = 0; m_appointments.length > i; i++) {
            appointment = factory.create(type);
            appointment.setDate(m_appointments[i].getDate());
            appointment.setId(m_appointments[i].getId());
            appointment.setName(m_appointments[i].getName());
            appointments.push(appointment);
        }
        return appointments;
    };
    this.getCompanies = function(type) {
        var companies = new Array();
        for (i = 0; m_companies.length > i; i++) {
            company = factory.create(type);
            company.setId(m_companies[i].getId());
            company.setDescription(m_companies[i].getDescription());
            company.setName(m_companies[i].getName());
            company.setImprint(m_companies[i].getImprint());
            cows.push(company);
        }
        return companies;
    };
    this.getContacts = function(type) {
        var contacts = new Array();
        for (i = 0; m_contacts.length > i; i++) {
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
    this.getCows = function(type) {
        var cows = new Array();
        for (i = 0; m_cows.length > i; i++) {
            cow = factory.create(type);
            cow.setId(m_cows[i].getId());
            cow.setBase(m_cows[i].getBase());
            cows.push(cow);
        }
        return cows;
    };
    this.getFavorites = function(type) {
        var favorites = new Array();
        for (i = 0; m_favorites.length > i; i++) {
            favorite = factory.create(type);
            favorite.setCowId(m_favorites[i].getCowId());
            favorite.setCowName(m_favorites[i].getCowName());
            favorite.setId(m_favorites[i].getId());
            favorite.setName(m_favorites[i].getName());
            favorites.push(favorite);
        }
        return favorites;
    };
    this.addFavorite = function(cowId, cowName, id, name) {
        db.execute("INSERT INTO favorites (cowId,cowName,id,name) VALUES (?,?,?,?)", cowId, cowName, id, name);
        db.close();
    };
    this.removeFavorite = function() {};
};