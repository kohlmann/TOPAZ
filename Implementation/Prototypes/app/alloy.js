// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// var db = Ti.Database.open ('_alloy_');
   // db.execute('DROP TABLE IF EXISTS orders;');
   // db.close ();

Alloy.Collections.cowModel = Alloy.createCollection("cowModel");

//Listengrößen
Alloy.CFG.itemIconWidth = (Titanium.Platform.displayCaps.platformWidth * 6.94)/100;
Alloy.CFG.itemIconHeight = (Titanium.Platform.displayCaps.platformHeight * 3.91)/100;

Alloy.CFG.itemTitleFontsize = (Titanium.Platform.displayCaps.platformWidth * 2.78)/100;

Alloy.CFG.itemSubtitleFontsize = (Titanium.Platform.displayCaps.platformWidth * 1.94)/100;

Alloy.CFG.itemLeft = (Titanium.Platform.displayCaps.platformWidth * 8.33)/100;
Alloy.CFG.itemTop = (Titanium.Platform.displayCaps.platformWidth * 3.47)/100;
