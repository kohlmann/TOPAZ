TOPAZ.namespace("TOPAZ.masterrind.MasterRind");

require("TOPAZ/masterrind/CowFactory");

require("TOPAZ/masterrind/FavoriteFactory");

require("TOPAZ/masterrind/AppointmentFactory");

require("TOPAZ/masterrind/interfaces/MasterRindFactory");

require("TOPAZ/masterrind/interfaces/Cow");

TOPAZ.masterrind.MasterRind = function(factory) {
    var factory = factory;
    var m_cows = new Array();
    this.loadCowsFromDB = function() {
        var db = Ti.Database.install("/masterrind.sqlite", "massterrindDB");
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
        favorite = factory.create(type);
        return favorites;
    };
    this.getFavorite = function(type) {
        favorite = factory.create(type);
        return favorite;
    };
    this.addFavorite = function(type, cowId, cowName) {
        favorite = factory.create(type);
        favorite.setName(cowName);
        favorite.setCowName(cowName);
        favorite.setCowId(cowId);
        return favorite;
    };
    this.removeFavorite = function() {};
    this.getAppointment = function(type) {
        appointment = factory.create(type);
        appointment.setName("Auktion");
        return appointment;
    };
};