function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function kuhList() {
        var kuhWindow = Alloy.createController("kuehe").getView();
        kuhWindow.open();
    }
    function kuhListRed() {
        var redKuhWindow = Alloy.createController("kueheRed").getView();
        redKuhWindow.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("kuehe");
    var __alloyId2 = [];
    $.__views.kueheWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "kueheWindow",
        title: "Kuehe",
        layout: "vertical"
    });
    $.__views.kuhlist = Ti.UI.createButton({
        width: "300dp",
        height: "60dp",
        color: "#000",
        borderColor: "#000",
        borderWidth: "1dp",
        borderRadius: "10dp",
        top: "10dp",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        title: "Kuehe in ListView",
        id: "kuhlist"
    });
    $.__views.kueheWindow.add($.__views.kuhlist);
    kuhList ? $.__views.kuhlist.addEventListener("click", kuhList) : __defers["$.__views.kuhlist!click!kuhList"] = true;
    $.__views.kuhlistred = Ti.UI.createButton({
        width: "300dp",
        height: "60dp",
        color: "#000",
        borderColor: "#000",
        borderWidth: "1dp",
        borderRadius: "10dp",
        top: "10dp",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        title: "Rote Kuehe in ListView",
        id: "kuhlistred"
    });
    $.__views.kueheWindow.add($.__views.kuhlistred);
    kuhListRed ? $.__views.kuhlistred.addEventListener("click", kuhListRed) : __defers["$.__views.kuhlistred!click!kuhListRed"] = true;
    $.__views.__alloyId3 = Ti.UI.createTab({
        window: $.__views.kueheWindow,
        title: "Start",
        icon: "KS_nav_ui.png",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "__alloyId5"
    });
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        text: "Tab 2",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId4"
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId2,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.kuhlist!click!kuhList"] && $.__views.kuhlist.addEventListener("click", kuhList);
    __defers["$.__views.kuhlistred!click!kuhListRed"] && $.__views.kuhlistred.addEventListener("click", kuhListRed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;