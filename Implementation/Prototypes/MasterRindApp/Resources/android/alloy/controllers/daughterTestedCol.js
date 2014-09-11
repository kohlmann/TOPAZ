function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId435(e) {
        if (e && e.fromAdapter) return;
        __alloyId435.opts || {};
        var models = __alloyId434.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId327 = models[i];
            __alloyId327.__transform = {};
            var __alloyId433 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId433);
            var __alloyId330 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId330);
            var __alloyId331 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId327.__transform["image"] ? __alloyId327.__transform["image"] : __alloyId327.get("image")
            });
            __alloyId330.add(__alloyId331);
            var __alloyId333 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId433.add(__alloyId333);
            var __alloyId334 = Ti.UI.createLabel({
                text: "Empire	- 823060"
            });
            __alloyId333.add(__alloyId334);
            var __alloyId335 = Ti.UI.createLabel({
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId333.add(__alloyId335);
            var __alloyId336 = Ti.UI.createLabel({
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId333.add(__alloyId336);
            var __alloyId337 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId337);
            var __alloyId338 = Ti.UI.createLabel({
                text: "gRZG"
            });
            __alloyId337.add(__alloyId338);
            var __alloyId339 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["gRZG"] ? __alloyId327.__transform["gRZG"] : __alloyId327.get("gRZG")
            });
            __alloyId337.add(__alloyId339);
            var __alloyId341 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId341);
            var __alloyId342 = Ti.UI.createLabel({
                text: "gRZM"
            });
            __alloyId341.add(__alloyId342);
            var __alloyId343 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["gRZM"] ? __alloyId327.__transform["gRZM"] : __alloyId327.get("gRZM")
            });
            __alloyId341.add(__alloyId343);
            var __alloyId345 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId345);
            var __alloyId346 = Ti.UI.createLabel({
                text: "gRZE"
            });
            __alloyId345.add(__alloyId346);
            var __alloyId347 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["gRZE"] ? __alloyId327.__transform["gRZE"] : __alloyId327.get("gRZE")
            });
            __alloyId345.add(__alloyId347);
            var __alloyId349 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId349);
            var __alloyId350 = Ti.UI.createLabel({
                text: "gRZR"
            });
            __alloyId349.add(__alloyId350);
            var __alloyId351 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["gRZR"] ? __alloyId327.__transform["gRZR"] : __alloyId327.get("gRZR")
            });
            __alloyId349.add(__alloyId351);
            var __alloyId353 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId353);
            var __alloyId354 = Ti.UI.createLabel({
                text: "gRZS"
            });
            __alloyId353.add(__alloyId354);
            var __alloyId355 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["gRZS"] ? __alloyId327.__transform["gRZS"] : __alloyId327.get("gRZS")
            });
            __alloyId353.add(__alloyId355);
            var __alloyId357 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId357);
            var __alloyId358 = Ti.UI.createLabel({
                text: "gRZKd"
            });
            __alloyId357.add(__alloyId358);
            var __alloyId359 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["gRZkd"] ? __alloyId327.__transform["gRZkd"] : __alloyId327.get("gRZkd")
            });
            __alloyId357.add(__alloyId359);
            var __alloyId360 = Ti.UI.createTableViewRow({
                title: "Milchzuchtwert"
            });
            __alloyId433.add(__alloyId360);
            var __alloyId361 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId433.add(__alloyId361);
            var __alloyId362 = Ti.UI.createLabel({
                text: "Milch kg\n +1.632"
            });
            __alloyId361.add(__alloyId362);
            var __alloyId363 = Ti.UI.createLabel({
                text: "Fett %\n-0,11"
            });
            __alloyId361.add(__alloyId363);
            var __alloyId364 = Ti.UI.createLabel({
                text: "Fett kg\n+55"
            });
            __alloyId361.add(__alloyId364);
            var __alloyId365 = Ti.UI.createLabel({
                text: "Eiweiß %\n-0,07"
            });
            __alloyId361.add(__alloyId365);
            var __alloyId366 = Ti.UI.createLabel({
                text: "Eiweiß kg\n+48"
            });
            __alloyId361.add(__alloyId366);
            var __alloyId367 = Ti.UI.createTableViewRow({
                title: "Exterier"
            });
            __alloyId433.add(__alloyId367);
            var __alloyId369 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId433.add(__alloyId369);
            var __alloyId370 = Ti.UI.createLabel({
                text: "Milchtyp\n 114"
            });
            __alloyId369.add(__alloyId370);
            var __alloyId371 = Ti.UI.createLabel({
                text: "Körper\n118"
            });
            __alloyId369.add(__alloyId371);
            var __alloyId372 = Ti.UI.createLabel({
                text: "Fundament\n125"
            });
            __alloyId369.add(__alloyId372);
            var __alloyId373 = Ti.UI.createLabel({
                text: "Euter\n132"
            });
            __alloyId369.add(__alloyId373);
            var __alloyId374 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId374);
            var __alloyId375 = Ti.UI.createLabel({
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId374.add(__alloyId375);
            var __alloyId376 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId376);
            var __alloyId377 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["Größe"] ? __alloyId327.__transform["Größe"] : __alloyId327.get("Größe")
            });
            __alloyId376.add(__alloyId377);
            var __alloyId378 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId376.add(__alloyId378);
            var __alloyId379 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["size"] ? __alloyId327.__transform["size"] : __alloyId327.get("size")
            });
            __alloyId376.add(__alloyId379);
            var __alloyId380 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId380);
            var __alloyId381 = Ti.UI.createLabel({
                text: "Milchcharakter"
            });
            __alloyId380.add(__alloyId381);
            var __alloyId382 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["milkDairy"] ? __alloyId327.__transform["milkDairy"] : __alloyId327.get("milkDairy")
            });
            __alloyId380.add(__alloyId382);
            var __alloyId383 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId383);
            var __alloyId384 = Ti.UI.createLabel({
                text: "Körpertiefe"
            });
            __alloyId383.add(__alloyId384);
            var __alloyId385 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["bodyDepth"] ? __alloyId327.__transform["bodyDepth"] : __alloyId327.get("bodyDepth")
            });
            __alloyId383.add(__alloyId385);
            var __alloyId386 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId386);
            var __alloyId387 = Ti.UI.createLabel({
                text: "Stärke"
            });
            __alloyId386.add(__alloyId387);
            var __alloyId388 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["strength"] ? __alloyId327.__transform["strength"] : __alloyId327.get("strength")
            });
            __alloyId386.add(__alloyId388);
            var __alloyId389 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId389);
            var __alloyId390 = Ti.UI.createLabel({
                text: "Beckenneigung"
            });
            __alloyId389.add(__alloyId390);
            var __alloyId391 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["beckTilt"] ? __alloyId327.__transform["beckTilt"] : __alloyId327.get("beckTilt")
            });
            __alloyId389.add(__alloyId391);
            var __alloyId392 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId392);
            var __alloyId393 = Ti.UI.createLabel({
                text: "Beckenbreite"
            });
            __alloyId392.add(__alloyId393);
            var __alloyId394 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["beckWide"] ? __alloyId327.__transform["beckWide"] : __alloyId327.get("beckWide")
            });
            __alloyId392.add(__alloyId394);
            var __alloyId395 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId395);
            var __alloyId396 = Ti.UI.createLabel({
                text: "Hi.Beinwinkelung"
            });
            __alloyId395.add(__alloyId396);
            var __alloyId397 = Ti.UI.createLabel({
                text: "sdfsdaf"
            });
            __alloyId395.add(__alloyId397);
            var __alloyId398 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId398);
            var __alloyId399 = Ti.UI.createLabel({
                text: "Klauenwinkel"
            });
            __alloyId398.add(__alloyId399);
            var __alloyId400 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["stealAngle"] ? __alloyId327.__transform["stealAngle"] : __alloyId327.get("stealAngle")
            });
            __alloyId398.add(__alloyId400);
            var __alloyId401 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId401);
            var __alloyId402 = Ti.UI.createLabel({
                text: "Sprunggelenk"
            });
            __alloyId401.add(__alloyId402);
            var __alloyId403 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["hock"] ? __alloyId327.__transform["hock"] : __alloyId327.get("hock")
            });
            __alloyId401.add(__alloyId403);
            var __alloyId404 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId404);
            var __alloyId405 = Ti.UI.createLabel({
                text: "Hi.Beinstellung"
            });
            __alloyId404.add(__alloyId405);
            var __alloyId406 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["backLegsPosition"] ? __alloyId327.__transform["backLegsPosition"] : __alloyId327.get("backLegsPosition")
            });
            __alloyId404.add(__alloyId406);
            var __alloyId407 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId407);
            var __alloyId408 = Ti.UI.createLabel({
                text: "Bewegung"
            });
            __alloyId407.add(__alloyId408);
            var __alloyId409 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["movement"] ? __alloyId327.__transform["movement"] : __alloyId327.get("movement")
            });
            __alloyId407.add(__alloyId409);
            var __alloyId410 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId410);
            var __alloyId411 = Ti.UI.createLabel({
                text: "Hintereuterhöhe"
            });
            __alloyId410.add(__alloyId411);
            var __alloyId412 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["behindUdderHeight"] ? __alloyId327.__transform["behindUdderHeight"] : __alloyId327.get("behindUdderHeight")
            });
            __alloyId410.add(__alloyId412);
            var __alloyId413 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId413);
            var __alloyId414 = Ti.UI.createLabel({
                text: "Zentralband"
            });
            __alloyId413.add(__alloyId414);
            var __alloyId415 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["centralBelt"] ? __alloyId327.__transform["centralBelt"] : __alloyId327.get("centralBelt")
            });
            __alloyId413.add(__alloyId415);
            var __alloyId416 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId416);
            var __alloyId417 = Ti.UI.createLabel({
                text: "Strichplaz. vorne"
            });
            __alloyId416.add(__alloyId417);
            var __alloyId418 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["directionOfGrowthFront"] ? __alloyId327.__transform["directionOfGrowthFront"] : __alloyId327.get("directionOfGrowthFront")
            });
            __alloyId416.add(__alloyId418);
            var __alloyId419 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId419);
            var __alloyId420 = Ti.UI.createLabel({
                text: "Strichplaz. hinten"
            });
            __alloyId419.add(__alloyId420);
            var __alloyId421 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["directionOfGrowthBack"] ? __alloyId327.__transform["directionOfGrowthBack"] : __alloyId327.get("directionOfGrowthBack")
            });
            __alloyId419.add(__alloyId421);
            var __alloyId422 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId422);
            var __alloyId423 = Ti.UI.createLabel({
                text: "Vordereuteraufhängung"
            });
            __alloyId422.add(__alloyId423);
            var __alloyId424 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["foreUdderSuspension"] ? __alloyId327.__transform["foreUdderSuspension"] : __alloyId327.get("foreUdderSuspension")
            });
            __alloyId422.add(__alloyId424);
            var __alloyId425 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId425);
            var __alloyId426 = Ti.UI.createLabel({
                text: "Eutertiefe"
            });
            __alloyId425.add(__alloyId426);
            var __alloyId427 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["udderDepth"] ? __alloyId327.__transform["udderDepth"] : __alloyId327.get("udderDepth")
            });
            __alloyId425.add(__alloyId427);
            var __alloyId428 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId428);
            var __alloyId429 = Ti.UI.createLabel({
                text: "Strichlänge"
            });
            __alloyId428.add(__alloyId429);
            var __alloyId430 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId327.__transform["directionOfGrowthLength"] ? __alloyId327.__transform["directionOfGrowthLength"] : __alloyId327.get("directionOfGrowthLength")
            });
            __alloyId428.add(__alloyId430);
            var __alloyId432 = Ti.UI.createTableViewRow({});
            __alloyId433.add(__alloyId432);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "daughterTestedCol";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.daughterTestedCol = Ti.UI.createWindow({
        id: "daughterTestedCol"
    });
    $.__views.daughterTestedCol && $.addTopLevelView($.__views.daughterTestedCol);
    $.__views.cowDetail = Ti.UI.createTableView({
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.daughterTestedCol.add($.__views.cowDetail);
    var __alloyId434 = Alloy.Collections["Alloy.Collections.daughterTestedCol"] || Alloy.Collections.daughterTestedCol;
    __alloyId434.on("fetch destroy change add remove reset", __alloyId435);
    exports.destroy = function() {
        __alloyId434.off("fetch destroy change add remove reset", __alloyId435);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;