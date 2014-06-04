var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.cowModel = Alloy.createCollection("cowModel");

Alloy.CFG.itemIconWidth = 6.94 * Titanium.Platform.displayCaps.platformWidth / 100;

Alloy.CFG.itemIconHeight = 3.91 * Titanium.Platform.displayCaps.platformHeight / 100;

Alloy.CFG.itemTitleFontsize = 2.78 * Titanium.Platform.displayCaps.platformWidth / 100;

Alloy.CFG.itemSubtitleFontsize = 1.94 * Titanium.Platform.displayCaps.platformWidth / 100;

Alloy.CFG.itemLeft = 8.33 * Titanium.Platform.displayCaps.platformWidth / 100;

Alloy.CFG.itemTop = 3.47 * Titanium.Platform.displayCaps.platformWidth / 100;

Alloy.CFG.screenHalf = Titanium.Platform.displayCaps.platformWidth / 2;

Alloy.createController("index");