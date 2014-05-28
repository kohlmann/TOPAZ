function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cowDetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowModel");
    $.__views.cowDetails = Ti.UI.createWindow({
        id: "cowDetails"
    });
    $.__views.cowDetails && $.addTopLevelView($.__views.cowDetails);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.cowDetails.add($.__views.__alloyId0);
    $.__views.img = Ti.UI.createImageView({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        top: "10",
        left: "10",
        righ: "10",
        id: "img",
        image: "/images/cow.png"
    });
    $.__views.__alloyId0.add($.__views.img);
    $.__views.lb0 = Ti.UI.createLabel({
        id: "lb0",
        text: "GRZG"
    });
    $.__views.__alloyId0.add($.__views.lb0);
    $.__views.lb1 = Ti.UI.createLabel({
        color: "white",
        top: "50%",
        right: "10",
        id: "lb1",
        text: "GRZM"
    });
    $.__views.__alloyId0.add($.__views.lb1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;