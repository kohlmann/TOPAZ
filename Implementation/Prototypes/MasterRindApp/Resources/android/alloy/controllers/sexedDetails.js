function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId1518(e) {
        if (e && e.fromAdapter) return;
        __alloyId1518.opts || {};
        var models = __alloyId1517.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId1410 = models[i];
            __alloyId1410.__transform = {};
            var __alloyId1516 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId1516);
            var __alloyId1413 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1413);
            var __alloyId1414 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId1410.__transform["image"] ? __alloyId1410.__transform["image"] : __alloyId1410.get("image")
            });
            __alloyId1413.add(__alloyId1414);
            var __alloyId1416 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId1516.add(__alloyId1416);
            var __alloyId1417 = Ti.UI.createLabel({
                text: "Empire	- 823060"
            });
            __alloyId1416.add(__alloyId1417);
            var __alloyId1418 = Ti.UI.createLabel({
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId1416.add(__alloyId1418);
            var __alloyId1419 = Ti.UI.createLabel({
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId1416.add(__alloyId1419);
            var __alloyId1420 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1420);
            var __alloyId1421 = Ti.UI.createLabel({
                text: "gRZG"
            });
            __alloyId1420.add(__alloyId1421);
            var __alloyId1422 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["gRZG"] ? __alloyId1410.__transform["gRZG"] : __alloyId1410.get("gRZG")
            });
            __alloyId1420.add(__alloyId1422);
            var __alloyId1424 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1424);
            var __alloyId1425 = Ti.UI.createLabel({
                text: "gRZM"
            });
            __alloyId1424.add(__alloyId1425);
            var __alloyId1426 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["gRZM"] ? __alloyId1410.__transform["gRZM"] : __alloyId1410.get("gRZM")
            });
            __alloyId1424.add(__alloyId1426);
            var __alloyId1428 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1428);
            var __alloyId1429 = Ti.UI.createLabel({
                text: "gRZE"
            });
            __alloyId1428.add(__alloyId1429);
            var __alloyId1430 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["gRZE"] ? __alloyId1410.__transform["gRZE"] : __alloyId1410.get("gRZE")
            });
            __alloyId1428.add(__alloyId1430);
            var __alloyId1432 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1432);
            var __alloyId1433 = Ti.UI.createLabel({
                text: "gRZR"
            });
            __alloyId1432.add(__alloyId1433);
            var __alloyId1434 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["gRZR"] ? __alloyId1410.__transform["gRZR"] : __alloyId1410.get("gRZR")
            });
            __alloyId1432.add(__alloyId1434);
            var __alloyId1436 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1436);
            var __alloyId1437 = Ti.UI.createLabel({
                text: "gRZS"
            });
            __alloyId1436.add(__alloyId1437);
            var __alloyId1438 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["gRZS"] ? __alloyId1410.__transform["gRZS"] : __alloyId1410.get("gRZS")
            });
            __alloyId1436.add(__alloyId1438);
            var __alloyId1440 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1440);
            var __alloyId1441 = Ti.UI.createLabel({
                text: "gRZKd"
            });
            __alloyId1440.add(__alloyId1441);
            var __alloyId1442 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["gRZkd"] ? __alloyId1410.__transform["gRZkd"] : __alloyId1410.get("gRZkd")
            });
            __alloyId1440.add(__alloyId1442);
            var __alloyId1443 = Ti.UI.createTableViewRow({
                title: "Milchzuchtwert"
            });
            __alloyId1516.add(__alloyId1443);
            var __alloyId1444 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId1516.add(__alloyId1444);
            var __alloyId1445 = Ti.UI.createLabel({
                text: "Milch kg\n +1.632"
            });
            __alloyId1444.add(__alloyId1445);
            var __alloyId1446 = Ti.UI.createLabel({
                text: "Fett %\n-0,11"
            });
            __alloyId1444.add(__alloyId1446);
            var __alloyId1447 = Ti.UI.createLabel({
                text: "Fett kg\n+55"
            });
            __alloyId1444.add(__alloyId1447);
            var __alloyId1448 = Ti.UI.createLabel({
                text: "Eiweiß %\n-0,07"
            });
            __alloyId1444.add(__alloyId1448);
            var __alloyId1449 = Ti.UI.createLabel({
                text: "Eiweiß kg\n+48"
            });
            __alloyId1444.add(__alloyId1449);
            var __alloyId1450 = Ti.UI.createTableViewRow({
                title: "Exterier"
            });
            __alloyId1516.add(__alloyId1450);
            var __alloyId1452 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId1516.add(__alloyId1452);
            var __alloyId1453 = Ti.UI.createLabel({
                text: "Milchtyp\n 114"
            });
            __alloyId1452.add(__alloyId1453);
            var __alloyId1454 = Ti.UI.createLabel({
                text: "Körper\n118"
            });
            __alloyId1452.add(__alloyId1454);
            var __alloyId1455 = Ti.UI.createLabel({
                text: "Fundament\n125"
            });
            __alloyId1452.add(__alloyId1455);
            var __alloyId1456 = Ti.UI.createLabel({
                text: "Euter\n132"
            });
            __alloyId1452.add(__alloyId1456);
            var __alloyId1457 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1457);
            var __alloyId1458 = Ti.UI.createLabel({
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId1457.add(__alloyId1458);
            var __alloyId1459 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1459);
            var __alloyId1460 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["Größe"] ? __alloyId1410.__transform["Größe"] : __alloyId1410.get("Größe")
            });
            __alloyId1459.add(__alloyId1460);
            var __alloyId1461 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId1459.add(__alloyId1461);
            var __alloyId1462 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["size"] ? __alloyId1410.__transform["size"] : __alloyId1410.get("size")
            });
            __alloyId1459.add(__alloyId1462);
            var __alloyId1463 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1463);
            var __alloyId1464 = Ti.UI.createLabel({
                text: "Milchcharakter"
            });
            __alloyId1463.add(__alloyId1464);
            var __alloyId1465 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["milkDairy"] ? __alloyId1410.__transform["milkDairy"] : __alloyId1410.get("milkDairy")
            });
            __alloyId1463.add(__alloyId1465);
            var __alloyId1466 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1466);
            var __alloyId1467 = Ti.UI.createLabel({
                text: "Körpertiefe"
            });
            __alloyId1466.add(__alloyId1467);
            var __alloyId1468 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["bodyDepth"] ? __alloyId1410.__transform["bodyDepth"] : __alloyId1410.get("bodyDepth")
            });
            __alloyId1466.add(__alloyId1468);
            var __alloyId1469 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1469);
            var __alloyId1470 = Ti.UI.createLabel({
                text: "Stärke"
            });
            __alloyId1469.add(__alloyId1470);
            var __alloyId1471 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["strength"] ? __alloyId1410.__transform["strength"] : __alloyId1410.get("strength")
            });
            __alloyId1469.add(__alloyId1471);
            var __alloyId1472 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1472);
            var __alloyId1473 = Ti.UI.createLabel({
                text: "Beckenneigung"
            });
            __alloyId1472.add(__alloyId1473);
            var __alloyId1474 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["beckTilt"] ? __alloyId1410.__transform["beckTilt"] : __alloyId1410.get("beckTilt")
            });
            __alloyId1472.add(__alloyId1474);
            var __alloyId1475 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1475);
            var __alloyId1476 = Ti.UI.createLabel({
                text: "Beckenbreite"
            });
            __alloyId1475.add(__alloyId1476);
            var __alloyId1477 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["beckWide"] ? __alloyId1410.__transform["beckWide"] : __alloyId1410.get("beckWide")
            });
            __alloyId1475.add(__alloyId1477);
            var __alloyId1478 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1478);
            var __alloyId1479 = Ti.UI.createLabel({
                text: "Hi.Beinwinkelung"
            });
            __alloyId1478.add(__alloyId1479);
            var __alloyId1480 = Ti.UI.createLabel({
                text: "sdfsdaf"
            });
            __alloyId1478.add(__alloyId1480);
            var __alloyId1481 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1481);
            var __alloyId1482 = Ti.UI.createLabel({
                text: "Klauenwinkel"
            });
            __alloyId1481.add(__alloyId1482);
            var __alloyId1483 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["stealAngle"] ? __alloyId1410.__transform["stealAngle"] : __alloyId1410.get("stealAngle")
            });
            __alloyId1481.add(__alloyId1483);
            var __alloyId1484 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1484);
            var __alloyId1485 = Ti.UI.createLabel({
                text: "Sprunggelenk"
            });
            __alloyId1484.add(__alloyId1485);
            var __alloyId1486 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["hock"] ? __alloyId1410.__transform["hock"] : __alloyId1410.get("hock")
            });
            __alloyId1484.add(__alloyId1486);
            var __alloyId1487 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1487);
            var __alloyId1488 = Ti.UI.createLabel({
                text: "Hi.Beinstellung"
            });
            __alloyId1487.add(__alloyId1488);
            var __alloyId1489 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["backLegsPosition"] ? __alloyId1410.__transform["backLegsPosition"] : __alloyId1410.get("backLegsPosition")
            });
            __alloyId1487.add(__alloyId1489);
            var __alloyId1490 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1490);
            var __alloyId1491 = Ti.UI.createLabel({
                text: "Bewegung"
            });
            __alloyId1490.add(__alloyId1491);
            var __alloyId1492 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["movement"] ? __alloyId1410.__transform["movement"] : __alloyId1410.get("movement")
            });
            __alloyId1490.add(__alloyId1492);
            var __alloyId1493 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1493);
            var __alloyId1494 = Ti.UI.createLabel({
                text: "Hintereuterhöhe"
            });
            __alloyId1493.add(__alloyId1494);
            var __alloyId1495 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["behindUdderHeight"] ? __alloyId1410.__transform["behindUdderHeight"] : __alloyId1410.get("behindUdderHeight")
            });
            __alloyId1493.add(__alloyId1495);
            var __alloyId1496 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1496);
            var __alloyId1497 = Ti.UI.createLabel({
                text: "Zentralband"
            });
            __alloyId1496.add(__alloyId1497);
            var __alloyId1498 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["centralBelt"] ? __alloyId1410.__transform["centralBelt"] : __alloyId1410.get("centralBelt")
            });
            __alloyId1496.add(__alloyId1498);
            var __alloyId1499 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1499);
            var __alloyId1500 = Ti.UI.createLabel({
                text: "Strichplaz. vorne"
            });
            __alloyId1499.add(__alloyId1500);
            var __alloyId1501 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["directionOfGrowthFront"] ? __alloyId1410.__transform["directionOfGrowthFront"] : __alloyId1410.get("directionOfGrowthFront")
            });
            __alloyId1499.add(__alloyId1501);
            var __alloyId1502 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1502);
            var __alloyId1503 = Ti.UI.createLabel({
                text: "Strichplaz. hinten"
            });
            __alloyId1502.add(__alloyId1503);
            var __alloyId1504 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["directionOfGrowthBack"] ? __alloyId1410.__transform["directionOfGrowthBack"] : __alloyId1410.get("directionOfGrowthBack")
            });
            __alloyId1502.add(__alloyId1504);
            var __alloyId1505 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1505);
            var __alloyId1506 = Ti.UI.createLabel({
                text: "Vordereuteraufhängung"
            });
            __alloyId1505.add(__alloyId1506);
            var __alloyId1507 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["foreUdderSuspension"] ? __alloyId1410.__transform["foreUdderSuspension"] : __alloyId1410.get("foreUdderSuspension")
            });
            __alloyId1505.add(__alloyId1507);
            var __alloyId1508 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1508);
            var __alloyId1509 = Ti.UI.createLabel({
                text: "Eutertiefe"
            });
            __alloyId1508.add(__alloyId1509);
            var __alloyId1510 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["udderDepth"] ? __alloyId1410.__transform["udderDepth"] : __alloyId1410.get("udderDepth")
            });
            __alloyId1508.add(__alloyId1510);
            var __alloyId1511 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1511);
            var __alloyId1512 = Ti.UI.createLabel({
                text: "Strichlänge"
            });
            __alloyId1511.add(__alloyId1512);
            var __alloyId1513 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId1410.__transform["directionOfGrowthLength"] ? __alloyId1410.__transform["directionOfGrowthLength"] : __alloyId1410.get("directionOfGrowthLength")
            });
            __alloyId1511.add(__alloyId1513);
            var __alloyId1515 = Ti.UI.createTableViewRow({});
            __alloyId1516.add(__alloyId1515);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sexedDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.sexedDetails = Ti.UI.createWindow({
        id: "sexedDetails"
    });
    $.__views.sexedDetails && $.addTopLevelView($.__views.sexedDetails);
    $.__views.cowDetail = Ti.UI.createTableView({
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.sexedDetails.add($.__views.cowDetail);
    var __alloyId1517 = Alloy.Collections["Alloy.Collections.sexedCol"] || Alloy.Collections.sexedCol;
    __alloyId1517.on("fetch destroy change add remove reset", __alloyId1518);
    exports.destroy = function() {
        __alloyId1517.off("fetch destroy change add remove reset", __alloyId1518);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;