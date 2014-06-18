function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "searchTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2"
    });
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#000",
        showCancel: "true",
        height: "43",
        top: "0"
    });
    $.__views.win2.add($.__views.search);
    $.__views.searchTab = Ti.UI.createTab({
        window: $.__views.win2,
        id: "searchTab"
    });
    $.__views.searchTab && $.addTopLevelView($.__views.searchTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;