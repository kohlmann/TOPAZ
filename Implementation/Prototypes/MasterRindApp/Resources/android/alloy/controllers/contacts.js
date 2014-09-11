function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId141(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId141.opts || {};
        var models = __alloyId140.models;
        var len = models.length;
        var __alloyId137 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId138 = models[i];
            __alloyId138.__transform = {};
            var __alloyId139 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    searchableText: "undefined" != typeof __alloyId138.__transform["name"] ? __alloyId138.__transform["name"] : __alloyId138.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId138.__transform["name"] ? __alloyId138.__transform["name"] : __alloyId138.get("name")
                },
                info: {
                    text: "undefined" != typeof __alloyId138.__transform["info"] ? __alloyId138.__transform["info"] : __alloyId138.get("info")
                }
            };
            __alloyId137.push(__alloyId139);
        }
        opts.animation ? $.__views.__alloyId136.setItems(__alloyId137, opts.animation) : $.__views.__alloyId136.setItems(__alloyId137);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contacts";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("contactMod");
    var __alloyId129 = [];
    $.__views.__alloyId130 = Ti.UI.createWindow({
        id: "__alloyId130"
    });
    var __alloyId131 = {};
    var __alloyId133 = [];
    var __alloyId134 = {
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
            left: "10dp",
            top: 0,
            bindId: "name"
        }
    };
    __alloyId133.push(__alloyId134);
    var __alloyId135 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            color: "gray",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "10dp",
            top: "25dp",
            bindId: "info"
        }
    };
    __alloyId133.push(__alloyId135);
    var __alloyId132 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId133
    };
    __alloyId131["template"] = __alloyId132;
    $.__views.__alloyId136 = Ti.UI.createListSection({
        id: "__alloyId136"
    });
    var __alloyId140 = Alloy.Collections["Alloy.Collections.animalSalesCol"] || Alloy.Collections.animalSalesCol;
    __alloyId140.on("fetch destroy change add remove reset", __alloyId141);
    var __alloyId142 = [];
    __alloyId142.push($.__views.__alloyId136);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId142,
        templates: __alloyId131,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId130.add($.__views.listView);
    $.__views.animalSalesTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId130,
        id: "animalSalesTab"
    });
    __alloyId129.push($.__views.animalSalesTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId129,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId140.off("fetch destroy change add remove reset", __alloyId141);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;