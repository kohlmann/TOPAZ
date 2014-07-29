function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId43(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId43.opts || {};
        var models = redFilter(__alloyId42);
        var len = models.length;
        var __alloyId36 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId39 = models[i];
            __alloyId39.__transform = transformFunction(__alloyId39);
            var __alloyId41 = Alloy.createController("listItem", {
                $model: __alloyId39,
                __parentSymbol: __parentSymbol
            });
            __alloyId36.push(__alloyId41.getViewEx({
                recurse: true
            }));
        }
        opts.animation ? $.__views.__alloyId35.setItems(__alloyId36, opts.animation) : $.__views.__alloyId35.setItems(__alloyId36);
    }
    function redFilter(collection) {
        return collection.where({
            Rasse: "RED"
        });
    }
    function closeWindow() {
        $.redWindow.close();
        $.destroy();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "kueheRed";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("kuehe");
    $.__views.redWindow = Ti.UI.createWindow({
        id: "redWindow",
        layout: "vertical"
    });
    $.__views.redWindow && $.addTopLevelView($.__views.redWindow);
    $.__views.buttonview = Ti.UI.createView({
        backgroundColor: "red",
        height: "50dp",
        top: "20dp",
        id: "buttonview"
    });
    $.__views.redWindow.add($.__views.buttonview);
    $.__views.closeWindow = Ti.UI.createButton({
        color: "white",
        top: "10dp",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        title: "Schließen",
        id: "closeWindow"
    });
    $.__views.buttonview.add($.__views.closeWindow);
    closeWindow ? $.__views.closeWindow.addEventListener("click", closeWindow) : __defers["$.__views.closeWindow!click!closeWindow"] = true;
    $.__views.searchBar = Ti.UI.createSearchBar({
        id: "searchBar",
        barColor: "#000",
        visible: "false"
    });
    var __alloyId32 = {};
    Alloy.createController("itemTemplate", {
        __parentSymbol: __parentSymbol,
        __itemTemplate: __alloyId32
    });
    $.__views.__alloyId35 = Ti.UI.createListSection({
        id: "__alloyId35"
    });
    var __alloyId42 = Alloy.Collections["kuehe"] || kuehe;
    __alloyId42.on("fetch destroy change add remove reset", __alloyId43);
    var __alloyId44 = [];
    __alloyId44.push($.__views.__alloyId35);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId44,
        templates: __alloyId32,
        searchView: $.__views.searchBar,
        id: "list",
        defaultItemTemplate: "requiredTemplate"
    });
    $.__views.redWindow.add($.__views.list);
    exports.destroy = function() {
        __alloyId42.off("fetch destroy change add remove reset", __alloyId43);
    };
    _.extend($, $.__views);
    var transformFunction = require("/kuhlistTransform").transformFunction;
    var kuhCollection = Alloy.Collections.kuehe;
    kuhCollection.add(kuehe);
    var data = kuhCollection.fetch({
        query: "SELECT * FROM kuehe WHERE Name IS NOT Null"
    });
    var kuehe = Alloy.createModel("kuehe", data);
    kuhCollection.sort();
    __defers["$.__views.closeWindow!click!closeWindow"] && $.__views.closeWindow.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;