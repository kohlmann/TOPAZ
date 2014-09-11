function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId340(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId340.opts || {};
        var models = __alloyId339.models;
        var len = models.length;
        var __alloyId336 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId337 = models[i];
            __alloyId337.__transform = {};
            var __alloyId338 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId337.__transform["id"] ? __alloyId337.__transform["id"] : __alloyId337.get("id")
                },
                name: {
                    text: "undefined" != typeof __alloyId337.__transform["name"] ? __alloyId337.__transform["name"] : __alloyId337.get("name")
                }
            };
            __alloyId336.push(__alloyId338);
        }
        opts.animation ? $.__views.__alloyId335.setItems(__alloyId336, opts.animation) : $.__views.__alloyId335.setItems(__alloyId336);
    }
    function itemClick() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favorites";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("favoriteMod");
    var __alloyId329 = [];
    $.__views.__alloyId330 = Ti.UI.createWindow({
        id: "__alloyId330"
    });
    var __alloyId331 = {};
    var __alloyId333 = [];
    var __alloyId334 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            color: "black",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "60dp",
            top: 0,
            bindId: "name"
        }
    };
    __alloyId333.push(__alloyId334);
    var __alloyId332 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId333
    };
    __alloyId331["template"] = __alloyId332;
    $.__views.__alloyId335 = Ti.UI.createListSection({
        id: "__alloyId335"
    });
    var __alloyId339 = Alloy.Collections["Alloy.Collections.allFavoritesCol"] || Alloy.Collections.allFavoritesCol;
    __alloyId339.on("fetch destroy change add remove reset", __alloyId340);
    var __alloyId341 = [];
    __alloyId341.push($.__views.__alloyId335);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId341,
        templates: __alloyId331,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId330.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.allFavoritesTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId330,
        id: "allFavoritesTab"
    });
    __alloyId329.push($.__views.allFavoritesTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId329,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId339.off("fetch destroy change add remove reset", __alloyId340);
    };
    _.extend($, $.__views);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;