function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "10%",
        backgroundImage: "/images/MAR_Logo01_xl.png",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.body = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "80%",
        backgroundImage: "/images/grid_an_hintergrund_ap01.png",
        id: "body",
        layout: "horizontal",
        horizontalWrap: "true"
    });
    $.__views.index.add($.__views.body);
    $.__views.about = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_ueber_uns.png",
        backgroundSelectedColor: "blue",
        id: "about"
    });
    $.__views.body.add($.__views.about);
    $.__views.contacts = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_ap.png",
        backgroundSelectedColor: "blue",
        id: "contacts"
    });
    $.__views.body.add($.__views.contacts);
    $.__views.appointments = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_termine.png",
        backgroundSelectedColor: "blue",
        id: "appointments"
    });
    $.__views.body.add($.__views.appointments);
    $.__views.favorites = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_fav.png",
        backgroundSelectedColor: "blue",
        id: "favorites"
    });
    $.__views.body.add($.__views.favorites);
    $.__views.holsteins = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_holstein.png",
        backgroundSelectedColor: "blue",
        id: "holsteins"
    });
    $.__views.body.add($.__views.holsteins);
    $.__views.blackColored = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_sbt.png",
        backgroundSelectedColor: "blue",
        id: "blackColored"
    });
    $.__views.body.add($.__views.blackColored);
    $.__views.redColored = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_rbt.png",
        backgroundSelectedColor: "blue",
        id: "redColored"
    });
    $.__views.body.add($.__views.redColored);
    $.__views.hornless = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_hornlose.png",
        backgroundSelectedColor: "blue",
        id: "hornless"
    });
    $.__views.body.add($.__views.hornless);
    $.__views.daughterTested = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_gepruefte.png",
        backgroundSelectedColor: "blue",
        id: "daughterTested"
    });
    $.__views.body.add($.__views.daughterTested);
    $.__views.genomics = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_genomics.png",
        backgroundSelectedColor: "blue",
        id: "genomics"
    });
    $.__views.body.add($.__views.genomics);
    $.__views.sexed = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_gesext.png",
        backgroundSelectedColor: "blue",
        id: "sexed"
    });
    $.__views.body.add($.__views.sexed);
    $.__views.freshSemen = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_sperma.png",
        backgroundSelectedColor: "blue",
        id: "freshSemen"
    });
    $.__views.body.add($.__views.freshSemen);
    $.__views.properties = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_settings.png",
        backgroundSelectedColor: "blue",
        id: "properties"
    });
    $.__views.body.add($.__views.properties);
    $.__views.manual = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_handbuch.png",
        backgroundSelectedColor: "blue",
        id: "manual"
    });
    $.__views.body.add($.__views.manual);
    $.__views.imprint = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_impressum.png",
        backgroundSelectedColor: "blue",
        id: "imprint"
    });
    $.__views.body.add($.__views.imprint);
    $.__views.footer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "10%",
        id: "footer"
    });
    $.__views.index.add($.__views.footer);
    $.__views.home = Ti.UI.createImageView({
        image: "/images/ios7_icon_home_xl.png",
        left: "20%",
        top: "20%",
        id: "home"
    });
    $.__views.footer.add($.__views.home);
    $.__views.search = Ti.UI.createImageView({
        image: "/images/icon_in_der_naehe_2_xl.png",
        right: "20%",
        top: "25%",
        id: "search"
    });
    $.__views.footer.add($.__views.search);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("TOPAZ/masterrind/MasterRind");
    require("TOPAZ/masterrind/interfaces/Cow");
    require("TOPAZ/masterrind/impl/BlackColored");
    require("TOPAZ/masterrind/interfaces/Favorite");
    require("TOPAZ/masterrind/impl/Holsteins");
    var cowList = new Array();
    var model;
    $.about.addEventListener("click", function() {
        for (i = 0; cowList.length > i; i++) {
            cow = cowList[i];
            console.log(cow.getId() + " " + cow.getBase());
            model = Alloy.createModel("cowsMod", {
                ID: cow.getId()
            });
            Alloy.Collections.cowCol.add(model);
        }
        var win = Alloy.createController("about").getView();
        win.open();
    });
    $.appointments.addEventListener("click", function() {
        Alloy.createController("appointments").getView();
        var mr = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.CowFactory());
        mr.loadCowsFromDB();
        cowList = mr.getCows("Holsteins");
        var mr_fav = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.FavoriteFactory());
        console.log(mr_fav.addFavorite("cow", "23", "Peniskopf").getName());
        var mr_app = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.AppointmentFactory());
        console.log(mr_app.getAppointment("Auction").getName());
    });
    $.blackColored.addEventListener("click", function() {
        var win = Alloy.createController("blackColored").getView();
        win.open();
    });
    $.contacts.addEventListener("click", function() {
        var win = Alloy.createController("contacts").getView();
        win.open();
        var appointments = new Array();
        new Array();
        new Array();
        var cows = new Array();
        var favorites = new Array();
        var model;
        var mr_app = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.AppointmentFactory());
        mr_app.loadAppointmentsFromDB();
        appointments = mr_app.getAppointments("Meeting");
        console.log(appointments.length);
        for (i = 0; appointments.length > i; i++) {
            app = appointments[i];
            console.log(app.getName());
        }
        var mr_fav = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.FavoriteFactory());
        mr_fav.addFavorite("12", "Peniskopf", "1", "PeniskopfFav");
        mr_fav.loadFavoritesFromDB();
        favorites = mr_fav.getFavorites("cow");
        for (i = 0; favorites.length > i; i++) console.log(favorites[i].getName());
        var mr_cow = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.CowFactory());
        mr_cow.loadCowsFromDB();
        cows = mr_cow.getCows("Holsteins");
        for (i = 0; cows.length > i; i++) {
            cow = cows[i];
            console.log(cow.getId() + " " + cow.getBase());
            model = Alloy.createModel("cowsMod", {
                ID: cow.getId()
            });
            Alloy.Collections.cowCol.add(model);
        }
    });
    $.about.addEventListener("click", function() {
        var win = Alloy.createController("about").getView();
        win.open();
    });
    $.daughterTested.addEventListener("click", function() {
        var win = Alloy.createController("daughterTested").getView();
        win.open();
    });
    $.favorites.addEventListener("click", function() {
        var win = Alloy.createController("favorites").getView();
        win.open();
    });
    $.freshSemen.addEventListener("click", function() {
        var win = Alloy.createController("freshSemen").getView();
        win.open();
    });
    $.genomics.addEventListener("click", function() {
        var win = Alloy.createController("genomics").getView();
        win.open();
    });
    $.about.addEventListener("click", function() {
        var win = Alloy.createController("about").getView();
        win.open();
    });
    $.holsteins.addEventListener("click", function() {
        var win = Alloy.createController("holsteins").getView();
        win.open();
    });
    $.hornless.addEventListener("click", function() {
        var win = Alloy.createController("hornless").getView();
        win.open();
    });
    $.imprint.addEventListener("click", function() {
        var win = Alloy.createController("imprint").getView();
        win.open();
    });
    $.manual.addEventListener("click", function() {
        var win = Alloy.createController("manual").getView();
        win.open();
    });
    $.properties.addEventListener("click", function() {
        var win = Alloy.createController("properties").getView();
        win.open();
    });
    $.redColored.addEventListener("click", function() {
        var win = Alloy.createController("redColored").getView();
        win.open();
    });
    $.sexed.addEventListener("click", function() {
        var win = Alloy.createController("sexed").getView();
        win.open();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;