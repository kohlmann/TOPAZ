function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
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
    require("TOPAZ/masterrind/impl/MasterRindFacade");
    require("TOPAZ/masterrind/datatypes/Cow");
    require("TOPAZ/masterrind/datatypes/Favorite");
    $.about.addEventListener("click", function() {
        var win = Alloy.createController("about").getView();
        win.open();
    });
    $.appointments.addEventListener("click", function() {
        var win = Alloy.createController("appointments").getView();
        win.open();
    });
    $.blackColored.addEventListener("click", function() {
        var win = Alloy.createController("blackColored").getView();
        win.open();
        var cows = new Array();
        var model;
        var mr_cow = new TOPAZ.masterrind.impl.MasterRindFacade();
        cows = mr_cow.loadCowsFromDB();
        for (i = 0; cows.length > i; i++) {
            var cow = cows[i];
            console.log(cow.getId() + " " + cow.getName() + " " + cow.getFather());
            model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: cow.getFF(),
                fff: cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.cowCol.add(model);
        }
    });
    $.contacts.addEventListener("click", function() {
        var win = Alloy.createController("contacts").getView();
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