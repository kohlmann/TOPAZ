function Controller() {
    function __alloyId24(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId24.opts || {};
        var models = __alloyId23.models;
        var len = models.length;
        var __alloyId20 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId21 = models[i];
            __alloyId21.__transform = {};
            var __alloyId22 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    searchableText: "undefined" != typeof __alloyId21.__transform["name"] ? __alloyId21.__transform["name"] : __alloyId21.get("name")
                },
                info: {
                    text: "undefined" != typeof __alloyId21.__transform["name"] ? __alloyId21.__transform["name"] : __alloyId21.get("name")
                },
                es_info: {
                    text: "undefined" != typeof __alloyId21.__transform["description"] ? __alloyId21.__transform["description"] : __alloyId21.get("description")
                },
                pic: {
                    image: "undefined" != typeof __alloyId21.__transform["cowImage"] ? __alloyId21.__transform["cowImage"] : __alloyId21.get("cowImage")
                }
            };
            __alloyId20.push(__alloyId22);
        }
        opts.animation ? $.__views.__alloyId19.setItems(__alloyId20, opts.animation) : $.__views.__alloyId19.setItems(__alloyId20);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cowList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("cowModel");
    $.__views.searchBar = Ti.UI.createSearchBar({
        id: "searchBar",
        barColor: "#000",
        visible: "false"
    });
    var __alloyId13 = {};
    var __alloyId15 = [];
    var __alloyId16 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: Alloy.CFG.itemIconWidth,
            height: Alloy.CFG.itemIconHeight,
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId15.push(__alloyId16);
    var __alloyId17 = {
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
    __alloyId15.push(__alloyId17);
    var __alloyId18 = {
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
    __alloyId15.push(__alloyId18);
    var __alloyId14 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId15
    };
    __alloyId13["template"] = __alloyId14;
    $.__views.__alloyId19 = Ti.UI.createListSection({
        id: "__alloyId19"
    });
    var __alloyId23 = Alloy.Collections["cowModel"] || cowModel;
    __alloyId23.on("fetch destroy change add remove reset", __alloyId24);
    var __alloyId25 = [];
    __alloyId25.push($.__views.__alloyId19);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId25,
        templates: __alloyId13,
        searchView: $.__views.searchBar,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.listView && $.addTopLevelView($.__views.listView);
    exports.destroy = function() {
        __alloyId23.off("fetch destroy change add remove reset", __alloyId24);
    };
    _.extend($, $.__views);
    require("cow");
    require("dummyDataGenerator");
    var cowModels = Alloy.Collections.cowModel, m_Cow = cow, m_Cow1 = cow, m_Cow2 = cow;
    if (1 > cowModels.length) {
        for (i = 0; 10 >= i; i++) {
            m_Cow.cowAll(i, "Aval", "geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV", "/images/cow.png", "/images/cowDetails01.png", "/images/cowDetails01.png", "/images/breedingValues.png");
            dummyDataGenerator.addCow(cowModels, m_Cow);
            dummyDataGenerator.saveCows();
        }
        m_Cow.cowAll(1, "Aval", "geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV", "/images/cow.png", "/images/cowDetails01.png", "/images/cowDetails01.png", "/images/breedingValues.png");
        dummyDataGenerator.addCow(cowModels, m_Cow);
        dummyDataGenerator.saveCows();
        m_Cow1.cowAll(2, "Georg", "geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV", "/images/cow.png", "/images/cowDetails01.png", "/images/cowDetails01.png", "/images/breedingValues.png");
        dummyDataGenerator.addCow(cowModels, m_Cow1);
        dummyDataGenerator.saveCows();
        m_Cow2.cowAll(3, "Test", "geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV", "/images/cow.png", "/images/cowDetails01.png", "/images/cowDetails01.png", "/images/breedingValues.png");
        dummyDataGenerator.addCow(cowModels, m_Cow2);
        dummyDataGenerator.saveCows();
    } else dummyDataGenerator.loadCows();
    $.listView.addEventListener("itemclick", function() {
        console.log("----------------------test-------------------");
        console.log(Titanium.Platform.displayCaps.platformWidth + "  " + Titanium.Platform.displayCaps.platformHeight + " " + Titanium.Platform.displayCaps.xdpi);
        Titanium.UI.ListSection;
        sections = $.listView.getSections();
        items = sections[0].getItems();
        console.log(items[3].itemId);
        var win = Alloy.createController("cowDetails").getView();
        win.open();
    });
    $.listView.addEventListener("swipe", function() {
        $.searchBar.setVisible("true");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;