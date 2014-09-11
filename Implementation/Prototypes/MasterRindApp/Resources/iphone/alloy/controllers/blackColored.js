function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId19(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId19.opts || {};
        var models = __alloyId18.models;
        var len = models.length;
        var __alloyId15 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId17 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    searchableText: "undefined" != typeof __alloyId16.__transform["name"] ? __alloyId16.__transform["name"] : __alloyId16.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId16.__transform["name"] ? __alloyId16.__transform["name"] : __alloyId16.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId16.__transform["aAa"] ? __alloyId16.__transform["aAa"] : __alloyId16.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId16.__transform["gRZG"] ? __alloyId16.__transform["gRZG"] : __alloyId16.get("gRZG")
                },
                f: {
                    text: "undefined" != typeof __alloyId16.__transform["f"] ? __alloyId16.__transform["f"] : __alloyId16.get("f")
                },
                ff: {
                    text: "undefined" != typeof __alloyId16.__transform["ff"] ? __alloyId16.__transform["ff"] : __alloyId16.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId16.__transform["fff"] ? __alloyId16.__transform["fff"] : __alloyId16.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId16.__transform["image"] ? __alloyId16.__transform["image"] : __alloyId16.get("image")
                }
            };
            __alloyId15.push(__alloyId17);
        }
        opts.animation ? $.__views.__alloyId14.setItems(__alloyId15, opts.animation) : $.__views.__alloyId14.setItems(__alloyId15);
    }
    function __alloyId33(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId33.opts || {};
        var models = __alloyId32.models;
        var len = models.length;
        var __alloyId29 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId30 = models[i];
            __alloyId30.__transform = {};
            var __alloyId31 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    searchableText: "undefined" != typeof __alloyId30.__transform["name"] ? __alloyId30.__transform["name"] : __alloyId30.get("name")
                },
                info: {
                    text: "undefined" != typeof __alloyId30.__transform["name"] ? __alloyId30.__transform["name"] : __alloyId30.get("name")
                },
                es_info: {
                    text: "undefined" != typeof __alloyId30.__transform["father"] ? __alloyId30.__transform["father"] : __alloyId30.get("father")
                },
                pic: {
                    image: "undefined" != typeof __alloyId30.__transform["image"] ? __alloyId30.__transform["image"] : __alloyId30.get("image")
                }
            };
            __alloyId29.push(__alloyId31);
        }
        opts.animation ? $.__views.__alloyId28.setItems(__alloyId29, opts.animation) : $.__views.__alloyId28.setItems(__alloyId29);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "blackColored";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
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
        bindId: "name",
        properties: {
            color: "black",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "60dp",
            top: 0,
            bindId: "name"
        }
    };
    __alloyId6.push(__alloyId8);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "aAa",
        properties: {
            color: "black",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "160dp",
            top: 0,
            bindId: "aAa"
        }
    };
    __alloyId6.push(__alloyId9);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "gRZG",
        properties: {
            color: "black",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "260dp",
            top: 0,
            bindId: "gRZG"
        }
    };
    __alloyId6.push(__alloyId10);
    var __alloyId11 = {
        type: "Ti.UI.Label",
        bindId: "f",
        properties: {
            bindId: "f"
        }
    };
    __alloyId6.push(__alloyId11);
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "ff",
        properties: {
            bindId: "ff"
        }
    };
    __alloyId6.push(__alloyId12);
    var __alloyId13 = {
        type: "Ti.UI.Label",
        bindId: "fff",
        properties: {
            bindId: "fff"
        }
    };
    __alloyId6.push(__alloyId13);
    var __alloyId5 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId6
    };
    __alloyId4["template"] = __alloyId5;
    $.__views.__alloyId14 = Ti.UI.createListSection({
        id: "__alloyId14"
    });
    var __alloyId18 = Alloy.Collections["Alloy.Collections.allCowsCol"] || Alloy.Collections.allCowsCol;
    __alloyId18.on("fetch destroy change add remove reset", __alloyId19);
    var __alloyId20 = [];
    __alloyId20.push($.__views.__alloyId14);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId20,
        templates: __alloyId4,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId3.add($.__views.listView);
    $.__views.allCowsTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId3,
        id: "allCowsTab"
    });
    __alloyId2.push($.__views.allCowsTab);
    $.__views.__alloyId21 = Ti.UI.createWindow({
        id: "__alloyId21"
    });
    var __alloyId22 = {};
    var __alloyId24 = [];
    var __alloyId25 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId24.push(__alloyId25);
    var __alloyId26 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            bindId: "info"
        }
    };
    __alloyId24.push(__alloyId26);
    var __alloyId27 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            color: "gray",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "60dp",
            top: "25dp",
            bindId: "es_info"
        }
    };
    __alloyId24.push(__alloyId27);
    var __alloyId23 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId24
    };
    __alloyId22["template"] = __alloyId23;
    $.__views.__alloyId28 = Ti.UI.createListSection({
        id: "__alloyId28"
    });
    var __alloyId32 = Alloy.Collections["Alloy.Collections.genomicsCol"] || Alloy.Collections.genomicsCol;
    __alloyId32.on("fetch destroy change add remove reset", __alloyId33);
    var __alloyId34 = [];
    __alloyId34.push($.__views.__alloyId28);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId34,
        templates: __alloyId22,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId21.add($.__views.listView);
    $.__views.genomicsTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Genomics",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId21,
        id: "genomicsTab"
    });
    __alloyId2.push($.__views.genomicsTab);
    $.__views.__alloyId35 = Ti.UI.createWindow({
        id: "__alloyId35"
    });
    $.__views.daughterTestedTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Geprüfte",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId35,
        id: "daughterTestedTab"
    });
    __alloyId2.push($.__views.daughterTestedTab);
    $.__views.__alloyId36 = Ti.UI.createWindow({
        id: "__alloyId36"
    });
    $.__views.hornlessTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Hornlose",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId36,
        id: "hornlessTab"
    });
    __alloyId2.push($.__views.hornlessTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId2,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId18.off("fetch destroy change add remove reset", __alloyId19);
        __alloyId32.off("fetch destroy change add remove reset", __alloyId33);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;