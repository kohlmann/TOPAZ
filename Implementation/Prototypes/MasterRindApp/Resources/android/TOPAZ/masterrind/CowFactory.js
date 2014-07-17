TOPAZ.namespace("TOPAZ.masterrind.CowFactory");

require("TOPAZ/masterrind/interfaces/Cow");

require("TOPAZ/masterrind/impl/BlackColored");

require("TOPAZ/masterrind/impl/DaughterTested");

require("TOPAZ/masterrind/impl/Genomics");

require("TOPAZ/masterrind/impl/Holsteins");

require("TOPAZ/masterrind/impl/Hornless");

require("TOPAZ/masterrind/impl/RedColored");

require("TOPAZ/masterrind/interfaces/MasterRindFactory");

TOPAZ.masterrind.CowFactory = function() {
    this.create = function(type) {
        var cow;
        "BlackColored" == type ? cow = new TOPAZ.masterrind.impl.BlackColored() : "DaughterTested" == type ? cow = new TOPAZ.masterrind.impl.DaughterTested() : "Genomics" == type ? cow = new TOPAZ.masterrind.impl.Genomics() : "Holsteins" == type ? cow = new TOPAZ.masterrind.impl.Holsteins() : "Hornless" == type ? cow = new TOPAZ.masterrind.impl.Hornless() : "RedColored" == type ? cow = new TOPAZ.masterrind.impl.RedColored() : console.log("Unbekannte Kuhart");
        return cow;
    };
};

TOPAZ.masterrind.CowFactory.prototype = new TOPAZ.masterrind.inerfaces.MasterRindFactory();