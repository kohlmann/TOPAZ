function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "startScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId3 = [];
    $.__views.header = {
        properties: {
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            backgroundImage: "/images/MAR_Logo01_xl.png",
            id: "header"
        }
    };
    __alloyId3.push($.__views.header);
    $.__views.body = {
        properties: {
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            backgroundImage: "/images/grid_an_hintergrund_ap01.png",
            id: "body"
        }
    };
    __alloyId3.push($.__views.body);
    $.__views.footer = {
        properties: {
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            backgroundImage: "/images/MAR_Logo01_xl.png",
            id: "footer"
        }
    };
    __alloyId3.push($.__views.footer);
    $.__views.__alloyId1 = Ti.UI.createListSection({
        id: "__alloyId1"
    });
    $.__views.__alloyId1.items = __alloyId3;
    var __alloyId4 = [];
    __alloyId4.push($.__views.__alloyId1);
    $.__views.startScreen = Ti.UI.createListView({
        sections: __alloyId4,
        id: "startScreen"
    });
    $.__views.startScreen && $.addTopLevelView($.__views.startScreen);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;