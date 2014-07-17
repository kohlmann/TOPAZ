TOPAZ.namespace("TOPAZ.masterrind.MasterRind");

require("TOPAZ/masterrind/CowFactory");

require("TOPAZ/masterrind/interfaces/MasterRindFactory");

TOPAZ.masterrind.MasterRind = function(factory) {
    var factory = factory;
    var db = Ti.Database.install("/masterrind.sqlite", "massterrindDB");
    this.getCows = function(type) {
        var masterRindRS = db.execute("SELECT id,base FROM cow");
        var cowList = new Array();
        while (masterRindRS.isValidRow()) {
            cow = factory.create(type);
            cow.setId(masterRindRS.fieldByName("id"));
            cow.setBase(masterRindRS.fieldByName("base"));
            cowList.push(cow);
            masterRindRS.next();
        }
        masterRindRS.close();
        return cowList;
    };
};