function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId672(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId672.opts || {};
        var models = __alloyId671.models;
        var len = models.length;
        var __alloyId668 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId669 = models[i];
            __alloyId669.__transform = {};
            var __alloyId670 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10"
                },
                name: {
                    text: "undefined" != typeof __alloyId669.__transform["name"] ? __alloyId669.__transform["name"] : __alloyId669.get("name")
                },
                date: {
                    text: "undefined" != typeof __alloyId669.__transform["date"] ? __alloyId669.__transform["date"] : __alloyId669.get("date")
                }
            };
            __alloyId668.push(__alloyId670);
        }
        opts.animation ? $.__views.__alloyId667.setItems(__alloyId668, opts.animation) : $.__views.__alloyId667.setItems(__alloyId668);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "lingenDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("appointmentMod");
    $.__views.lingenDetails = Ti.UI.createWindow({
        id: "lingenDetails"
    });
    $.__views.lingenDetails && $.addTopLevelView($.__views.lingenDetails);
    var __alloyId662 = {};
    var __alloyId664 = [];
    var __alloyId665 = {
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
    __alloyId664.push(__alloyId665);
    var __alloyId666 = {
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
    __alloyId664.push(__alloyId666);
    var __alloyId663 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId664
    };
    __alloyId662["template"] = __alloyId663;
    $.__views.__alloyId667 = Ti.UI.createListSection({
        id: "__alloyId667"
    });
    var __alloyId671 = Alloy.Collections["Alloy.Collections.lingenCol"] || Alloy.Collections.lingenCol;
    __alloyId671.on("fetch destroy change add remove reset", __alloyId672);
    var __alloyId673 = [];
    __alloyId673.push($.__views.__alloyId667);
    $.__views.listView = Ti.UI.createListView({
        backgroundColor: "white",
        sections: __alloyId673,
        templates: __alloyId662,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.lingenDetails.add($.__views.listView);
    exports.destroy = function() {
        __alloyId671.off("fetch destroy change add remove reset", __alloyId672);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;