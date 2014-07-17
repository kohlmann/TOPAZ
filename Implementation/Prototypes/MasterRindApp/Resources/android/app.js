var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.cowCol = Alloy.createCollection("cowsMod");

Alloy.Globals.screenWidth = Titanium.Platform.displayCaps.platformWidth / Titanium.Platform.displayCaps.dpi;

Alloy.Globals.screenHeight = Titanium.Platform.displayCaps.platformHeight / Titanium.Platform.displayCaps.dpi;

var TOPAZ = TOPAZ || {};

TOPAZ.namespace = function(ns_string) {
    var i, parts = ns_string.split("."), parent = TOPAZ;
    "TOPAZ" === parts[0] && (parts = parts.slice(1));
    pl = parts.length;
    for (i = 0; parts.length > i; i++) {
        "undefined" == typeof parent[parts[i]] && (parent[parts[i]] = {});
        parent = parent[parts[i]];
    }
    return parent;
};

Alloy.createController("index");