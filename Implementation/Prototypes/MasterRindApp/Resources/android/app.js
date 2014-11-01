var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var globCows;

Alloy.Collections.allCowsCol = Alloy.createCollection("cowsMod");

Alloy.Collections.genomicsCol = Alloy.createCollection("cowsMod");

Alloy.Collections.daughterTestedCol = Alloy.createCollection("cowsMod");

Alloy.Collections.hornlessCol = Alloy.createCollection("cowsMod");

Alloy.Collections.homozygousCol = Alloy.createCollection("cowsMod");

Alloy.Collections.redColoredCol = Alloy.createCollection("cowsMod");

Alloy.Collections.blackColoredCol = Alloy.createCollection("cowsMod");

Alloy.Collections.cowDetailsCol = Alloy.createCollection("cowsMod");

Alloy.Collections.allFavoritesCol = Alloy.createCollection("favoriteMod");

Alloy.Collections.animalSalesCol = Alloy.createCollection("contactMod");

Alloy.Collections.allShowsCol = Alloy.createCollection("appointmentMod");

Alloy.Collections.bremervoerdeCol = Alloy.createCollection("appointmentMod");

Alloy.Collections.cloppenburgCol = Alloy.createCollection("appointmentMod");

Alloy.Collections.lingenCol = Alloy.createCollection("appointmentMod");

Alloy.Collections.uelzenCol = Alloy.createCollection("appointmentMod");

Alloy.Collections.verdenCol = Alloy.createCollection("appointmentMod");

Alloy.Globals.screenWidth = Titanium.Platform.displayCaps.platformWidth / Titanium.Platform.displayCaps.dpi;

Alloy.Globals.screenHeight = Titanium.Platform.displayCaps.platformHeight / Titanium.Platform.displayCaps.dpi;

var TOPAZ = TOPAZ || {};

TOPAZ.namespace = function(name) {
    var i, parts = name.split("."), parent = TOPAZ;
    "TOPAZ" === parts[0] && (parts = parts.slice(1));
    pl = parts.length;
    for (i = 0; parts.length > i; i++) {
        "undefined" == typeof parent[parts[i]] && (parent[parts[i]] = {});
        parent = parent[parts[i]];
    }
    return parent;
};

Alloy.createController("index");