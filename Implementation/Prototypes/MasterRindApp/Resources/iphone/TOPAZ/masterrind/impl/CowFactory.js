TOPAZ.namespace("TOPAZ.masterrind.impl.CowFactory");

require("TOPAZ/masterrind/interfaces/Cow");

require("TOPAZ/masterrind/datatypes/BlackColored");

require("TOPAZ/masterrind/datatypes/DaughterTested");

require("TOPAZ/masterrind/datatypes/Genomics");

require("TOPAZ/masterrind/datatypes/Holsteins");

require("TOPAZ/masterrind/datatypes/Hornless");

require("TOPAZ/masterrind/datatypes/RedColored");

require("TOPAZ/masterrind/interfaces/MasterRindFactory");

TOPAZ.masterrind.impl.CowFactory = function() {
    this.create = function(type) {
        var cow;
        if ("BlackColored" == type) {
            cow = new TOPAZ.masterrind.datatypes.BlackColored();
            console.log("created: " + type);
        } else if ("DaughterTested" == type) {
            cow = new TOPAZ.masterrind.datatypes.DaughterTested();
            console.log("created: " + type);
        } else "Genomics" == type ? cow = new TOPAZ.masterrind.datatypes.Genomics() : "Holsteins" == type ? cow = new TOPAZ.masterrind.datatypes.Holsteins() : "Hornless" == type ? cow = new TOPAZ.masterrind.datatypes.Hornless() : "RedColored" == type ? cow = new TOPAZ.masterrind.datatypes.RedColored() : console.log("Unbekannte Kuhart");
        return cow;
    };
};

TOPAZ.masterrind.impl.CowFactory.prototype = new TOPAZ.masterrind.inerfaces.MasterRindFactory();