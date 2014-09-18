function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId111(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId111.opts || {};
        var models = __alloyId110.models;
        var len = models.length;
        var __alloyId107 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId108 = models[i];
            __alloyId108.__transform = {};
            var __alloyId109 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10"
                },
                name: {
                    text: "undefined" != typeof __alloyId108.__transform["name"] ? __alloyId108.__transform["name"] : __alloyId108.get("name")
                },
                date: {
                    text: "undefined" != typeof __alloyId108.__transform["date"] ? __alloyId108.__transform["date"] : __alloyId108.get("date")
                }
            };
            __alloyId107.push(__alloyId109);
        }
        opts.animation ? $.__views.__alloyId106.setItems(__alloyId107, opts.animation) : $.__views.__alloyId106.setItems(__alloyId107);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bremervoerdeDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("appointmentMod");
    $.__views.bremervoerdeDetails = Ti.UI.createWindow({
        id: "bremervoerdeDetails"
    });
    $.__views.bremervoerdeDetails && $.addTopLevelView($.__views.bremervoerdeDetails);
    var __alloyId101 = {};
    var __alloyId103 = [];
    var __alloyId104 = {
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
    __alloyId103.push(__alloyId104);
    var __alloyId105 = {
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
    __alloyId103.push(__alloyId105);
    var __alloyId102 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId103
    };
    __alloyId101["template"] = __alloyId102;
    $.__views.__alloyId106 = Ti.UI.createListSection({
        id: "__alloyId106"
    });
    var __alloyId110 = Alloy.Collections["Alloy.Collections.bremervoerdeCol"] || Alloy.Collections.bremervoerdeCol;
    __alloyId110.on("fetch destroy change add remove reset", __alloyId111);
    var __alloyId112 = [];
    __alloyId112.push($.__views.__alloyId106);
    $.__views.listView = Ti.UI.createListView({
        backgroundColor: "white",
        sections: __alloyId112,
        templates: __alloyId101,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.bremervoerdeDetails.add($.__views.listView);
    exports.destroy = function() {
        __alloyId110.off("fetch destroy change add remove reset", __alloyId111);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;