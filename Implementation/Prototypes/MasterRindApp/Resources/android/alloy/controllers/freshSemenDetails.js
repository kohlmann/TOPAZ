function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId674(e) {
        if (e && e.fromAdapter) return;
        __alloyId674.opts || {};
        var models = __alloyId673.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId566 = models[i];
            __alloyId566.__transform = {};
            var __alloyId672 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId672);
            var __alloyId569 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId569);
            var __alloyId570 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId566.__transform["image"] ? __alloyId566.__transform["image"] : __alloyId566.get("image")
            });
            __alloyId569.add(__alloyId570);
            var __alloyId572 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId672.add(__alloyId572);
            var __alloyId573 = Ti.UI.createLabel({
                text: "Empire	- 823060"
            });
            __alloyId572.add(__alloyId573);
            var __alloyId574 = Ti.UI.createLabel({
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId572.add(__alloyId574);
            var __alloyId575 = Ti.UI.createLabel({
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId572.add(__alloyId575);
            var __alloyId576 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId576);
            var __alloyId577 = Ti.UI.createLabel({
                text: "gRZG"
            });
            __alloyId576.add(__alloyId577);
            var __alloyId578 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["gRZG"] ? __alloyId566.__transform["gRZG"] : __alloyId566.get("gRZG")
            });
            __alloyId576.add(__alloyId578);
            var __alloyId580 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId580);
            var __alloyId581 = Ti.UI.createLabel({
                text: "gRZM"
            });
            __alloyId580.add(__alloyId581);
            var __alloyId582 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["gRZM"] ? __alloyId566.__transform["gRZM"] : __alloyId566.get("gRZM")
            });
            __alloyId580.add(__alloyId582);
            var __alloyId584 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId584);
            var __alloyId585 = Ti.UI.createLabel({
                text: "gRZE"
            });
            __alloyId584.add(__alloyId585);
            var __alloyId586 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["gRZE"] ? __alloyId566.__transform["gRZE"] : __alloyId566.get("gRZE")
            });
            __alloyId584.add(__alloyId586);
            var __alloyId588 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId588);
            var __alloyId589 = Ti.UI.createLabel({
                text: "gRZR"
            });
            __alloyId588.add(__alloyId589);
            var __alloyId590 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["gRZR"] ? __alloyId566.__transform["gRZR"] : __alloyId566.get("gRZR")
            });
            __alloyId588.add(__alloyId590);
            var __alloyId592 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId592);
            var __alloyId593 = Ti.UI.createLabel({
                text: "gRZS"
            });
            __alloyId592.add(__alloyId593);
            var __alloyId594 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["gRZS"] ? __alloyId566.__transform["gRZS"] : __alloyId566.get("gRZS")
            });
            __alloyId592.add(__alloyId594);
            var __alloyId596 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId596);
            var __alloyId597 = Ti.UI.createLabel({
                text: "gRZKd"
            });
            __alloyId596.add(__alloyId597);
            var __alloyId598 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["gRZkd"] ? __alloyId566.__transform["gRZkd"] : __alloyId566.get("gRZkd")
            });
            __alloyId596.add(__alloyId598);
            var __alloyId599 = Ti.UI.createTableViewRow({
                title: "Milchzuchtwert"
            });
            __alloyId672.add(__alloyId599);
            var __alloyId600 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId672.add(__alloyId600);
            var __alloyId601 = Ti.UI.createLabel({
                text: "Milch kg\n +1.632"
            });
            __alloyId600.add(__alloyId601);
            var __alloyId602 = Ti.UI.createLabel({
                text: "Fett %\n-0,11"
            });
            __alloyId600.add(__alloyId602);
            var __alloyId603 = Ti.UI.createLabel({
                text: "Fett kg\n+55"
            });
            __alloyId600.add(__alloyId603);
            var __alloyId604 = Ti.UI.createLabel({
                text: "Eiweiß %\n-0,07"
            });
            __alloyId600.add(__alloyId604);
            var __alloyId605 = Ti.UI.createLabel({
                text: "Eiweiß kg\n+48"
            });
            __alloyId600.add(__alloyId605);
            var __alloyId606 = Ti.UI.createTableViewRow({
                title: "Exterier"
            });
            __alloyId672.add(__alloyId606);
            var __alloyId608 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId672.add(__alloyId608);
            var __alloyId609 = Ti.UI.createLabel({
                text: "Milchtyp\n 114"
            });
            __alloyId608.add(__alloyId609);
            var __alloyId610 = Ti.UI.createLabel({
                text: "Körper\n118"
            });
            __alloyId608.add(__alloyId610);
            var __alloyId611 = Ti.UI.createLabel({
                text: "Fundament\n125"
            });
            __alloyId608.add(__alloyId611);
            var __alloyId612 = Ti.UI.createLabel({
                text: "Euter\n132"
            });
            __alloyId608.add(__alloyId612);
            var __alloyId613 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId613);
            var __alloyId614 = Ti.UI.createLabel({
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId613.add(__alloyId614);
            var __alloyId615 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId615);
            var __alloyId616 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["Größe"] ? __alloyId566.__transform["Größe"] : __alloyId566.get("Größe")
            });
            __alloyId615.add(__alloyId616);
            var __alloyId617 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId615.add(__alloyId617);
            var __alloyId618 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["size"] ? __alloyId566.__transform["size"] : __alloyId566.get("size")
            });
            __alloyId615.add(__alloyId618);
            var __alloyId619 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId619);
            var __alloyId620 = Ti.UI.createLabel({
                text: "Milchcharakter"
            });
            __alloyId619.add(__alloyId620);
            var __alloyId621 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["milkDairy"] ? __alloyId566.__transform["milkDairy"] : __alloyId566.get("milkDairy")
            });
            __alloyId619.add(__alloyId621);
            var __alloyId622 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId622);
            var __alloyId623 = Ti.UI.createLabel({
                text: "Körpertiefe"
            });
            __alloyId622.add(__alloyId623);
            var __alloyId624 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["bodyDepth"] ? __alloyId566.__transform["bodyDepth"] : __alloyId566.get("bodyDepth")
            });
            __alloyId622.add(__alloyId624);
            var __alloyId625 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId625);
            var __alloyId626 = Ti.UI.createLabel({
                text: "Stärke"
            });
            __alloyId625.add(__alloyId626);
            var __alloyId627 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["strength"] ? __alloyId566.__transform["strength"] : __alloyId566.get("strength")
            });
            __alloyId625.add(__alloyId627);
            var __alloyId628 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId628);
            var __alloyId629 = Ti.UI.createLabel({
                text: "Beckenneigung"
            });
            __alloyId628.add(__alloyId629);
            var __alloyId630 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["beckTilt"] ? __alloyId566.__transform["beckTilt"] : __alloyId566.get("beckTilt")
            });
            __alloyId628.add(__alloyId630);
            var __alloyId631 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId631);
            var __alloyId632 = Ti.UI.createLabel({
                text: "Beckenbreite"
            });
            __alloyId631.add(__alloyId632);
            var __alloyId633 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["beckWide"] ? __alloyId566.__transform["beckWide"] : __alloyId566.get("beckWide")
            });
            __alloyId631.add(__alloyId633);
            var __alloyId634 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId634);
            var __alloyId635 = Ti.UI.createLabel({
                text: "Hi.Beinwinkelung"
            });
            __alloyId634.add(__alloyId635);
            var __alloyId636 = Ti.UI.createLabel({
                text: "sdfsdaf"
            });
            __alloyId634.add(__alloyId636);
            var __alloyId637 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId637);
            var __alloyId638 = Ti.UI.createLabel({
                text: "Klauenwinkel"
            });
            __alloyId637.add(__alloyId638);
            var __alloyId639 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["stealAngle"] ? __alloyId566.__transform["stealAngle"] : __alloyId566.get("stealAngle")
            });
            __alloyId637.add(__alloyId639);
            var __alloyId640 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId640);
            var __alloyId641 = Ti.UI.createLabel({
                text: "Sprunggelenk"
            });
            __alloyId640.add(__alloyId641);
            var __alloyId642 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["hock"] ? __alloyId566.__transform["hock"] : __alloyId566.get("hock")
            });
            __alloyId640.add(__alloyId642);
            var __alloyId643 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId643);
            var __alloyId644 = Ti.UI.createLabel({
                text: "Hi.Beinstellung"
            });
            __alloyId643.add(__alloyId644);
            var __alloyId645 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["backLegsPosition"] ? __alloyId566.__transform["backLegsPosition"] : __alloyId566.get("backLegsPosition")
            });
            __alloyId643.add(__alloyId645);
            var __alloyId646 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId646);
            var __alloyId647 = Ti.UI.createLabel({
                text: "Bewegung"
            });
            __alloyId646.add(__alloyId647);
            var __alloyId648 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["movement"] ? __alloyId566.__transform["movement"] : __alloyId566.get("movement")
            });
            __alloyId646.add(__alloyId648);
            var __alloyId649 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId649);
            var __alloyId650 = Ti.UI.createLabel({
                text: "Hintereuterhöhe"
            });
            __alloyId649.add(__alloyId650);
            var __alloyId651 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["behindUdderHeight"] ? __alloyId566.__transform["behindUdderHeight"] : __alloyId566.get("behindUdderHeight")
            });
            __alloyId649.add(__alloyId651);
            var __alloyId652 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId652);
            var __alloyId653 = Ti.UI.createLabel({
                text: "Zentralband"
            });
            __alloyId652.add(__alloyId653);
            var __alloyId654 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["centralBelt"] ? __alloyId566.__transform["centralBelt"] : __alloyId566.get("centralBelt")
            });
            __alloyId652.add(__alloyId654);
            var __alloyId655 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId655);
            var __alloyId656 = Ti.UI.createLabel({
                text: "Strichplaz. vorne"
            });
            __alloyId655.add(__alloyId656);
            var __alloyId657 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["directionOfGrowthFront"] ? __alloyId566.__transform["directionOfGrowthFront"] : __alloyId566.get("directionOfGrowthFront")
            });
            __alloyId655.add(__alloyId657);
            var __alloyId658 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId658);
            var __alloyId659 = Ti.UI.createLabel({
                text: "Strichplaz. hinten"
            });
            __alloyId658.add(__alloyId659);
            var __alloyId660 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["directionOfGrowthBack"] ? __alloyId566.__transform["directionOfGrowthBack"] : __alloyId566.get("directionOfGrowthBack")
            });
            __alloyId658.add(__alloyId660);
            var __alloyId661 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId661);
            var __alloyId662 = Ti.UI.createLabel({
                text: "Vordereuteraufhängung"
            });
            __alloyId661.add(__alloyId662);
            var __alloyId663 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["foreUdderSuspension"] ? __alloyId566.__transform["foreUdderSuspension"] : __alloyId566.get("foreUdderSuspension")
            });
            __alloyId661.add(__alloyId663);
            var __alloyId664 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId664);
            var __alloyId665 = Ti.UI.createLabel({
                text: "Eutertiefe"
            });
            __alloyId664.add(__alloyId665);
            var __alloyId666 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["udderDepth"] ? __alloyId566.__transform["udderDepth"] : __alloyId566.get("udderDepth")
            });
            __alloyId664.add(__alloyId666);
            var __alloyId667 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId667);
            var __alloyId668 = Ti.UI.createLabel({
                text: "Strichlänge"
            });
            __alloyId667.add(__alloyId668);
            var __alloyId669 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId566.__transform["directionOfGrowthLength"] ? __alloyId566.__transform["directionOfGrowthLength"] : __alloyId566.get("directionOfGrowthLength")
            });
            __alloyId667.add(__alloyId669);
            var __alloyId671 = Ti.UI.createTableViewRow({});
            __alloyId672.add(__alloyId671);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "freshSemenDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.freshSemenDetails = Ti.UI.createWindow({
        id: "freshSemenDetails"
    });
    $.__views.freshSemenDetails && $.addTopLevelView($.__views.freshSemenDetails);
    $.__views.cowDetail = Ti.UI.createTableView({
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.freshSemenDetails.add($.__views.cowDetail);
    var __alloyId673 = Alloy.Collections["Alloy.Collections.freshSemenCol"] || Alloy.Collections.freshSemenCol;
    __alloyId673.on("fetch destroy change add remove reset", __alloyId674);
    exports.destroy = function() {
        __alloyId673.off("fetch destroy change add remove reset", __alloyId674);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;