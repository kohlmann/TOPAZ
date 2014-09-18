function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId125(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId125.opts || {};
        var models = __alloyId124.models;
        var len = models.length;
        var __alloyId121 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId122 = models[i];
            __alloyId122.__transform = {};
            var __alloyId123 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10"
                },
                name: {
                    text: "undefined" != typeof __alloyId122.__transform["name"] ? __alloyId122.__transform["name"] : __alloyId122.get("name")
                },
                date: {
                    text: "undefined" != typeof __alloyId122.__transform["date"] ? __alloyId122.__transform["date"] : __alloyId122.get("date")
                }
            };
            __alloyId121.push(__alloyId123);
        }
        opts.animation ? $.__views.__alloyId120.setItems(__alloyId121, opts.animation) : $.__views.__alloyId120.setItems(__alloyId121);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cloppenburgDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("appointmentMod");
    $.__views.cloppenburgDetails = Ti.UI.createWindow({
        id: "cloppenburgDetails"
    });
    $.__views.cloppenburgDetails && $.addTopLevelView($.__views.cloppenburgDetails);
    var __alloyId115 = {};
    var __alloyId117 = [];
    var __alloyId118 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            color: "gray",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "10dp",
            top: "25dp",
            bindId: "name"
        }
    };
    __alloyId117.push(__alloyId118);
    var __alloyId119 = {
        type: "Ti.UI.Label",
        bindId: "date",
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
            bindId: "date"
        }
    };
    __alloyId117.push(__alloyId119);
    var __alloyId116 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId117
    };
    __alloyId115["template"] = __alloyId116;
    $.__views.__alloyId120 = Ti.UI.createListSection({
        id: "__alloyId120"
    });
    var __alloyId124 = Alloy.Collections["Alloy.Collections.cloppenburgCol"] || Alloy.Collections.cloppenburgCol;
    __alloyId124.on("fetch destroy change add remove reset", __alloyId125);
    var __alloyId126 = [];
    __alloyId126.push($.__views.__alloyId120);
    $.__views.listView = Ti.UI.createListView({
        backgroundColor: "white",
        sections: __alloyId126,
        templates: __alloyId115,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.cloppenburgDetails.add($.__views.listView);
    exports.destroy = function() {
        __alloyId124.off("fetch destroy change add remove reset", __alloyId125);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;