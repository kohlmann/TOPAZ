function Controller() {
    function __alloyId44(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId44.opts || {};
        var models = __alloyId43.models;
        var len = models.length;
        var __alloyId37 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId40 = models[i];
            __alloyId40.__transform = {};
            var __alloyId42 = Alloy.createController("listItem", {
                $model: __alloyId40,
                __parentSymbol: __parentSymbol
            });
            __alloyId37.push(__alloyId42.getViewEx({
                recurse: true
            }));
        }
        opts.animation ? $.__views.__alloyId36.setItems(__alloyId37, opts.animation) : $.__views.__alloyId36.setItems(__alloyId37);
    }
    function __alloyId61(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId61.opts || {};
        var models = __alloyId60.models;
        var len = models.length;
        var __alloyId54 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId57 = models[i];
            __alloyId57.__transform = {};
            var __alloyId59 = Alloy.createController("listItem", {
                $model: __alloyId57,
                __parentSymbol: __parentSymbol
            });
            __alloyId54.push(__alloyId59.getViewEx({
                recurse: true
            }));
        }
        opts.animation ? $.__views.__alloyId53.setItems(__alloyId54, opts.animation) : $.__views.__alloyId53.setItems(__alloyId54);
    }
    function closeWindow() {
        $.tabGroup.close();
        $.destroy();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "kuehetab";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("kuehe");
    var __alloyId28 = [];
    $.__views.holWindow = Ti.UI.createWindow({
        id: "holWindow",
        layout: "vertical"
    });
    $.__views.buttonview = Ti.UI.createView({
        backgroundColor: "red",
        height: "50dp",
        top: "20dp",
        id: "buttonview"
    });
    $.__views.holWindow.add($.__views.buttonview);
    $.__views.closeWindow = Ti.UI.createButton({
        color: "white",
        top: "7dp",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        title: "Schließen",
        id: "closeWindow"
    });
    $.__views.buttonview.add($.__views.closeWindow);
    closeWindow ? $.__views.closeWindow.addEventListener("click", closeWindow) : __defers["$.__views.closeWindow!click!closeWindow"] = true;
    $.__views.searchBar = Ti.UI.createSearchBar({
        id: "searchBar",
        barColor: "#000",
        visible: "false"
    });
    var __alloyId29 = {};
    var __alloyId32 = [];
    var __alloyId33 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            top: "5dp",
            left: "10dp",
            font: {
                fontSize: "20dp",
                fontWeight: "bold"
            },
            bindId: "name"
        }
    };
    __alloyId32.push(__alloyId33);
    var __alloyId34 = {
        type: "Ti.UI.Label",
        bindId: "rzg",
        properties: {
            bindId: "rzg"
        }
    };
    __alloyId32.push(__alloyId34);
    var __alloyId35 = {
        type: "Ti.UI.Label",
        bindId: "herdbuchnr",
        properties: {
            top: "10dp",
            right: "10dp",
            font: {
                fontSize: "16dp",
                fontWeight: "normal"
            },
            bindId: "herdbuchnr"
        }
    };
    __alloyId32.push(__alloyId35);
    var __alloyId31 = {
        properties: {
            name: "myTemplate"
        },
        childTemplates: __alloyId32
    };
    __alloyId29["myTemplate"] = __alloyId31;
    $.__views.__alloyId36 = Ti.UI.createListSection({
        id: "__alloyId36"
    });
    var __alloyId43 = Alloy.Collections["kuehe"] || kuehe;
    __alloyId43.on("fetch destroy change add remove reset", __alloyId44);
    var __alloyId45 = [];
    __alloyId45.push($.__views.__alloyId36);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId45,
        templates: __alloyId29,
        searchView: $.__views.searchBar,
        id: "list",
        defaultItemTemplate: "myTemplate"
    });
    $.__views.holWindow.add($.__views.list);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.holWindow,
        id: "tab1",
        title: "HOL"
    });
    __alloyId28.push($.__views.tab1);
    $.__views.redWindow = Ti.UI.createWindow({
        id: "redWindow",
        layout: "vertical"
    });
    $.__views.searchBar = Ti.UI.createSearchBar({
        id: "searchBar",
        barColor: "#000",
        visible: "false"
    });
    var __alloyId46 = {};
    var __alloyId49 = [];
    var __alloyId50 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            top: "5dp",
            left: "10dp",
            font: {
                fontSize: "20dp",
                fontWeight: "bold"
            },
            bindId: "name"
        }
    };
    __alloyId49.push(__alloyId50);
    var __alloyId51 = {
        type: "Ti.UI.Label",
        bindId: "rzg",
        properties: {
            bindId: "rzg"
        }
    };
    __alloyId49.push(__alloyId51);
    var __alloyId52 = {
        type: "Ti.UI.Label",
        bindId: "herdbuchnr",
        properties: {
            top: "10dp",
            right: "10dp",
            font: {
                fontSize: "16dp",
                fontWeight: "normal"
            },
            bindId: "herdbuchnr"
        }
    };
    __alloyId49.push(__alloyId52);
    var __alloyId48 = {
        properties: {
            name: "myTemplate"
        },
        childTemplates: __alloyId49
    };
    __alloyId46["myTemplate"] = __alloyId48;
    $.__views.__alloyId53 = Ti.UI.createListSection({
        id: "__alloyId53"
    });
    var __alloyId60 = Alloy.Collections["kuehe"] || kuehe;
    __alloyId60.on("fetch destroy change add remove reset", __alloyId61);
    var __alloyId62 = [];
    __alloyId62.push($.__views.__alloyId53);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId62,
        templates: __alloyId46,
        searchView: $.__views.searchBar,
        id: "list",
        defaultItemTemplate: "myTemplate"
    });
    $.__views.redWindow.add($.__views.list);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.redWindow,
        id: "tab2",
        title: "RED"
    });
    __alloyId28.push($.__views.tab2);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId28,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId43.off("fetch destroy change add remove reset", __alloyId44);
        __alloyId60.off("fetch destroy change add remove reset", __alloyId61);
    };
    _.extend($, $.__views);
    var kuhCollection = Alloy.Collections.kuehe;
    var data = kuhCollection.fetch();
    var kuehe = Alloy.createModel("kuehe", data);
    kuhCollection.add(kuehe);
    kuhCollection.fetch();
    __defers["$.__views.closeWindow!click!closeWindow"] && $.__views.closeWindow.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;