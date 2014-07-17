function Controller() {
    function __alloyId13(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId13.opts || {};
        var models = __alloyId12.models;
        var len = models.length;
        var __alloyId9 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId10 = models[i];
            __alloyId10.__transform = {};
            var __alloyId11 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10"
                },
                info: {
                    text: "undefined" != typeof __alloyId10.__transform["ID"] ? __alloyId10.__transform["ID"] : __alloyId10.get("ID")
                }
            };
            __alloyId9.push(__alloyId11);
        }
        opts.animation ? $.__views.__alloyId8.setItems(__alloyId9, opts.animation) : $.__views.__alloyId8.setItems(__alloyId9);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("cowsMod");
    $.__views.about = Ti.UI.createWindow({
        id: "about"
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    var __alloyId2 = {};
    var __alloyId4 = [];
    var __alloyId5 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: Alloy.CFG.itemIconWidth,
            height: Alloy.CFG.itemIconHeight,
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId4.push(__alloyId5);
    var __alloyId6 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            color: "black",
            backgroundColor: "transparent",
            font: {
                fontFamily: "Arial",
                fontSize: Alloy.CFG.itemTitleFontsize,
                fontWeight: "bold"
            },
            left: Alloy.CFG.itemLeft,
            top: 0,
            bindId: "info"
        }
    };
    __alloyId4.push(__alloyId6);
    var __alloyId7 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            color: "gray",
            backgroundColor: "transparent",
            font: {
                fontFamily: "Arial",
                fontSize: Alloy.CFG.itemSubtitleFontsize
            },
            left: Alloy.CFG.itemLeft,
            top: Alloy.CFG.itemTop,
            bindId: "es_info"
        }
    };
    __alloyId4.push(__alloyId7);
    var __alloyId3 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId4
    };
    __alloyId2["template"] = __alloyId3;
    $.__views.__alloyId8 = Ti.UI.createListSection({
        id: "__alloyId8"
    });
    var __alloyId12 = Alloy.Collections["Alloy.Collections.cowCol"] || Alloy.Collections.cowCol;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    var __alloyId14 = [];
    __alloyId14.push($.__views.__alloyId8);
    $.__views.listView = Ti.UI.createListView({
        backgroundColor: "white",
        sections: __alloyId14,
        templates: __alloyId2,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.about.add($.__views.listView);
    exports.destroy = function() {
        __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;