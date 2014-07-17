TOPAZ.namespace("TOPAZ.masterrind.CowFactory");

require("TOPAZ/masterrind/interfaces/Cow");

require("TOPAZ/masterrind/impl/BlackColored");

require("TOPAZ/masterrind/impl/DaughterTested");

require("TOPAZ/masterrind/interfaces/MasterRindFactory");

TOPAZ.masterrind.CowFactory = function() {
    this.create = function(type) {
        var cow;
        "BlackColored" == type ? cow = new TOPAZ.masterrind.impl.BlackColored() : "DaughterTested" == type ? cow = new TOPAZ.masterrind.impl.DaughterTested() : console.log("Unbekannte Kuhart");
        return cow;
    };
};

TOPAZ.masterrind.inerfaces.MasterRindFactory.prototype = new TOPAZ.masterrind.CowFactory();