function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "kuehe vorher";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("kuhlistTransform");
    var kuhCollection = Alloy.Collections.kuehe;
    kuhCollection.add(kuehe);
    var data = kuhCollection.fetch({
        query: "SELECT * FROM kuehe WHERE Name IS NOT Null"
    });
    var kuehe = Alloy.createModel("kuehe", data);
    kuhCollection.sort();
    $.list.addEventListener("longpress", function() {
        $.searchBar.setVisible("true");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;