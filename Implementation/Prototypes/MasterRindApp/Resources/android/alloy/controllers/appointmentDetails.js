function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId12(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId12.opts || {};
        var models = __alloyId11.models;
        var len = models.length;
        var __alloyId8 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId9 = models[i];
            __alloyId9.__transform = {};
            var __alloyId10 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10"
                },
                name: {
                    text: "undefined" != typeof __alloyId9.__transform["name"] ? __alloyId9.__transform["name"] : __alloyId9.get("name")
                },
                date: {
                    text: "undefined" != typeof __alloyId9.__transform["date"] ? __alloyId9.__transform["date"] : __alloyId9.get("date")
                }
            };
            __alloyId8.push(__alloyId10);
        }
        opts.animation ? $.__views.__alloyId7.setItems(__alloyId8, opts.animation) : $.__views.__alloyId7.setItems(__alloyId8);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "appointmentDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("appointmentMod");
    $.__views.appointmentDetails = Ti.UI.createWindow({
        id: "appointmentDetails"
    });
    $.__views.appointmentDetails && $.addTopLevelView($.__views.appointmentDetails);
    var __alloyId2 = {};
    var __alloyId4 = [];
    var __alloyId5 = {
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
    __alloyId4.push(__alloyId5);
    var __alloyId6 = {
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
    __alloyId4.push(__alloyId6);
    var __alloyId3 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId4
    };
    __alloyId2["template"] = __alloyId3;
    $.__views.__alloyId7 = Ti.UI.createListSection({
        id: "__alloyId7"
    });
    var __alloyId11 = Alloy.Collections["Alloy.Collections.bremervoerdeCol"] || Alloy.Collections.bremervoerdeCol;
    __alloyId11.on("fetch destroy change add remove reset", __alloyId12);
    var __alloyId13 = [];
    __alloyId13.push($.__views.__alloyId7);
    $.__views.listView = Ti.UI.createListView({
        backgroundColor: "white",
        sections: __alloyId13,
        templates: __alloyId2,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.appointmentDetails.add($.__views.listView);
    exports.destroy = function() {
        __alloyId11.off("fetch destroy change add remove reset", __alloyId12);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;