TOPAZ.namespace("TOPAZ.masterrind.impl.BlackColored");

require("TOPAZ/masterrind/interfaces/Cow");

TOPAZ.masterrind.impl.BlackColored = function() {
    this.test = function() {
        console.log("Hallo RD");
    };
};

TOPAZ.masterrind.impl.BlackColored.prototype = new TOPAZ.masterrind.Cow();