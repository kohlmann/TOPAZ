function Controller() {
    function __alloyId15(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId15.opts || {};
        var models = __alloyId14.models;
        var len = models.length;
        var __alloyId11 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = {};
            var __alloyId13 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    searchableText: "undefined" != typeof __alloyId12.__transform["name"] ? __alloyId12.__transform["name"] : __alloyId12.get("name")
                },
                info: {
                    text: "undefined" != typeof __alloyId12.__transform["name"] ? __alloyId12.__transform["name"] : __alloyId12.get("name")
                },
                es_info: {
                    text: "undefined" != typeof __alloyId12.__transform["info"] ? __alloyId12.__transform["info"] : __alloyId12.get("info")
                },
                pic: {
                    image: "undefined" != typeof __alloyId12.__transform["image"] ? __alloyId12.__transform["image"] : __alloyId12.get("image")
                }
            };
            __alloyId11.push(__alloyId13);
        }
        opts.animation ? $.__views.__alloyId10.setItems(__alloyId11, opts.animation) : $.__views.__alloyId10.setItems(__alloyId11);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "blackColored";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("cowsMod");
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createWindow({
        id: "__alloyId3"
    });
    var __alloyId4 = {};
    var __alloyId6 = [];
    var __alloyId7 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId6.push(__alloyId7);
    var __alloyId8 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            color: "black",
            backgroundColor: "transparent",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "60dp",
            top: 0,
            bindId: "info"
        }
    };
    __alloyId6.push(__alloyId8);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            color: "gray",
            backgroundColor: "transparent",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "60dp",
            top: "25dp",
            bindId: "es_info"
        }
    };
    __alloyId6.push(__alloyId9);
    var __alloyId5 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId6
    };
    __alloyId4["template"] = __alloyId5;
    $.__views.__alloyId10 = Ti.UI.createListSection({
        id: "__alloyId10"
    });
    var __alloyId14 = Alloy.Collections["Alloy.Collections.cowCol"] || Alloy.Collections.cowCol;
    __alloyId14.on("fetch destroy change add remove reset", __alloyId15);
    var __alloyId16 = [];
    __alloyId16.push($.__views.__alloyId10);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId16,
        templates: __alloyId4,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId3.add($.__views.listView);
    $.__views.allCowsTab = Ti.UI.createTab({
        height: "100dp",
        title: "Alle",
        backgroundImage: "/images/grid_icon_sbt.png",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId3,
        id: "allCowsTab",
        icon: "/images/grid_icon_sbt.png",
        backgroundColor: "white"
    });
    __alloyId2.push($.__views.allCowsTab);
    $.__views.__alloyId17 = Ti.UI.createWindow({
        id: "__alloyId17"
    });
    $.__views.genomicsTab = Ti.UI.createTab({
        title: "Genomics",
        backgroundImage: "/images/grid_icon_genomics.png",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId17,
        id: "genomicsTab",
        icon: "/images/grid_icon_genomics.png"
    });
    __alloyId2.push($.__views.genomicsTab);
    $.__views.__alloyId18 = Ti.UI.createWindow({
        id: "__alloyId18"
    });
    $.__views.daughterTestedTab = Ti.UI.createTab({
        title: "Geprüfte",
        backgroundImage: "/images/grid_icon_gepruefte.png",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId18,
        id: "daughterTestedTab",
        icon: "/images/grid_icon_gepruefte.png"
    });
    __alloyId2.push($.__views.daughterTestedTab);
    $.__views.__alloyId19 = Ti.UI.createWindow({
        id: "__alloyId19"
    });
    $.__views.hornlessTab = Ti.UI.createTab({
        title: "Hornlose",
        backgroundImage: "/images/grid_icon_hornlose.png",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId19,
        id: "hornlessTab",
        icon: "/images/grid_icon_hornlose.png"
    });
    __alloyId2.push($.__views.hornlessTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundImage: "images/grid_icon_sbt.png",
        backgroundSelectedColor: "blue",
        tabs: __alloyId2,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId14.off("fetch destroy change add remove reset", __alloyId15);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;