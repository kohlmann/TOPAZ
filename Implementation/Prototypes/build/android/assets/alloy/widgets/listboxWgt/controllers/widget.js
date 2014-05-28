function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "listboxWgt/" + s : s.substring(0, index) + "/listboxWgt/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("listboxWgt");
    this.__widgetId = "listboxWgt";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId2 = [];
    $.__views.__alloyId3 = {
        properties: {
            id: "__alloyId3"
        }
    };
    __alloyId2.push($.__views.__alloyId3);
    $.__views.__alloyId0 = Ti.UI.createListSection({
        id: "__alloyId0"
    });
    $.__views.__alloyId0.items = __alloyId2;
    var __alloyId4 = [];
    __alloyId4.push($.__views.__alloyId0);
    $.__views.widget = Ti.UI.createListView({
        sections: __alloyId4,
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;