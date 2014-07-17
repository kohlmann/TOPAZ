TOPAZ.namespace("TOPAZ.masterrind.impl.DaughterTested");

require("TOPAZ/masterrind/interfaces/Cow");

TOPAZ.masterrind.impl.DaughterTested = function() {
    this.test = function() {
        console.log("Hallo DT");
    };
};

TOPAZ.masterrind.impl.DaughterTested.prototype = new TOPAZ.masterrind.Cow();