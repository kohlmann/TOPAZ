function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId546(e) {
        if (e && e.fromAdapter) return;
        __alloyId546.opts || {};
        var models = __alloyId545.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId438 = models[i];
            __alloyId438.__transform = {};
            var __alloyId544 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId544);
            var __alloyId441 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId441);
            var __alloyId442 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId438.__transform["image"] ? __alloyId438.__transform["image"] : __alloyId438.get("image")
            });
            __alloyId441.add(__alloyId442);
            var __alloyId444 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId544.add(__alloyId444);
            var __alloyId445 = Ti.UI.createLabel({
                text: "Empire	- 823060"
            });
            __alloyId444.add(__alloyId445);
            var __alloyId446 = Ti.UI.createLabel({
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId444.add(__alloyId446);
            var __alloyId447 = Ti.UI.createLabel({
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId444.add(__alloyId447);
            var __alloyId448 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId448);
            var __alloyId449 = Ti.UI.createLabel({
                text: "gRZG"
            });
            __alloyId448.add(__alloyId449);
            var __alloyId450 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["gRZG"] ? __alloyId438.__transform["gRZG"] : __alloyId438.get("gRZG")
            });
            __alloyId448.add(__alloyId450);
            var __alloyId452 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId452);
            var __alloyId453 = Ti.UI.createLabel({
                text: "gRZM"
            });
            __alloyId452.add(__alloyId453);
            var __alloyId454 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["gRZM"] ? __alloyId438.__transform["gRZM"] : __alloyId438.get("gRZM")
            });
            __alloyId452.add(__alloyId454);
            var __alloyId456 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId456);
            var __alloyId457 = Ti.UI.createLabel({
                text: "gRZE"
            });
            __alloyId456.add(__alloyId457);
            var __alloyId458 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["gRZE"] ? __alloyId438.__transform["gRZE"] : __alloyId438.get("gRZE")
            });
            __alloyId456.add(__alloyId458);
            var __alloyId460 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId460);
            var __alloyId461 = Ti.UI.createLabel({
                text: "gRZR"
            });
            __alloyId460.add(__alloyId461);
            var __alloyId462 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["gRZR"] ? __alloyId438.__transform["gRZR"] : __alloyId438.get("gRZR")
            });
            __alloyId460.add(__alloyId462);
            var __alloyId464 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId464);
            var __alloyId465 = Ti.UI.createLabel({
                text: "gRZS"
            });
            __alloyId464.add(__alloyId465);
            var __alloyId466 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["gRZS"] ? __alloyId438.__transform["gRZS"] : __alloyId438.get("gRZS")
            });
            __alloyId464.add(__alloyId466);
            var __alloyId468 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId468);
            var __alloyId469 = Ti.UI.createLabel({
                text: "gRZKd"
            });
            __alloyId468.add(__alloyId469);
            var __alloyId470 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["gRZkd"] ? __alloyId438.__transform["gRZkd"] : __alloyId438.get("gRZkd")
            });
            __alloyId468.add(__alloyId470);
            var __alloyId471 = Ti.UI.createTableViewRow({
                title: "Milchzuchtwert"
            });
            __alloyId544.add(__alloyId471);
            var __alloyId472 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId544.add(__alloyId472);
            var __alloyId473 = Ti.UI.createLabel({
                text: "Milch kg\n +1.632"
            });
            __alloyId472.add(__alloyId473);
            var __alloyId474 = Ti.UI.createLabel({
                text: "Fett %\n-0,11"
            });
            __alloyId472.add(__alloyId474);
            var __alloyId475 = Ti.UI.createLabel({
                text: "Fett kg\n+55"
            });
            __alloyId472.add(__alloyId475);
            var __alloyId476 = Ti.UI.createLabel({
                text: "Eiweiß %\n-0,07"
            });
            __alloyId472.add(__alloyId476);
            var __alloyId477 = Ti.UI.createLabel({
                text: "Eiweiß kg\n+48"
            });
            __alloyId472.add(__alloyId477);
            var __alloyId478 = Ti.UI.createTableViewRow({
                title: "Exterier"
            });
            __alloyId544.add(__alloyId478);
            var __alloyId480 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId544.add(__alloyId480);
            var __alloyId481 = Ti.UI.createLabel({
                text: "Milchtyp\n 114"
            });
            __alloyId480.add(__alloyId481);
            var __alloyId482 = Ti.UI.createLabel({
                text: "Körper\n118"
            });
            __alloyId480.add(__alloyId482);
            var __alloyId483 = Ti.UI.createLabel({
                text: "Fundament\n125"
            });
            __alloyId480.add(__alloyId483);
            var __alloyId484 = Ti.UI.createLabel({
                text: "Euter\n132"
            });
            __alloyId480.add(__alloyId484);
            var __alloyId485 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId485);
            var __alloyId486 = Ti.UI.createLabel({
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId485.add(__alloyId486);
            var __alloyId487 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId487);
            var __alloyId488 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["Größe"] ? __alloyId438.__transform["Größe"] : __alloyId438.get("Größe")
            });
            __alloyId487.add(__alloyId488);
            var __alloyId489 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId487.add(__alloyId489);
            var __alloyId490 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["size"] ? __alloyId438.__transform["size"] : __alloyId438.get("size")
            });
            __alloyId487.add(__alloyId490);
            var __alloyId491 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId491);
            var __alloyId492 = Ti.UI.createLabel({
                text: "Milchcharakter"
            });
            __alloyId491.add(__alloyId492);
            var __alloyId493 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["milkDairy"] ? __alloyId438.__transform["milkDairy"] : __alloyId438.get("milkDairy")
            });
            __alloyId491.add(__alloyId493);
            var __alloyId494 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId494);
            var __alloyId495 = Ti.UI.createLabel({
                text: "Körpertiefe"
            });
            __alloyId494.add(__alloyId495);
            var __alloyId496 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["bodyDepth"] ? __alloyId438.__transform["bodyDepth"] : __alloyId438.get("bodyDepth")
            });
            __alloyId494.add(__alloyId496);
            var __alloyId497 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId497);
            var __alloyId498 = Ti.UI.createLabel({
                text: "Stärke"
            });
            __alloyId497.add(__alloyId498);
            var __alloyId499 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["strength"] ? __alloyId438.__transform["strength"] : __alloyId438.get("strength")
            });
            __alloyId497.add(__alloyId499);
            var __alloyId500 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId500);
            var __alloyId501 = Ti.UI.createLabel({
                text: "Beckenneigung"
            });
            __alloyId500.add(__alloyId501);
            var __alloyId502 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["beckTilt"] ? __alloyId438.__transform["beckTilt"] : __alloyId438.get("beckTilt")
            });
            __alloyId500.add(__alloyId502);
            var __alloyId503 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId503);
            var __alloyId504 = Ti.UI.createLabel({
                text: "Beckenbreite"
            });
            __alloyId503.add(__alloyId504);
            var __alloyId505 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["beckWide"] ? __alloyId438.__transform["beckWide"] : __alloyId438.get("beckWide")
            });
            __alloyId503.add(__alloyId505);
            var __alloyId506 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId506);
            var __alloyId507 = Ti.UI.createLabel({
                text: "Hi.Beinwinkelung"
            });
            __alloyId506.add(__alloyId507);
            var __alloyId508 = Ti.UI.createLabel({
                text: "sdfsdaf"
            });
            __alloyId506.add(__alloyId508);
            var __alloyId509 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId509);
            var __alloyId510 = Ti.UI.createLabel({
                text: "Klauenwinkel"
            });
            __alloyId509.add(__alloyId510);
            var __alloyId511 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["stealAngle"] ? __alloyId438.__transform["stealAngle"] : __alloyId438.get("stealAngle")
            });
            __alloyId509.add(__alloyId511);
            var __alloyId512 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId512);
            var __alloyId513 = Ti.UI.createLabel({
                text: "Sprunggelenk"
            });
            __alloyId512.add(__alloyId513);
            var __alloyId514 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["hock"] ? __alloyId438.__transform["hock"] : __alloyId438.get("hock")
            });
            __alloyId512.add(__alloyId514);
            var __alloyId515 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId515);
            var __alloyId516 = Ti.UI.createLabel({
                text: "Hi.Beinstellung"
            });
            __alloyId515.add(__alloyId516);
            var __alloyId517 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["backLegsPosition"] ? __alloyId438.__transform["backLegsPosition"] : __alloyId438.get("backLegsPosition")
            });
            __alloyId515.add(__alloyId517);
            var __alloyId518 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId518);
            var __alloyId519 = Ti.UI.createLabel({
                text: "Bewegung"
            });
            __alloyId518.add(__alloyId519);
            var __alloyId520 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["movement"] ? __alloyId438.__transform["movement"] : __alloyId438.get("movement")
            });
            __alloyId518.add(__alloyId520);
            var __alloyId521 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId521);
            var __alloyId522 = Ti.UI.createLabel({
                text: "Hintereuterhöhe"
            });
            __alloyId521.add(__alloyId522);
            var __alloyId523 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["behindUdderHeight"] ? __alloyId438.__transform["behindUdderHeight"] : __alloyId438.get("behindUdderHeight")
            });
            __alloyId521.add(__alloyId523);
            var __alloyId524 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId524);
            var __alloyId525 = Ti.UI.createLabel({
                text: "Zentralband"
            });
            __alloyId524.add(__alloyId525);
            var __alloyId526 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["centralBelt"] ? __alloyId438.__transform["centralBelt"] : __alloyId438.get("centralBelt")
            });
            __alloyId524.add(__alloyId526);
            var __alloyId527 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId527);
            var __alloyId528 = Ti.UI.createLabel({
                text: "Strichplaz. vorne"
            });
            __alloyId527.add(__alloyId528);
            var __alloyId529 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["directionOfGrowthFront"] ? __alloyId438.__transform["directionOfGrowthFront"] : __alloyId438.get("directionOfGrowthFront")
            });
            __alloyId527.add(__alloyId529);
            var __alloyId530 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId530);
            var __alloyId531 = Ti.UI.createLabel({
                text: "Strichplaz. hinten"
            });
            __alloyId530.add(__alloyId531);
            var __alloyId532 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["directionOfGrowthBack"] ? __alloyId438.__transform["directionOfGrowthBack"] : __alloyId438.get("directionOfGrowthBack")
            });
            __alloyId530.add(__alloyId532);
            var __alloyId533 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId533);
            var __alloyId534 = Ti.UI.createLabel({
                text: "Vordereuteraufhängung"
            });
            __alloyId533.add(__alloyId534);
            var __alloyId535 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["foreUdderSuspension"] ? __alloyId438.__transform["foreUdderSuspension"] : __alloyId438.get("foreUdderSuspension")
            });
            __alloyId533.add(__alloyId535);
            var __alloyId536 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId536);
            var __alloyId537 = Ti.UI.createLabel({
                text: "Eutertiefe"
            });
            __alloyId536.add(__alloyId537);
            var __alloyId538 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["udderDepth"] ? __alloyId438.__transform["udderDepth"] : __alloyId438.get("udderDepth")
            });
            __alloyId536.add(__alloyId538);
            var __alloyId539 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId539);
            var __alloyId540 = Ti.UI.createLabel({
                text: "Strichlänge"
            });
            __alloyId539.add(__alloyId540);
            var __alloyId541 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId438.__transform["directionOfGrowthLength"] ? __alloyId438.__transform["directionOfGrowthLength"] : __alloyId438.get("directionOfGrowthLength")
            });
            __alloyId539.add(__alloyId541);
            var __alloyId543 = Ti.UI.createTableViewRow({});
            __alloyId544.add(__alloyId543);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "genomicsDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.genomicsDetails = Ti.UI.createWindow({
        id: "genomicsDetails"
    });
    $.__views.genomicsDetails && $.addTopLevelView($.__views.genomicsDetails);
    $.__views.cowDetail = Ti.UI.createTableView({
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.genomicsDetails.add($.__views.cowDetail);
    var __alloyId545 = Alloy.Collections["Alloy.Collections.genomicsCol"] || Alloy.Collections.genomicsCol;
    __alloyId545.on("fetch destroy change add remove reset", __alloyId546);
    exports.destroy = function() {
        __alloyId545.off("fetch destroy change add remove reset", __alloyId546);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;