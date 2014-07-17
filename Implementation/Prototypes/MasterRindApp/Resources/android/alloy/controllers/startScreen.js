function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "startScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewSection({
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.body = Ti.UI.createView({
        width: Alloy.Globals.screenWidth,
        height: Alloy.Globals.screenHeight,
        backgroundImage: "/images/grid_an_hintergrund_ap01.png",
        id: "body",
        layout: "horizontal",
        horizontalWrap: "true",
        singletap: "vklick"
    });
    $.__views.__alloyId2.add($.__views.body);
    $.__views.startScreen = Ti.UI.createTableView({
        data: __alloyId0,
        id: "startScreen"
    });
    $.__views.startScreen && $.addTopLevelView($.__views.startScreen);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.body.addEventListener("singletap", function() {
        console.log("adslkhfabshfasdhfkdsahfkasdf");
        console.log(Alloy.Globals.screenWidth + " " + Alloy.Globals.screenHeight + " " + Titanium.Platform.displayCaps.dpi);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;