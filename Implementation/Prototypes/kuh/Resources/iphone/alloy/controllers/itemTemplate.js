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
    this.__controllerPath = "itemTemplate";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId7 = [];
    var __alloyId8 = {
        type: "Ti.UI.ImageView",
        bindId: "leftALImage",
        properties: {
            left: "5dp",
            top: "5dp",
            width: "55dp",
            height: "40dp",
            bindId: "leftALImage"
        }
    };
    __alloyId7.push(__alloyId8);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "headline",
        properties: {
            color: "#000",
            font: {
                fontSize: "16dp",
                fontWeight: "bold"
            },
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            top: "5dp",
            left: "65dp",
            right: "10dp",
            bindId: "headline"
        }
    };
    __alloyId7.push(__alloyId9);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "subheadline",
        properties: {
            color: "#222",
            font: {
                fontSize: "14dp"
            },
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            left: "65dp",
            top: "30dp",
            bottom: "5dp",
            bindId: "subheadline"
        }
    };
    __alloyId7.push(__alloyId10);
    var __alloyId11 = {
        type: "Ti.UI.Label",
        bindId: "rasse",
        properties: {
            color: "#222",
            font: {
                fontSize: "10dp"
            },
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            right: "5dp",
            top: "10dp",
            bottom: "5dp",
            left: "280dp",
            bindId: "rasse"
        }
    };
    __alloyId7.push(__alloyId11);
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "itemId",
        properties: {
            color: "#222",
            font: {
                fontSize: "14dp"
            },
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            right: "5dp",
            top: "30dp",
            bottom: "5dp",
            bindId: "itemId"
        }
    };
    __alloyId7.push(__alloyId12);
    $.__views.itemTemplate = {
        properties: {
            name: "requiredTemplate",
            id: "itemTemplate"
        },
        childTemplates: __alloyId7
    };
    __itemTemplate["requiredTemplate"] = $.__views.itemTemplate;
    $.__views.itemTemplate && $.addTopLevelView($.__views.itemTemplate);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;