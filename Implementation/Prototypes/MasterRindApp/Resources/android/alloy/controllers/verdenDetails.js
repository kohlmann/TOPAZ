function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId796(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId796.opts || {};
        var models = __alloyId795.models;
        var len = models.length;
        var __alloyId792 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId793 = models[i];
            __alloyId793.__transform = {};
            var __alloyId794 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10"
                },
                name: {
                    text: "undefined" != typeof __alloyId793.__transform["name"] ? __alloyId793.__transform["name"] : __alloyId793.get("name")
                },
                date: {
                    text: "undefined" != typeof __alloyId793.__transform["date"] ? __alloyId793.__transform["date"] : __alloyId793.get("date")
                }
            };
            __alloyId792.push(__alloyId794);
        }
        opts.animation ? $.__views.__alloyId791.setItems(__alloyId792, opts.animation) : $.__views.__alloyId791.setItems(__alloyId792);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "verdenDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("appointmentMod");
    $.__views.verdenDetails = Ti.UI.createWindow({
        id: "verdenDetails"
    });
    $.__views.verdenDetails && $.addTopLevelView($.__views.verdenDetails);
    var __alloyId786 = {};
    var __alloyId788 = [];
    var __alloyId789 = {
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
    __alloyId788.push(__alloyId789);
    var __alloyId790 = {
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
    __alloyId788.push(__alloyId790);
    var __alloyId787 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId788
    };
    __alloyId786["template"] = __alloyId787;
    $.__views.__alloyId791 = Ti.UI.createListSection({
        id: "__alloyId791"
    });
    var __alloyId795 = Alloy.Collections["Alloy.Collections.verdenCol"] || Alloy.Collections.verdenCol;
    __alloyId795.on("fetch destroy change add remove reset", __alloyId796);
    var __alloyId797 = [];
    __alloyId797.push($.__views.__alloyId791);
    $.__views.listView = Ti.UI.createListView({
        backgroundColor: "white",
        sections: __alloyId797,
        templates: __alloyId786,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.verdenDetails.add($.__views.listView);
    exports.destroy = function() {
        __alloyId795.off("fetch destroy change add remove reset", __alloyId796);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;