function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cowDetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.cowDetails = Ti.UI.createView({
        id: "cowDetails"
    });
    $.__views.cowDetails && $.addTopLevelView($.__views.cowDetails);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        text: "hallo",
        id: "__alloyId18"
    });
    $.__views.cowDetails.add($.__views.__alloyId18);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;