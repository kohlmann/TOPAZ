function Controller() {
    function __alloyId20(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId20.opts || {};
        var models = __alloyId19.models;
        var len = models.length;
        var __alloyId15 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId18 = {
                info: {
                    text: "undefined" != typeof __alloyId16.__transform["name"] ? __alloyId16.__transform["name"] : __alloyId16.get("name")
                },
                es_info: {
                    text: "undefined" != typeof __alloyId16.__transform["description"] ? __alloyId16.__transform["description"] : __alloyId16.get("description")
                },
                pic: {
                    image: "undefined" != typeof __alloyId16.__transform["cowImage"] ? __alloyId16.__transform["cowImage"] : __alloyId16.get("cowImage")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId16.__transform["name"] ? __alloyId16.__transform["name"] : __alloyId16.get("name")
                }
            };
            __alloyId15.push(__alloyId18);
        }
        opts.animation ? $.__views.__alloyId14.setItems(__alloyId15, opts.animation) : $.__views.__alloyId14.setItems(__alloyId15);
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
    var __alloyId8 = {};
    var __alloyId10 = [];
    var __alloyId11 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: Alloy.CFG.itemIconWidth,
            height: Alloy.CFG.itemIconHeight,
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId10.push(__alloyId11);
    var __alloyId12 = {
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
    __alloyId10.push(__alloyId12);
    var __alloyId13 = {
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
    __alloyId10.push(__alloyId13);
    var __alloyId9 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId10
    };
    __alloyId8["template"] = __alloyId9;
    $.__views.__alloyId14 = Ti.UI.createListSection({
        id: "__alloyId14"
    });
    var __alloyId19 = Alloy.Collections["cowModel"] || cowModel;
    __alloyId19.on("fetch destroy change add remove reset", __alloyId20);
    var __alloyId21 = [];
    __alloyId21.push($.__views.__alloyId14);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId21,
        templates: __alloyId8,
        searchView: $.__views.searchBar,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.listView && $.addTopLevelView($.__views.listView);
    exports.destroy = function() {
        __alloyId19.off("fetch destroy change add remove reset", __alloyId20);
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
        console.log(Titanium.Platform.displayCaps.platformWidth + "  " + Titanium.Platform.displayCaps.platformHeight);
        Titanium.UI.ListSection;
        sections = $.listView.getSections();
        items = sections[0].getItems();
        console.log(items[3]);
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