function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId782(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId782.opts || {};
        var models = __alloyId781.models;
        var len = models.length;
        var __alloyId778 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId779 = models[i];
            __alloyId779.__transform = {};
            var __alloyId780 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10"
                },
                name: {
                    text: "undefined" != typeof __alloyId779.__transform["name"] ? __alloyId779.__transform["name"] : __alloyId779.get("name")
                },
                date: {
                    text: "undefined" != typeof __alloyId779.__transform["date"] ? __alloyId779.__transform["date"] : __alloyId779.get("date")
                }
            };
            __alloyId778.push(__alloyId780);
        }
        opts.animation ? $.__views.__alloyId777.setItems(__alloyId778, opts.animation) : $.__views.__alloyId777.setItems(__alloyId778);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "uelzenDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("appointmentMod");
    $.__views.uelzenDetails = Ti.UI.createWindow({
        id: "uelzenDetails"
    });
    $.__views.uelzenDetails && $.addTopLevelView($.__views.uelzenDetails);
    var __alloyId772 = {};
    var __alloyId774 = [];
    var __alloyId775 = {
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
    __alloyId774.push(__alloyId775);
    var __alloyId776 = {
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
    __alloyId774.push(__alloyId776);
    var __alloyId773 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId774
    };
    __alloyId772["template"] = __alloyId773;
    $.__views.__alloyId777 = Ti.UI.createListSection({
        id: "__alloyId777"
    });
    var __alloyId781 = Alloy.Collections["Alloy.Collections.uelzenCol"] || Alloy.Collections.uelzenCol;
    __alloyId781.on("fetch destroy change add remove reset", __alloyId782);
    var __alloyId783 = [];
    __alloyId783.push($.__views.__alloyId777);
    $.__views.listView = Ti.UI.createListView({
        backgroundColor: "white",
        sections: __alloyId783,
        templates: __alloyId772,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.uelzenDetails.add($.__views.listView);
    exports.destroy = function() {
        __alloyId781.off("fetch destroy change add remove reset", __alloyId782);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;